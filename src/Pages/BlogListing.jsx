import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';





const BlogListingContainer = styled(Box)({
  minHeight: '100vh',
  padding: '40px 20px',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const BlogListing = () => {
  return (
    <BlogListingContainer>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        Discover Stories on BlogIt
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* {sampleBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <BlogCard blog={blog} />
          </Grid>
        ))} */}
      </Grid>
    </BlogListingContainer>
  );
};

export default BlogListing;