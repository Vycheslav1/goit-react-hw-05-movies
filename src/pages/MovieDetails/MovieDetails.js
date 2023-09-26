import { useParams } from 'react-router-dom';

import { getMovies } from 'api/data_search.js';
import { useLocation } from 'react-router-dom';
import { Cast } from 'pages/Cast/Cast.js';
import { Reviews } from 'pages/Reviews/Reviews.js';

import {
  StyledLink,
  Div,
  Ul,
  Li,
  DivInfo,
  H1,
  POrigin,
  PMedia,
  PLanguage,
  POverview,
  PPopularity,
  PRelease,
  PAverage,
  PCount,
  PInfo,
  NavDetails,
  Img,
} from 'pages/MovieDetails/MovieDetailsStyles.js';

import { Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
const identCast = nanoid();
const identReview = nanoid();

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

let movie = {};

const MovieDetails = () => {
  const movieId = useParams();

  movie = JSON.parse(localStorage.getItem('response')).data.results.find(
    result => ':' + result.id === movieId.id
  );

  const location = useLocation();
  const backLinkCast = location.state?.from ?? `/${movieId.id}/cast`;
  const backLinkReviews = location.state?.from ?? `/${movieId.id}/reviews`;

  getMovies(
    `/3/movie/${movie.id}/credits?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US`
  ).then(response => {
    localStorage.setItem('cast', JSON.stringify(response));
  });

  getMovies(
    `/3/movie/${movie.id}/reviews?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US`
  ).then(response => {
    localStorage.setItem('reviews', JSON.stringify(response));
  });

  return (
    <Div>
      <Ul>
        <Li>
          <Img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={'poster'}
          />
        </Li>
        <Li>
          <DivInfo>
            <H1>{movie.title ? movie.title : movie.name}</H1>
            <POrigin>
              <b>{movie.origin_country && 'Origin country:'}&nbsp;</b>
              {movie.origin_country && movie.origin_country}
            </POrigin>
            <PMedia>
              <b>{movie.media_type && 'Media type:'}&nbsp;</b>
              {movie.media_type}
            </PMedia>
            <PLanguage>
              <b>Original language:&nbsp;</b>
              {movie.original_language}
            </PLanguage>
            <POverview>
              <b>Overview:&nbsp;</b>
              {movie.overview}
            </POverview>
            <PPopularity>
              <b>Popularity:&nbsp;</b>
              {movie.popularity}
            </PPopularity>
            <PRelease>
              <b>Release date:&nbsp;</b>
              {movie.first_air_date ? movie.first_air_date : movie.release_date}
            </PRelease>
            <PAverage>
              <b>Vote average:&nbsp;</b>
              {movie.vote_average}
            </PAverage>
            <PCount>
              <b>Vote count:&nbsp;</b>
              {movie.vote_count}
            </PCount>
          </DivInfo>
        </Li>
      </Ul>
      <PInfo>
        <b>Additional Information</b>
      </PInfo>
      <NavDetails>
        <StyledLink key={identCast} to={backLinkCast}>
          Cast
        </StyledLink>

        <StyledLink key={identReview} to={backLinkReviews}>
          Reviews
        </StyledLink>
      </NavDetails>
      <Routes>
        <Route path="/cast/*" element={<Cast />} />
        <Route path="/reviews/*" element={<Reviews />} />
      </Routes>
    </Div>
  );
};

export { MovieDetails };
