import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography } from '@mui/material';
import './MovieCard.css';

const MovieCard = ({ pelicula }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    {/* One link for the poster and the title: a single history entry per click */}
    <Link to={`/Details/${pelicula.id}`} className="movie-link">
      <Card className="movie-card">
        <div className="movie-image">
          <CardMedia component="img" src={pelicula.poster_path} alt={pelicula.title} />
        </div>
      </Card>
      <Typography variant="h6" component="div" className="movie-title">
        {pelicula.title}
      </Typography>
    </Link>
  </Grid>
);

export default MovieCard;
