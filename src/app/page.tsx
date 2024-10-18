import { Suspense } from 'react';
import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie, getMoviesByGenre } from './service/MovieService';

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('101');

  const genres = ['Action', 'Animation', 'Comedy', 'Drama', 'Romance'];
  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );

  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Suspense>
        <Header />
      </Suspense>
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />

        {movies.map((movie) => (
          <MovieRow
            key={movie.sectionTitle}
            sectionTile={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  );
}
