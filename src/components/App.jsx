import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { MovieDetails } from 'pages/MovieDetails/MovieDetails.js';
import { Movies } from 'pages/Movies/Movies.js';

const Home = lazy(() => import('pages/Home/Home.js'));

const SharedLayout = lazy(() =>
  import('components/SharedLayout/SharedLayout.js')
);

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path={`/:id/*`} element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
