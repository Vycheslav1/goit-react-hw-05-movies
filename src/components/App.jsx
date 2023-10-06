import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Movies } from 'pages/Movies/Movies.js';

const Home = lazy(() => import('pages/Home/Home.js'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.js'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path={`/:id/*`} element={<MovieDetails />} />

          <Route path="/movies" element={<Movies />} />
          <Route path={`/movies/:id/*`} element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
