import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../Store/userStore.js';

function Navbar() {
    const navigate = useNavigate();
    const { user, removeUserInformation } = useUserStore();

    const StyledAppBar = styled(AppBar)({
        background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
        boxShadow: '0 3px 5px 2px rgba(107, 72, 255, .3)',
    });

    const Logo = styled('img')({
        height: '40px',
        marginRight: '16px',
        borderRadius: '5px',
        overflow: 'hidden',
        cursor: 'pointer',
    });

    const StyledButton = styled(Button)({
        margin: '0 8px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
        color: '#fff',
        borderRadius: '25px',
        padding: '6px 20px',
    });

    const handleLogout = () => {
        removeUserInformation();
        navigate('/');
    };

    return (
        <StyledAppBar position="sticky">
            <Toolbar>
                <Logo
                    src="./blogit-logo.jpg"
                    alt="Blogit Logo"
                    onClick={() => navigate(user ? "/explore" : "/")}
                />

                <Typography
                    variant="h5"
                    component={Link}
                    to={user ? "/explore" : "/"}
                    sx={{
                        flexGrow: 1,
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        '&:hover': {
                            color: '#f0f0f0',
                        },
                    }}
                >
                    Blogit
                </Typography>

                <Box>
                    {user ? (
                        <>
                            <StyledButton component={Link} to="/explore">
                                Explore
                            </StyledButton>
                            <StyledButton component={Link} to="/write">
                                Write
                            </StyledButton>
                            <StyledButton component={Link} to="/my-blogs">
                                My Blogs
                            </StyledButton>
                            <StyledButton component={Link} to="/profile">
                                My Profile
                            </StyledButton>
                            <StyledButton onClick={handleLogout}>
                                Logout
                            </StyledButton>
                        </>
                    ) : (
                        <>
                            <StyledButton component={Link} to="/about">
                                Our Story
                            </StyledButton>
                            <StyledButton component={Link} to="/login">
                                Login
                            </StyledButton>
                            <StyledButton component={Link} to="/signup" variant="contained">
                                Sign Up
                            </StyledButton>
                        </>
                    )}
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Navbar;
