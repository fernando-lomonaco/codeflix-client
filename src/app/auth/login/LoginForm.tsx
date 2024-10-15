'use client';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

type ServerError = {
  message: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  console.log(errors);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.push('/');
        return;
      }

      const payload: ServerError[] = await response.json();

      setErrors(payload.map((error) => error.message));
    } catch (error) {
      console.log('An error occurred:', error);
      setErrors(['Something went wrong']);
    }
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
