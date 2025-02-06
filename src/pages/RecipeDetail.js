import React from "react";
import { useParams } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { recipes } from "../data/recipes";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <Layout>
        <Typography color="error" textAlign="center" my={4}>
          Recipe not found
        </Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h1" gutterBottom>
                {recipe.title}
              </Typography>

              <Box sx={{ my: 2 }}>
                {recipe.diets?.map((diet) => (
                  <Chip
                    key={diet}
                    label={diet}
                    sx={{ mr: 1, mb: 1 }}
                    color="primary"
                  />
                ))}
              </Box>

              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <AccessTimeIcon color="primary" />
                    <Typography variant="body2">
                      {recipe.readyInMinutes} mins
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <RestaurantIcon color="primary" />
                    <Typography variant="body2">
                      {recipe.servings} servings
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <MonetizationOnIcon color="primary" />
                    <Typography variant="body2">
                      ${recipe.pricePerServing.toFixed(2)}/serving
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Ingredients
              </Typography>
              <List>
                {recipe.extendedIngredients.map((ingredient) => (
                  <ListItem key={ingredient.id}>
                    <ListItemText
                      primary={ingredient.original}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" gutterBottom>
                Instructions
              </Typography>
              <Typography
                variant="body1"
                sx={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}
              >
                {recipe.instructions}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default RecipeDetail; 