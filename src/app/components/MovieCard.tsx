import Image from 'next/image';
import { MovieCardProps } from './MoviewRow';

export const MovieCard = ({ index }: MovieCardProps) => (
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
