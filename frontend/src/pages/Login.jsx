import React from 'react';
import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = ()=>{
    console.log('click working')
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
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                onChange={(e)=>setName(e.target.value)}
              />
            </Grid>
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
