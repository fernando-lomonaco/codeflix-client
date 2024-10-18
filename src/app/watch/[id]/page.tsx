import Header from '@/app/components/Header';
import Player from '@/app/components/Player';
import { getMovieById } from '@/app/service/MovieService';
import React from 'react';
import { Suspense } from 'react';

interface IWatchProps {
  params: {
    id: string;
  };
}

export default async function Watch({ params }: IWatchProps) {
  const movie = await getMovieById(params.id);
  if (!movie) {
    return (
      <div>
        <div className='relative bg-gradient-to-b pb-8'>
          <Suspense>
            <Header />
          </Suspense>
          <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16'>
            <h1 className='mb-4 text-2xl font-bold'>
              Search this movie is not available
            </h1>
            <p className='text-xl'>No movies found</p>
          </main>
        </div>
      </div>
    );
  }

  return <Player movie={movie} />;
}
