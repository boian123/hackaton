import React, { useEffect, useState } from 'react'
import { addUser } from '../API'
import Particles from "react-tsparticles";
// import Register from './Register'
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
     <div className="container" >
         <p className="line-1 anim-typewriter">Udoma consultant</p>
     </div>

  <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
           {/* <Register saveUser={handleSaveUser} />     */}
        <Navbar/>

    </div>

  )
}
