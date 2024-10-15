import { getUserById } from '@/app/lib/setings';
import React from 'react';
import { notFound } from 'next/navigation';
async function User({ params }: { params: { id: string } }) {
  const { name, id, username, website } = await getUserById(params.id);

  if (!name) {
    notFound();
  }
  return (
    <div>
      <h1>User {params.id}</h1>

      <div className='border border-dashed border-red-500 p-4'></div>
      <p>Name: {name}</p>
      <p>Id: {id}</p>
      <p>Username: {username}</p>
      <p>Website: {website}</p>
    </div>
  );
}

export default User;
