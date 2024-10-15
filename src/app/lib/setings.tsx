export const getAppSettings = (): Promise<{
  theme: string;
  langague: string;
}> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ theme: 'dark', langague: 'pt-BR' });
    }, 5000)
  );
};

export const getUserInfo = (): Promise<{
  name: string;
  age: number;
  email: string;
}> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ name: 'John', age: 30, email: 'pZlT9@example.com' });
    }, 2000)
  );
};

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return user;
}

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
