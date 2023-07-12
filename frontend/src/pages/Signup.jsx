import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Link, 
} from '@mui/material';

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  
  // Handling form input
  const submitHandler = async ()=>{
    // checking null fields
    if(!name || !email || !password || !confirmPassword){
      alert('Please fill all fields');
      return;
    }
    //checking password
    if(password!==confirmPassword){
      alert('Password did not match');
      return;
    }
    // Calling api
    try {
      const config ={
        headers:{
        "Content-type":"application/json"
      },
      };
      const {data} = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {name, password},
        config
      );
      JSON.stringify(data);
      console.log(data);
      
    } catch (error) {
      
    }

  }
  return (
    <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Name" name='name' variant="outlined" fullWidth 
                onChange={(e)=>setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" type="email" variant="outlined" fullWidth 
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" name='password' type="password" variant="outlined" fullWidth 
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                name='confirmPassword'
                type="password"
                variant="outlined"
                fullWidth
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button variant="contained" color="primary" fullWidth
              onClick={submitHandler}
              >
                Sign Up
              </Button>
              <Typography variant="body1" marginTop='10px' >
                <Link href="/login" color="primary">
                   Already have an account? Login in
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;

