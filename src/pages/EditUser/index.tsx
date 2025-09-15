import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { EditUserStyled } from "./styled"
import type { User } from "@/types/components/user"
import FormatDate from "./component/formatDate"
import UserForm from "../components/UserForm"
import { useGetUserQuery, useEditUserMutation } from "@/redux/query"
import { initialState } from "@/constants/initState"

export default function EditUser() {
    const navigate = useNavigate()
    const { userId } = useParams()
    const [user, setUser] = useState<User>(initialState)
    const { data: userRes } = useGetUserQuery(userId || '')

    useEffect(() => {
        if (userRes) {
            setUser({...userRes, birthDate: FormatDate(userRes.birthDate)})
        }
    }, [userRes])

    const [editUser] = useEditUserMutation()

    return (
        <EditUserStyled>
            <UserForm 
                title="Edit user"
                navigate={navigate}
                setUser={setUser}
                user={user}
                submitAction={() => {
                    editUser(user)
                    navigate(`/view/${userId}`)
                }}
                cancelAction={() => {
                    navigate(`/view/${userId}`)
                }}
            />
        </EditUserStyled>
    )
}