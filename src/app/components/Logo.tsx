import Image from 'next/image';
import React from 'react';

export const Logo = () => (
  <Image
    src='/logo.png'
    alt='vibeflix'
    width={120}
    height={120}
    className='cursor-pointer'
  />
);
