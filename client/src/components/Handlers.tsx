import React, { useEffect, useState } from 'react'
import { addUser } from '../API'

import Register from './Register'
import Navbar from './Navbar'




export default function Handlers() {

  const [users, setUsers] = useState<IUser[]>([])


  


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





 
  return (
    <div>  
   <div className="focus"> 
    <div className="focus--mask">
      <div className="focus--mask-inner">KOKAIN</div>
    </div>
  </div>
           <Register saveUser={handleSaveUser} />    
        <Navbar/>
        
    </div>
  
  )
}




