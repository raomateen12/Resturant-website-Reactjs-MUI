import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Paper,
  Rating,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from "react-router-dom";

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.3)',
    animation: 'zoom 20s infinite alternate',
  },
  '@keyframes zoom': {
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
  },
}));

const features = [
  {
    icon: LocalDiningIcon,
    title: "Quality Food",
    description: "We use only the finest ingredients to create exceptional dishes."
  },
  {
    icon: DeliveryDiningIcon,
    title: "Fast Delivery",
    description: "Quick and reliable delivery service to your doorstep."
  },
  {
    icon: ThumbUpIcon,
    title: "Best Service",
    description: "Our dedicated team ensures the best dining experience."
  }
];

const popularDishes = [
  {
    name: "Mediterranean Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800",
    price: "$12.99",
    rating: 4.5,
  },
  {
    name: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800",
    price: "$24.99",
    rating: 4.8,
  },
  {
    name: "Pasta Primavera",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800",
    price: "$16.99",
    rating: 4.3,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Critic",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
    comment: "The best dining experience I've had in years. The flavors are exceptional!",
  },
  {
    name: "Michael Chen",
    role: "Regular Customer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200",
    comment: "Consistently amazing food and service. My go-to restaurant for special occasions.",
  },
  {
    name: "Emily Davis",
    role: "Food Blogger",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200",
    comment: "The attention to detail in every dish is remarkable. Highly recommended!",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ animation: 'fadeInUp 1s ease-out' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Delicious Food For Every Mood
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 4, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                >
                  Experience the perfect blend of taste and health
                </Typography>
                <Button
                  component={Link}
                  to="/menu"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: '30px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Explore Menu
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <feature.icon
                    sx={{
                      fontSize: 50,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Popular Dishes Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 6,
            }}
          >
            Popular Dishes
          </Typography>
          <Grid container spacing={4}>
            {popularDishes.map((dish, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={dish.image}
                    alt={dish.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {dish.name}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6" color="primary">
                        {dish.price}
                      </Typography>
                      <Rating value={dish.rating} precision={0.5} readOnly />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 6,
            }}
          >
            What Our Customers Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'white',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 80, height: 80, mb: 2 }}
                      />
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="subtitle1" color="primary.main">
                        {testimonial.role}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        "{testimonial.comment}"
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Ready to Experience Our Delicious Food?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join us today and discover a world of flavors
          </Typography>
          <Button
            component={Link}
            to="/menu"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            View Full Menu
          </Button>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
