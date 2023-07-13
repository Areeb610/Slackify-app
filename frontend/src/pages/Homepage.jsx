import React from 'react'
import Signup from '../components/Signup'
import { Box, Typography} from '@mui/material';

const Homepage = () => {
  return (
      <div className='home' >
    <Box
      minHeight="5vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontFamily="Work Sans" marginTop="40px" variant="h2" align="center" color='white'>
         Welcome to Slackify
      </Typography>
    </Box>
      <Signup/>
    </div>
  )
}
export default Homepage