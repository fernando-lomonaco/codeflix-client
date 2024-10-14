import Image from 'next/image';

type MovieRowProps = {
  sectionTile: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    className='min-w-{200px} md:min-w[300px] group relative h-28 transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-40 lg:h-52 lg:min-w-[400px]'
    key={index}
  >
    <Image
      src={`/item_${index}.png`}
      fill={true}
      sizes='100%'
      alt={`chama_${index}`}
      className='rounded'
    />
  </div>
);

export function MoviewRow({ sectionTile }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTile}
        </h2>
      </div>
      <div className='scrollbar-hide -ml-8 flex space-x-4 overflow-x-scroll p-6'>
        {[1, 2, 3, 4, 5].map((item) => (
          <MovieCard index={item} key={item} />
        ))}
      </div>
    </div>
  );
}
