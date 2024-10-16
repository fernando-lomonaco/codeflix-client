import { Movies } from '../types/movie';
import { MovieCard } from './MovieCard';

type MovieRowProps = {
  sectionTile: string;
  movies: Movies;
};

//export type MovieCardProps = {
//  index: number;
//};

export function MoviewRow({ sectionTile, movies }: MovieRowProps) {
  return (
    <div className='mr-4 flex-col space-y-2'>
      <div className='flex'>
        <h2 className='my-4 inline-flex items-center text-2xl font-bold'>
          {sectionTile}
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
