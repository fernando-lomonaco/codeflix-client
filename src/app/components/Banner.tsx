import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { Movie } from '../types/movie';
import Link from 'next/link';

export const Banner = ({ movie }: { movie: Movie }) => (
  <div className='mb-10 lg:mb-20'>
    <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
        <video
          src={movie.videoFileURL}
          autoPlay
          loop
          muted
          className='durantion-1000 z-20 hidden h-full w-full object-cover opacity-50 transition ease-in-out lg:block'
          poster={movie.bannerFileURL}
        />
        <Image
          src={movie.bannerFileURL}
          alt={movie.title}
          fill={true}
          className='h-[65vh] object-cover object-top lg:hidden'
        />
      </div>
      <h1 className='text-4xl font-bold lg:text-7xl'>{movie.title}</h1>
      <p className='text-shadow-md text-sm text-gray-300 md:max-w-lg md:text-lg lg:max-w-2xl'>
        {movie.description}
      </p>
    </div>
    <div className='flex space-x-3'>
      <Link href={movie.link}>
        <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
          <PlayIcon className='h-6' />
          Play
        </button>
      </Link>
      <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
        <InformationCircleIcon className='h-6' />
        More Info
      </button>
    </div>
  </div>
);
