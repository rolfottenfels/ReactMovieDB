import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import Thumb from '../Thumb';
import NoImage from '../../images/no_image.jpg';
import { Wrapper, Content, Text } from './ActorInfo.styles';


const MovieInfo = ({movie}) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb image={movie.poster_path 
        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
        : NoImage
      } 
      clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h3>BIOGRAPHY</h3>
        <p>{biography}</p>
        
        <div className="actor-info">
          <div className="know-as">
            <h3>ALSO KNOW AS</h3>
            <p>{also_known_as}</p>
          </div>
          <div className="birth">
            <h3>DATE OF BIRTH</h3>
            <p>{birthday}</p>
          </div>
          <div className="birth-place">
            <h3>PLACE OF BIRTH</h3>
            <p>{place_of_birth}</p>
          </div>
          <div className="popularity">
            <h3>POPULARITY</h3>
            <p>{popularity}</p>
          </div>
          <div className="home-page">
            <h3>OFICIAL WEBSITE</h3>
            <a href={homepage ? `${homepage}` : ''}>{homepage ? `${homepage}` : ''}</a></p>
          </div>
        </div>

      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;