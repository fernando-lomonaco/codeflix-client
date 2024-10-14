'use client';
import React, { useEffect, useState } from 'react';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '../hooks/useScroll';
import Link from 'next/link';

export default function Header() {
  const isScrolled = useScroll();
  return (
    <header
      className={`${isScrolled && 'bg-black'} to-blackp-2 fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-transparent px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
