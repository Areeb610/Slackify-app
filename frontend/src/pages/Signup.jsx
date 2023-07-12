import React from 'react';
import {
  Box,
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Link
} from '@mui/material';

function Signup() {
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
              <TextField label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" type="email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type="password" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button variant="contained" color="primary" fullWidth>
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

