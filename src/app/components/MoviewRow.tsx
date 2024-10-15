import { MovieCard } from './MovieCard';

type MovieRowProps = {
  sectionTile: string;
};

export type MovieCardProps = {
  index: number;
};

export function MoviewRow({ sectionTile }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTile}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5].map((item) => (
          <MovieCard index={item} key={item} />
        ))}
      </div>
    </div>
  );
}
