import {
  BlockStack,
  Button,
  ButtonGroup,
  Card,
  InlineGrid,
  Text,
} from '@shopify/polaris';
import { ArrowLeftIcon, EditIcon, DeleteIcon } from "@shopify/polaris-icons"
import { useParams, useNavigate } from "react-router-dom"

import { ViewUserStyled } from "./styled"
import { useGetUserQuery, useDeleteUserMutation } from '@/redux/query';

export default function ViewUser() {
    const { userId } = useParams()
    const navigate = useNavigate()
    const { data: user } = useGetUserQuery(userId || '')
    const [deleteUser] = useDeleteUserMutation()

    return (
        <ViewUserStyled>
            {user ? (
                <Card roundedAbove="sm">
                    <BlockStack gap="400">
                        <BlockStack gap="200">
                            <div className="return-arrow">
                                <Button
                                    icon={ArrowLeftIcon}
                                    variant="tertiary"
                                    onClick={() => {navigate("/")}}
                                    accessibilityLabel="Return"
                                />
                            </div>
                            <Text as="h2" variant="headingXl">
                                User
                            </Text>
                            <Text as="p" variant="bodyLg" fontWeight="bold">
                                {user.firstName} {user.lastName}
                            </Text>
                        </BlockStack>
                        <BlockStack gap="200">
                            <InlineGrid columns="1fr auto">
                                <Text as="h3" variant="headingLg" fontWeight="medium">
                                    Information
                                </Text>
                                <ButtonGroup>
                                    <Button
                                        icon={DeleteIcon}
                                        variant="tertiary"
                                        tone="critical"
                                        onClick={() => {
                                            deleteUser(user.id || '')
                                            navigate("/")
                                        }}
                                        accessibilityLabel="Delete"
                                    />
                                    <Button
                                        icon={EditIcon}
                                        variant="tertiary"
                                        onClick={() => {navigate(`/edit/${user.id}`)}}
                                        accessibilityLabel="Edit"
                                    />
                                </ButtonGroup>
                            </InlineGrid>
                            <Text as="p" variant="bodyLg">
                                <Text as="span" fontWeight="bold">Email: </Text>{user.email}
                            </Text>
                            <Text as="p" variant="bodyLg">
                                <Text as="span" fontWeight="bold">Phone number: </Text>{user.phone}
                            </Text>
                            <Text as="p" variant="bodyLg">
                                <Text as="span" fontWeight="bold">Age: </Text>{user.age}
                            </Text>
                            <Text as="p" variant="bodyLg">
                                <Text as="span" fontWeight="bold">Gender: </Text>{user.gender}
                            </Text>
                            <Text as="p" variant="bodyLg">
                                <Text as="span" fontWeight="bold">Birth date: </Text>{user.birthDate}
                            </Text>
                            <Text as="p" variant="bodyLg">
                                <Text as="span" fontWeight="bold">Address: </Text>{user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}
                            </Text>
                        </BlockStack>
                    </BlockStack>
                </Card>
            ) : (
                <Card>
                    <h1>Loading...</h1>
                </Card>
            )}
        </ViewUserStyled>
    )
}