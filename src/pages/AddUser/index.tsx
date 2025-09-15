import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { AddUserStyled } from "./styled"
import type { User } from "@/types/components/user"
import UserForm from "../components/UserForm"
import { initialState } from "@/constants/initState"
import { useAddUserMutation } from "@/redux/query"

export default function AddUser() {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>(initialState)

    const [addUser] = useAddUserMutation()

    return (
        <AddUserStyled>
            <UserForm 
                title="Add user"
                navigate={navigate}
                setUser={setUser}
                user={user}
                submitAction={() => {
                    addUser(user)
                    navigate("/")
                }}
                cancelAction={() => {
                    navigate("/")
                }}
            />
        </AddUserStyled>
    )
}