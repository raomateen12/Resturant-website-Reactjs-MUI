import React from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 2,
              position: 'relative',
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              position: 'relative',
            }}
          >
            We'd love to hear from you. Our friendly team is always here to chat.
          </Typography>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container maxWidth="lg" sx={{ mt: -4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <EmailIcon sx={{ fontSize: 45, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Email Us
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  We'll respond within 24 hours
                </Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 500 }}>
                  raomateen2851@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <PhoneIcon sx={{ fontSize: 45, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Call Us
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Mon-Fri from 8am to 8pm
                </Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 500 }}>
                  +92 3097443097
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <LocationOnIcon sx={{ fontSize: 45, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Visit Us
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Come say hello at our office
                </Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 500 }}>
                  123 Food Street, Cuisine City
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Contact Form Section */}
        <Grid container spacing={8} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Send us a Message
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Have a question or feedback? Fill out the form below and we'll get back to you shortly.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: '30px',
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', minHeight: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>

        {/* Social Media Section */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Connect With Us
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <IconButton
              color="primary"
              sx={{
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
                transition: 'transform 0.3s',
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              color="primary"
              sx={{
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
                transition: 'transform 0.3s',
              }}
            >
              <FacebookIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              color="primary"
              sx={{
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
                transition: 'transform 0.3s',
              }}
            >
              <InstagramIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
};

export default Contact;
