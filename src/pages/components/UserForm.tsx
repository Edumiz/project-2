import {
    Button,
    Card,
    FormLayout,
    InlineStack,
    RadioButton,
    Text,
    TextField,
} from "@shopify/polaris"
import { ArrowLeftIcon } from "@shopify/polaris-icons"

import type { User } from "@/types/components/user";

interface UserFormProps {
    title: string
    navigate: (path: string) => void;
    setUser: (user: User) => void;
    user: User;
    submitAction: () => void;
    cancelAction: () => void;
}

export default function UserForm({ ...props }: UserFormProps) {
    return (
        <Card>
            <div className="return-arrow">
                <Button
                    icon={ArrowLeftIcon}
                    variant="tertiary"
                    onClick={() => {props.navigate("/")}}
                    accessibilityLabel="Return"
                />
                <Text as="h1" variant="headingLg" fontWeight="medium">{props.title}</Text>
            </div>                
            <FormLayout>
                <TextField 
                    label="First name"
                    value={props.user.firstName}
                    onChange={(value) => {
                        props.setUser({ ...props.user, firstName: value })
                    }}
                    autoComplete="off"
                />
                <TextField 
                    label="Last name"
                    value={props.user.lastName}
                    onChange={(value) => {
                        props.setUser({ ...props.user, lastName: value })
                    }}
                    autoComplete="off"
                />
                <TextField 
                    label="Age"
                    type="number"
                    value={String(props.user.age)}
                    onChange={(value) => {
                        props.setUser({ ...props.user, age: value })
                    }}
                    autoComplete="off"
                />
                Gender
                <InlineStack gap="400">
                    <RadioButton 
                        label="Male"
                        checked={props.user.gender === 'male'}
                        name="gender"
                        id="male"
                        onChange={() => {
                            props.setUser({ ...props.user, gender: 'male' })
                        }}
                    />       
                    <RadioButton 
                        label="Female"
                        checked={props.user.gender === 'female'}
                        name="gender"
                        id="female"
                        onChange={() => {
                            props.setUser({ ...props.user, gender: 'female' })
                        }}
                    />                                                                  
                </InlineStack>
                <TextField 
                    label="Birth date"
                    type="date"
                    value={props.user.birthDate}
                    onChange={(value) => {
                        props.setUser({ ...props.user, birthDate: value })
                    }}
                    autoComplete="off"  
                />
                <FormLayout.Group>
                    <TextField 
                        label="Address"
                        value={props.user.address.address}
                        onChange={(value) => {
                            props.setUser({ ...props.user, address: {...props.user.address, address: value}})
                        }}
                        autoComplete="off"
                    />
                    <TextField 
                        label="City"
                        value={props.user.address.city || ''}
                        onChange={(value) => {
                            props.setUser({ ...props.user, address: { ...props.user.address, city: value }})
                        }}
                        autoComplete="off"
                    />
                    <TextField 
                        label="State"
                        value={props.user.address.state || ''}
                        onChange={(value) => {
                            props.setUser({ ...props.user, address: { ...props.user.address, state: value }})
                        }}
                        autoComplete="off"
                    />
                    <TextField 
                        label="Postal code"
                        value={props.user.address.postalCode || ''}
                        onChange={(value) => {
                            props.setUser({...props.user, address: { ...props.user.address, postalCode: value }})
                        }}
                        autoComplete="off"
                    />                                                                        
                </FormLayout.Group>
            </FormLayout>
            <div className="btn">
                <Button
                    onClick={() => {
                        props.submitAction()
                    }}
                    variant="primary"
                >
                    Save
                </Button>
                <Button
                    onClick={() => {
                        props.cancelAction()
                    }}
                >
                    Cancel
                </Button>
            </div>
        </Card>
    )
}