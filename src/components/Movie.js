import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Actor from "./Actor";
import { useMovieFetch } from "../hooks/useMovieFetch";

import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const { movieId } = useParams();
  const { actorId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}/>
      <MovieInfo movie={movie} />
      <Grid header='Actors'>
        {movie.actors.map(actor => (
          <Actor key={actor.credit_id}
            clickable 
            name={actor.name}
            character={actor.character}
            imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
            // biography={actor.biography}
          />
      ))}

      </Grid>
      {console.log(movie)};
    </>
  )
};

export default Movie;
