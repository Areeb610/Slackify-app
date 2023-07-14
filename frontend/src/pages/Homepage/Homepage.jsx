import React from 'react'
import { useEffect, useState } from 'react';
import Signup from '../../components/Signup';
import { Box, Typography} from '@mui/material';
import './Homepage.css'
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const history = useHistory();
  const [user , setUser] = useState();
    useEffect( () => { 
       const userInfo = localStorage.getItem("userInfo");
       setUser(userInfo); 
       // if user not registerd
       if(user){
        history.push('/chats')
       }
    }, [history]);
  return (
      <div className='home' >
    <Box
      minHeight="5vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontFamily="'Inter', sans-serif" marginTop="40px" variant="h2" align="center" color='white'>
         Welcome to Slackify
      </Typography>
    </Box>
      <Signup/>
    </div>
  )
}
export default Homepage