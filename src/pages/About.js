import React, { useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PeopleIcon from '@mui/icons-material/People';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import GradeIcon from '@mui/icons-material/Grade';

const teamMembers = [
  {
    name: "John Smith",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800",
    description: "With 15 years of culinary experience in Michelin-starred restaurants"
  },
  {
    name: "Sarah Johnson",
    role: "Head Nutritionist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800",
    description: "Certified nutritionist specializing in dietary planning and wellness"
  },
  {
    name: "Michael Chen",
    role: "Kitchen Manager",
    image: "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?auto=format&fit=crop&w=800",
    description: "Ensuring quality and consistency in every dish we serve"
  },
];

const achievements = [
  {
    number: "15+",
    label: "Years of Excellence",
    icon: GradeIcon,
  },
  {
    number: "50K+",
    label: "Happy Customers",
    icon: PeopleIcon,
  },
  {
    number: "100%",
    label: "Fresh Ingredients",
    icon: LocalDiningIcon,
  },
  {
    number: "500+",
    label: "Unique Recipes",
    icon: RestaurantMenuIcon,
  },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '80vh' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.3)',
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ color: 'white', position: 'relative', zIndex: 1 }}>
            <Typography
              variant={isMobile ? 'h3' : 'h1'}
              component="h1"
              sx={{
                fontWeight: 900,
                mb: 3,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                animation: 'fadeInUp 1s ease-out'
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9,
                animation: 'fadeInUp 1s ease-out 0.3s forwards',
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(20px)'
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              Bringing healthy and delicious meals to your table since 2008
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission Section with Gradient Border */}
      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={24}
          className="animate-on-scroll"
          sx={{
            p: 4,
            background: 'white',
            borderRadius: 2,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 2,
              padding: '2px',
              background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800"
                alt="Restaurant interior"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                We believe in making healthy eating both delicious and accessible. Our mission is to provide 
                nutritious, chef-crafted meals that cater to various dietary preferences while maintaining 
                the highest standards of quality and taste.
              </Typography>
              <Typography variant="body1">
                Every recipe is carefully developed by our team of expert chefs and nutritionists, ensuring 
                a perfect balance of flavor and health benefits. We source only the finest ingredients from 
                local suppliers who share our commitment to sustainability and quality.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Achievements Section with 3D Cards */}
        <Box sx={{ my: 12 }} className="animate-on-scroll">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Achievements
          </Typography>
          <Grid container spacing={3}>
            {achievements.map((achievement, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={8}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                    '&:hover': {
                      transform: 'translateY(-10px) rotateY(10deg)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <achievement.icon
                    sx={{
                      fontSize: 40,
                      color: 'primary.main',
                      mb: 2,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))'
                    }}
                  />
                  <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    {achievement.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {achievement.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section with Hover Effects */}
        <Box sx={{ my: 12 }} className="animate-on-scroll">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      '& .member-avatar': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      }
                    },
                  }}
                >
                  <Avatar
                    src={member.image}
                    className="member-avatar"
                    sx={{
                      width: 140,
                      height: 140,
                      mx: 'auto',
                      mt: -7,
                      border: '4px solid white',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <CardContent sx={{ textAlign: 'center', flexGrow: 1, pt: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 500,
                        mb: 2
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Values Section with Animated Icons */}
        <Box sx={{ my: 12, pb: 8 }} className="animate-on-scroll">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <LocalDiningIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                <Typography variant="h6">Sustainability</Typography>
                <Typography variant="body2">
                  We're committed to eco-friendly practices and supporting local farmers
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <GradeIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                <Typography variant="h6">Quality</Typography>
                <Typography variant="body2">
                  Only the finest ingredients make it into our kitchen
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <PeopleIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                <Typography variant="h6">Community</Typography>
                <Typography variant="body2">
                  Building relationships with our customers and local suppliers
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  );
};

export default About;
