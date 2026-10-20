import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import MovieCard from './MovieCard';

const pelicula = { id: 7, title: 'Wonka', poster_path: 'https://example.test/wonka.jpg' };

const renderAt = (path) => {
  const router = createMemoryRouter(
    [
      { path: '/Movies', element: <MovieCard pelicula={pelicula} /> },
      { path: '/Details/:id', element: <p>Details page</p> },
    ],
    { initialEntries: [path] },
  );
  render(<RouterProvider router={router} />);
  return router;
};

test.each([
  ['poster', () => screen.getByAltText('Wonka')],
  ['title', () => screen.getByText('Wonka')],
])('clicking the %s opens the movie page, and one Back returns to Movies', async (_, target) => {
  const router = renderAt('/Movies');

  fireEvent.click(target());
  expect(await screen.findByText('Details page')).toBeInTheDocument();
  expect(router.state.location.pathname).toBe('/Details/7');

  await router.navigate(-1);
  expect(router.state.location.pathname).toBe('/Movies');
});
