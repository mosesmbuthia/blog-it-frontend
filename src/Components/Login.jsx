import React from 'react';
import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../Store/userStore.js';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import axios from 'axios';


const LoginContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: '20px',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '15px',
  maxWidth: '500px',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    '&:hover fieldset': {
      borderColor: '#6B48FF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6B48FF',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: '25px',
  background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #5a3de6 30%, #00c4d4 90%)',
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

function Login() {

  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const setUserInformation = useUserStore((state) => state.setUserInformation);

  const [formError, setFormError] = useState("");
  const navigate = useNavigate();


  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async () => {
      const response = await axios.post(`http://localhost:4000/auth/login`,
        {identifier, password},
        { withCredentials: true },
      );
      
      return response.data;
    },
    onSuccess: (data) => {
      setUserInformation(data.user);
      navigate("/my-blogs");
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        const serverMessage = err.response.data.message;
        setFormError(serverMessage);
      } else {
        setFormError("Something went wrong.");
      }
    }

  });

  function handleLogin(e) {
    setFormError(null);
    e.preventDefault();
    mutate();

  }



  return (
    <LoginContainer>
      <StyledPaper component="form" onSubmit={handleLogin} elevation={3}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome Back to BlogIt!
        </Typography>

       

        <Typography
          variant="body1"

          sx={{ color: '#666', mb: 3 }}
        >
          Log in to continue.
        </Typography>

        {formError && <Alert severity='error' sx={{ mb: 2 }}>{formError}</Alert>}



        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Username or Email Address"
              name="email"
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>

        <StyledButton type="submit" disabled={isPending}>
          {
            isPending ? <CircularProgress size={24} color="inherit" /> : "Login"
          }
        </StyledButton>


        <Typography
          variant="body2"
          sx={{ mt: 2, color: '#666' }}
        >
          Don’t have an account?{' '}
          <Link to="/signup" style={{ color: '#6B48FF', textDecoration: 'none' }}>
            Sign up
          </Link>
        </Typography>
      </StyledPaper>
    </LoginContainer>
  )
}

export default Login
