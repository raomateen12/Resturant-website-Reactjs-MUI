import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Container,
  Stack,
} from "@mui/material";
import Logo from "../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const pages = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Menu",
    path: "/menu"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: trigger ? 'blur(20px)' : 'none',
      transition: 'all 0.3s ease-in-out',
    },
  });
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ 
          flexGrow: 1, 
          my: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          color: 'primary.main',
          fontWeight: 700,
        }}
      >
        <RestaurantIcon />
        FOODIE
      </Typography>
      <Divider />
      <Stack spacing={2} sx={{ mt: 3 }}>
        {pages.map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            style={({ isActive }) => ({
              color: isActive ? '#fe6b8b' : '#333',
              textDecoration: 'none',
              fontWeight: isActive ? 600 : 500,
              fontSize: '1rem',
              transition: 'all 0.2s ease-in-out',
            })}
          >
            {page.name}
          </NavLink>
        ))}
      </Stack>
    </Box>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar 
          component="nav" 
          sx={{ 
            boxShadow: 'none',
            borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.1)' : 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                  color: 'text.primary'
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component={NavLink}
                to="/"
                sx={{
                  flexGrow: { xs: 1, sm: 0 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 700,
                  letterSpacing: 1,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    color: 'primary.dark',
                  }
                }}
              >
                <RestaurantIcon />
                FOODIE
              </Typography>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {pages.map((page) => (
                  <Button
                    component={NavLink}
                    to={page.path}
                    key={page.path}
                    sx={{
                      mx: 1,
                      color: 'text.primary',
                      position: 'relative',
                      fontWeight: 500,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                      '&:hover::after': {
                        width: '70%',
                      },
                      '&.active': {
                        color: 'primary.main',
                        fontWeight: 600,
                        '&::after': {
                          width: '70%',
                          backgroundColor: 'primary.main',
                        }
                      }
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
