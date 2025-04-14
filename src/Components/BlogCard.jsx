import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Button, Tooltip } from '@mui/material';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import PushPinIcon from '@mui/icons-material/PushPin';

const StyledCard = styled(Card)({
  maxWidth: '350px',
  width: '100%',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  overflow: 'hidden',
});

const FeaturedImage = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

const ContentBox = styled(Box)({
  padding: '16px',
});

const TitleTypography = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#333',
  marginBottom: '8px',
});

const DescriptionTypography = styled(Typography)({
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '16px',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const BottomBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const AuthorDateBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const StyledButton = styled(Button)({
  padding: '4px 16px',
  borderRadius: '20px',
  background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #5a3de6 30%, #00c4d4 90%)',
  },
});

const BlogCard = ({ blog }) => {
  const {
    id,
    title,
    description,
    featuredImage,
    author,
    updatedAt,
    isPinned = false,
  } = blog;

  const formattedDate = new Date(updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <StyledCard>
      
      <FeaturedImage
        src={featuredImage || 'https://via.placeholder.com/350x200?text=Image'}
        alt="Featured"
      />

      <ContentBox>
        
        <TitleTypography variant="h4">
          {title}
        </TitleTypography>

        
        <DescriptionTypography variant="body2">
          {description}
        </DescriptionTypography>

        
        <BottomBox>
          <AuthorDateBox>
            <Typography variant="caption" color="text.secondary">
              {formattedDate}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              •
            </Typography>
            <Typography variant="caption" color="text.primary" fontWeight={500}>
              {author.username}
            </Typography>
            {isPinned && (
              <Tooltip title="Pinned Blog">
                <PushPinIcon fontSize="small" sx={{ color: '#6B48FF' }} />
              </Tooltip>
            )}
          </AuthorDateBox>
          <StyledButton
            variant="contained"
            size="small"
            component={Link}
            to={`/blog/${id}`}
          >
            Read Blog
          </StyledButton>
        </BottomBox>
      </ContentBox>
    </StyledCard>
  );


export default BlogCard;