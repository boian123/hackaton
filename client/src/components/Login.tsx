import React, { useState } from 'react'

type Props = { 
  saveUser: (e: React.FormEvent, formData: IUser | any) => void 
}

const loginUser: React.FC<Props> = ({ saveUser }) => {
  const [formData, setFormData] = useState<IUser | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveUser(e, formData)}>
      <div>
        <div>
          <label htmlFor='email'>Email</label>
          <input onChange={handleForm} type='text' id='email' />
        </div>
        <div>
          <label htmlFor='username'>Username</label>
          <input onChange={handleForm} type='text' id='username' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input onChange={handleForm} type='text' id='password' />
        </div>
      </div>
      
      <button disabled={formData === undefined ? true: false} type='submit' >Sign Up</button>
    </form>
  )
}

export default loginUser
