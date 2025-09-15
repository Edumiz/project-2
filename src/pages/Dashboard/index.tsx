import {
  Button,
  ButtonGroup,
  Card,
  IndexTable,
  useBreakpoints,
} from '@shopify/polaris';

import {
  ViewIcon,
  EditIcon,
  DeleteIcon,
  PlusIcon
} from '@shopify/polaris-icons'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useGetUsersQuery, useDeleteUserMutation, useFilterUsersQuery, useSortUsersQuery } from '@/redux/query';
import type { User } from '@/types/components/user';
import FilterUsers from './component/FilterUsers';
import SortUsers from './component/SortUsers';
import { DashboardStyled, ActionStyled } from './styled';


export default function Dashboard() {
  const navigate = useNavigate() 
  const [skip, setSkip] = useState(0)
  const [deleteUser] = useDeleteUserMutation()

  const filterParams = useSelector((state: any) => state.filterParams);
  const [currFilterParams, setCurrFilterParams] = useState(filterParams)

  const sortParams = useSelector((state: any) => state.sortParams);
  const [currSortParams, setCurrSortParams] = useState(sortParams)


  const {
      data: filteredUsersRes = [],
  } = useFilterUsersQuery(filterParams, {skip: false})

  const filteredUsers = (filteredUsersRes as any)?.users || []

  const {
    data: usersRes = [],
  } = useGetUsersQuery({
    limit: 0,
    sortBy: sortParams.category,
    order: sortParams.order
  })

  const users = (usersRes as any)?.users || []
  
  const usersDisplayed = (filterParams.active) ? filteredUsers.slice(skip, skip + 10) : users.slice(skip, skip + 10)
  
  const resourceName = {
    singular: 'user',
    plural: 'users',
  };

  const rowMarkup = usersDisplayed.map((user: User, index: number) => (
    <IndexTable.Row
      id={user.id}
      key={user.id}
      position={index}
    >
      <IndexTable.Cell>{user.id}</IndexTable.Cell>
      <IndexTable.Cell>{user.firstName} {user.lastName}</IndexTable.Cell>
      <IndexTable.Cell>{user.email}</IndexTable.Cell>
      <IndexTable.Cell>{user.phone}</IndexTable.Cell>
      <IndexTable.Cell>
        <ActionStyled>
          <ButtonGroup>
            <Button
                icon={ViewIcon}
                variant="tertiary"
                onClick={() => {navigate(`/view/${user.id}`)}}
                accessibilityLabel="View"
            />
            <Button
                icon={EditIcon}
                variant="tertiary"
                onClick={() => {navigate(`/edit/${user.id}`)}}
                accessibilityLabel="Edit"
            />
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
          </ButtonGroup>
        </ActionStyled>
      </IndexTable.Cell>
    </IndexTable.Row>
  ))

  return (
    <DashboardStyled>
      <Card>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Button
            icon={PlusIcon}
            onClick={() => {navigate('/add')}}
            accessibilityLabel='Add user'
          >
            Add user
          </Button>
          <div style={{display: 'flex', gap: '10px'}}>
            <FilterUsers 
              filterParams={filterParams}
              currParams={currFilterParams}
              setCurrParams={setCurrFilterParams}
            />
            <SortUsers 
              sortParams={sortParams}
              currParams={currSortParams}
              setCurrParams={setCurrSortParams}
            />
          </div>
        </div>
        <IndexTable
          condensed={useBreakpoints().smDown}
          resourceName={resourceName}
          itemCount={users.length}
          headings={[
            {title: 'ID'},
            {title: 'Name'},
            {title: 'Email'},
            {title: 'Phone number'},
            {title: 'Actions'}
          ]}
          selectable={false}
          pagination={{
            hasPrevious: (skip > 0),
            hasNext: (skip < users.length - 10),
            onPrevious: () => {setSkip(skip - 10)},
            onNext: () => {setSkip(skip + 10)},
          }}
        >
          {rowMarkup}
          {/* {dispatchUser()} */}
        </IndexTable>
      </Card>
    </DashboardStyled>
  )
}
