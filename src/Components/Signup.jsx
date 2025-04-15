import { Box, Typography, TextField, Button, Paper, Grid, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
// import apiUrl from '../Utilities/Utilities.js';






const SignUpContainer = styled(Box)({
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '20px',
});

const StyledPaper = styled(Paper)({
    padding: '2rem',
    borderRadius: '15px',
    maxWidth: '500px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
});

const StyledTextField = styled(TextField)({
    marginBottom: '1rem',
});

const StyledButton = styled(Button)({
    marginTop: '1rem',
    padding: '0.75rem 2rem',
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
});

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");
    const navigate = useNavigate();
   

    const { isPending, mutate } = useMutation({
        mutationKey: ["register-user"],
        mutationFn: async () => {
            const response = await axios.post(`https://blog-it-backend-yf4s.onrender.com/auth/signup`, {
                firstName,
                lastName,
                emailAddress,
                userName,
                password,
            });
            return response.data;

        },
        onSuccess: (data) => {
            navigate("/login")
        },
        onError: (err) => {
            if (axios.isAxiosError(err)) {
                const serverMessage = err.response.data.message;
                setFormError(serverMessage);

            } else {
                setFormError("Something went wrong.")
            }
        }

    })


    function handleSignup(e) {
        e.preventDefault();
        setFormError(null);
        
        if (password !== confirmPassword) {
            setFormError("Passwords do not match")
            return;
        }
        mutate()

    }

    return (
        <SignUpContainer>
            <StyledPaper component="form" onSubmit={handleSignup}>
                <Typography
                    variant="h5"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Join a Community of Readers and Writers
                </Typography>
                {formError && <Alert severity='error' sx={{ mb: 2 }}>{formError}</Alert>}

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField
                            fullWidth
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Grid>
                </Grid>

                <StyledButton type="submit" disabled={isPending}>
                    {isPending ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
                </StyledButton>

                <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: '#6B48FF', textDecoration: 'none' }}>
                        Log in
                    </Link>
                </Typography>
            </StyledPaper>
        </SignUpContainer>
    );
}

export default Signup;
