import React from 'react'
import {
  Box,
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  IconButton,
  Button
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
const Chatspage = () => {  
  return (
    <Box width='100vw' minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" mb={4}>
            Slack Chat
          </Typography>
          <Box minHeight="300px" maxHeight="400px" overflow="auto" mb={4}>
          </Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10}>
              <TextField
                label="Type a message"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary">
                Send
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}
export default Chatspage