import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  PGenres,
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

const MovieDetails = () => {
  const movieId = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    films: [],
    isLoading: true,
  });

  useEffect(() => {
    if (!movieId || movieId.id === ':209867') {
      navigate('/movies');
      return;
    }
    getMovies(
      `/3/movie/${movieId.id.replace(
        ':',
        ''
      )}?api_key=d0e55d9c3b81e26ea2922058fa861ca2`
    ).then(response => {
      setData(prev => ({
        ...prev,
        films: [response.data],
        isLoading: false,
      }));
    });
  }, [data.films, movieId, navigate]);
  const location = useLocation();

  const backLinkCast =
    location.state?.from ?? `/${movieId.id.replace(':', '')}/cast`;
  const backLinkReviews =
    location.state?.from ?? `/${movieId.id.replace(':', '')}/reviews`;

  return (
    <Div>
      {!data.isLoading && (
        <Ul>
          <Li>
            <Img
              src={
                data.films[0].poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data.films[0].poster_path}`
                  : defaultImg
              }
              alt={'poster'}
            />
          </Li>
          <Li>
            <DivInfo>
              <H1>
                {data.films[0].title ? data.films[0].title : data.films[0].name}
              </H1>
              <POrigin>
                <b>{data.films[0].origin_country && 'Origin country:'}&nbsp;</b>
                {data.films[0].origin_country && data.films[0].origin_country}
              </POrigin>
              <PMedia>
                <PGenres>
                  <b>{data.films[0].genres && 'Genres:'}&nbsp;</b>
                  {data.films[0].genres.map(genre => genre.name + `,  `)}
                </PGenres>
                <b>{data.films[0].media_type && 'Media type:'}&nbsp;</b>
                {data.films[0].media_type}
              </PMedia>
              <PLanguage>
                <b>Original language:&nbsp;</b>
                {data.films[0].original_language}
              </PLanguage>
              <POverview>
                <b>Overview:&nbsp;</b>
                {data.films[0].overview}
              </POverview>
              <PPopularity>
                <b>Popularity:&nbsp;</b>
                {data.films[0].popularity}
              </PPopularity>
              <PRelease>
                <b>Release date:&nbsp;</b>
                {data.films[0].first_air_date
                  ? data.films[0].first_air_date
                  : data.films[0].release_date}
              </PRelease>
              <PAverage>
                <b>Vote average:&nbsp;</b>
                {data.films[0].vote_average}
              </PAverage>
              <PCount>
                <b>Vote count:&nbsp;</b>
                {data.films[0].vote_count}
              </PCount>
            </DivInfo>
          </Li>
        </Ul>
      )}
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
        <Route
          path="/cast//*"
          element={<Cast filmId={movieId.id.replace(':', '')} />}
        />
        <Route
          path="/reviews//*"
          element={<Reviews filmId={movieId.id.replace(':', '')} />}
        />
      </Routes>
    </Div>
  );
};

export { MovieDetails };
