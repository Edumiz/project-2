import { useState, useEffect } from 'react'

export default function FetchUsersAPI ( url: string ) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUsers(data.users)
        })
    }, [url])

    return users
}