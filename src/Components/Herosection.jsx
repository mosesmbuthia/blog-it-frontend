import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
// import heroBackground from '../assets/images/'
// import heroImg  from '../../public/herobg.jpg';

// fix the background image import route


function Herosection() {

    const HeroContainer = styled(Box)({
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', 
      });
      
      const HeroImage = styled(Box)({
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(/herobg.jpg)`,
      });
      
      const StyledPaper = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(4),
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px',
        margin: theme.spacing(2),
      }));
      
      const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(1),
        padding: theme.spacing(1, 3),
        borderRadius: '25px',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
        },
      }));

  return (
    <HeroContainer>
      <Grid container sx={{ height: '100%' }}>
        
        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <StyledPaper elevation={4}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#6B48FF',
                background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Welcome to Blogit
            </Typography>
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              sx={{ color: '#333', mb: 3 }}
            >
              Discover a world of ideas, stories, and inspiration. Share your thoughts and connect with a vibrant community of writers and readers.
            </Typography>
            <Box>
              <StyledButton
                variant="contained"
                sx={{
                  background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
                  color: '#fff',
                }}
                href="/signup"
              >
                Get Started
              </StyledButton>
              <StyledButton
                variant="outlined"
                sx={{
                  borderColor: '#6B48FF',
                  color: '#6B48FF',
                  '&:hover': {
                    borderColor: '#00DDEB',
                    color: '#00DDEB',
                  },
                }}
                href="/explore"
              >
                Explore Blogs
              </StyledButton>
            </Box>
          </StyledPaper>
        </Grid>

        
        <Grid>
          <HeroImage />
        </Grid>
      </Grid>
    </HeroContainer>
  )
}

export default Herosection
