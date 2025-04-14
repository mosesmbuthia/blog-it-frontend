import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
} from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '40px auto',
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const StyledButton = styled(Button)({
  marginTop: '24px',
  padding: '10px 32px',
  borderRadius: '25px',
  background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #5a3de6 30%, #00c4d4 90%)',
  },
});

const WritePage = () => {
  return (
    <Container>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        New Blog
      </Typography>
      <Typography variant="body1" mb={3} color="text.secondary">
        This is where creators bring their stories to life.
      </Typography>

      
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold">
          Featured Image *
        </Typography>
        <input
          type="file"
          accept="image/*"
          style={{ marginTop: '8px' }}
        />
      </Box>

      
      <TextField
        label="Title *"
        placeholder="Enter your title here"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        slotProps={{ maxLength: 100 }}
        helperText={`0/100`}
      />

      
      <TextField
        label="Description *"
        placeholder="Enter the blog description here...  "
        multiline
        rows={3}
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        slotProps={{ maxLength: 300 }}
        helperText={`0/300`}
      />

     
      <TextField
        label="Body *"
        placeholder="Write your story here..."
        multiline
        rows={10}
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        slotProps={{ maxLength: 5000 }}
        helperText={`0/5000`}
      />

      <StyledButton>
        Submit
      </StyledButton>
    </Container>
  );
};

export default WritePage;
