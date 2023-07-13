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
} from '@mui/material';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const submitHandler = async ()=>{
    // checking null fields
    if(!email || !password){
      alert('Please fill all fields');
      return;
    }
    // calling api
      try {
        const apiUrl='http://localhost:5000/api/user/login'
        const config ={
          headers:{
          "Content-type":"application/json"
        }
        };
        const {data} = await axios.post(
          apiUrl,
          {email,password},
          config
        );
        JSON.stringify(data);
        console.log(data);
        let message = data.message;
        let successStatus = data.success;
        if(successStatus){
          history.push('/workspace')
        }
        console.log(message);
      // error handling 
      } catch (error) {
        console.log(error); 
      }
    
  }
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Login
              </Typography>
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                onChange={(e)=>setName(e.target.value)}
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                label="Email"
                type='email'
                variant="outlined"
                fullWidth
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={submitHandler}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
