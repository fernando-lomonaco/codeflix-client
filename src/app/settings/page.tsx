import React from 'react';
import { getAppSettings } from '../lib/setings';
import BuggyButton from '@/app/components/BuggyButton';

async function Settings() {
  const { theme, langague } = await getAppSettings();
  return (
    <div>
      <h2 className='text-2xl font-bold'>Settings Page</h2>
      <div className='border border-dashed border-red-500 p-4'>
        <p> Theme :{theme}</p>
        <p> Language :{langague} </p>
      </div>
      <div className='mt-4'>
        <BuggyButton />
      </div>
    </div>
  );
}

export default Settings;
