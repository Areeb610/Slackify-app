import { useState } from "react";
import axios from "axios";
import "./Login.css";
import {
  Box,
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const submitHandler = async () => {
    // checking null fields
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    try {
      const apiUrl = "http://localhost:5000/api/user/login";
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(apiUrl, { email, password }, config);
      JSON.stringify(data);
      let succesStatus = data.success;
      let message = data.message;
      if (succesStatus) {
        history.push("/workspace");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <Box
        minHeight="5vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          fontFamily="'Inter', sans-serif;"
          marginTop="40px"
          variant="h2"
          align="center"
          color="white"
        >
          Slackify
        </Typography>
      </Box>
      <Box
        minHeight="5vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          fontFamily="'Inter', sans-serif;"
          marginTop="40px"
          variant="h6"
          align="center"
          color="white"
        >
          Continue with your login info.
        </Typography>
      </Box>
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        marginTop="140px"
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
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}

export default Login;
