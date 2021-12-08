import React from 'react';
import { Link } from 'react-router-dom'; 
import { Wrapper, Image } from './Actor.styles';
import PropTypes from 'prop-types';

const Actor = ({ name, character, actorId, imageUrl }) => (
<Wrapper>
  <Link to={`/${actorId}`}>
    <Image src={imageUrl} alt='actor-thumb' />
  </Link>
  <h3>{name}</h3>
  <p>as {character}</p>
</Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Actor;