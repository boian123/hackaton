import React, { useState } from 'react'
import Particles from "react-tsparticles";



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
    align: 'center',
    borderRadius:'20px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


type Props = { 
  saveUser: (e: React.FormEvent, formData: IUser | any) => void 
}

const AddUser: React.FC<Props> = ({ saveUser }) => {

  // const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  // const [formData, setFormData] = useState<IUser | {}>()

  // const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
  //   setFormData({
  //     ...formData,
  //     [e.currentTarget.id]: e.currentTarget.value,
  //   })
  // }

  return (
    <div className="registerDiv">
    
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


{/* <Card className={classes.root}>
      <CardContent>
     
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
   
      
    </form>
      </CardContent>
      <CardActions>
        <Button size="small"  disabled={formData === undefined ? true: false} type='submit'>Sign Up</Button>
      </CardActions>
      
    </Card>
 */}

      
  
    </div>
   
  )
}

export default AddUser
