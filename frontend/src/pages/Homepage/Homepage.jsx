import React from 'react'
import Signup from '../../components/Signup'
import { Box, Typography} from '@mui/material';
import './Homepage.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Homepage = () => {
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
    <BrowserRouter>
      <Signup/>
      </BrowserRouter>
    </div>
  )
}
export default Homepage