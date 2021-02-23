import React from 'react'

type Props = UserProps & {
    updateUsername: (user: IUser) => void
    deleteUser: (_id: string) => void
}

const User: React.FC<Props> = ({ user, updateUsername, deleteUser }) => {

  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1>{user.username}</h1>
        <span>{user.email}</span>
      </div>
      <div className='Card--button'>
    
        <button
          onClick={() => deleteUser(user._id)}
          className='Card--button__delete'
        >
          Delete
        </button>
        
      </div>
    </div>
  )
}

export default User


