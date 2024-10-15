import BuggyButton from '@/app/components/BuggyButton';
import { getUserInfo } from '@/app/lib/setings';
import React from 'react';
async function User() {
  const { name, age, email } = await getUserInfo();
  return (
    <div>
      <h1>User Page</h1>

      <div className='border border-dashed border-red-500 p-4'>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>Idade: {age}</p>
      </div>

      <div className='mt-4'>
        <BuggyButton />
      </div>
    </div>
  );
}

export default User;
