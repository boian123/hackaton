import React, { useEffect, useState } from 'react'
import { getUsers, addUser, updateUsername, deleteUser } from '../API'
import User from './User'
import Register from './Register'
import Navbar from './Navbar'




export default function Handlers() {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  

  const fetchUsers = (): void => {
    getUsers()
    .then(({ data: { users } }: IUser[] | any) => setUsers(users))
    .catch((err: Error) => console.log(err))
  }

 const handleSaveUser = (e: React.FormEvent, formData: IUser): void => {
   e.preventDefault()
   addUser(formData)
   .then(({ status, data}) => {
    if (status !== 201) {
      throw new Error('Error! User not saved')
    }
    setUsers(data.users)
  })
  .catch((err) => console.log(err))
}

  const handleUpdateUsername = (user: IUser): void => {
    updateUsername(user)
    .then(({ status, data }) => {
        if ( status !== 200) {
          throw new Error('Error! User not updated')
        }
        setUsers(data.users)
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteUser = (_id: string): void => {
    deleteUser(_id)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! User not deleted')
        }
        setUsers(data.users)
      })
      .catch((err) => console.log(err))
  }


 
  return (
    <div>
           <Register saveUser={handleSaveUser} />
            {users.map((user: IUser) => (
        <User
          key={user._id}
          updateUsername={handleUpdateUsername}
          deleteUser={handleDeleteUser}
          user={user}
        />
        ))}
        <Navbar/>
    </div>
  
  )
}




