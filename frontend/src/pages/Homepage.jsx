import React from 'react'
import Signup from './Signup'
import './Homepage.css'
import { Box, Typography, Link } from '@mui/material';

const Homepage = () => {
  return (
    <div className='home' >
    <Box
      minHeight="5vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop="30px"
    >
      <Typography variant="h2" align="center" color='white'>
         Welcome to Slackify
      </Typography>
    </Box>
      <Signup/>
    </div>
  )
}

export default Homepage