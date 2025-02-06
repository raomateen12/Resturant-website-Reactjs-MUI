import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { recipes } from "../data/recipes";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

const DIET_OPTIONS = [
  "vegetarian",
  "vegan",
  "gluten free",
  "ketogenic",
  "pescetarian",
];

const MEAL_TYPE_OPTIONS = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "breakfast",
];

const Menu = () => {
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    if (selectedDiet && !recipe.diets.includes(selectedDiet)) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', py: 4 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              textAlign: 'center', 
              mb: 4,
              fontWeight: 'bold',
              color: '#333'
            }}
          >
            Discover Recipes
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            sx={{ mb: 4 }}
            justifyContent="center"
          >
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Diet Type</InputLabel>
              <Select
                value={selectedDiet}
                label="Diet Type"
                onChange={(e) => setSelectedDiet(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {DIET_OPTIONS.map((diet) => (
                  <MenuItem key={diet} value={diet}>
                    {diet.charAt(0).toUpperCase() + diet.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Grid container spacing={3}>
            {filteredRecipes.map((recipe) => (
              <Grid item xs={12} sm={6} lg={4} key={recipe.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <CardActionArea 
                    component={Link} 
                    to={`/recipe/${recipe.id}`}
                    sx={{ flexGrow: 1 }}
                  >
                    <CardMedia
                      sx={{ 
                        height: { xs: '250px', sm: '300px', md: '350px' },
                        objectFit: 'cover'
                      }}
                      component="img"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <CardContent>
                      <Typography 
                        variant="h6" 
                        component="h2"
                        sx={{ 
                          mb: 1,
                          fontWeight: '600',
                          color: '#2c3e50'
                        }}
                      >
                        {recipe.title}
                      </Typography>
                      <Stack direction="row" spacing={1} mb={2}>
                        {recipe.diets?.slice(0, 3).map((diet) => (
                          <Chip 
                            key={diet} 
                            label={diet} 
                            size="small" 
                            color="primary" 
                            variant="outlined"
                          />
                        ))}
                      </Stack>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        Ready in {recipe.readyInMinutes} minutes
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Menu;
