'use client';

import { useState } from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    throw new Error('Something went wrong');
  }

  return (
    <button
      className='rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700'
      onClick={() => setClicked(true)}
    >
      Click me
    </button>
  );
}
