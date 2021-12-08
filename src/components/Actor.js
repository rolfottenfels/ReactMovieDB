// COPIA DO MOVIE.js

import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import ActorInfo from "./ActorInfo";
import Actor from "./Actor";
import { useActorFetch } from "../hooks/useActorFetch";

import NoImage from '../images/no_image.jpg'

const Actor = () => {
  const { actorId } = useParams();

  const { state: actor, loading, error } = useActorFetch(actorId);

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={actor.name}/>
      <ActorInfo movie={actor} />
      {console.log(actor)};
    </>
  )
};

export default Movie;