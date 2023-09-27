import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//import { MovieRoutes } from 'pages/MovieRoutes/MovieRoutes.js';
import { Movies } from 'pages/Movies/Movies.js';

const Home = lazy(() => import('pages/Home/Home.js'));

const SharedLayout = lazy(() => import('./SharedLayout.js'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
