import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

const users = useLoaderData();
console.log(users)

  return (
    <div>
      <h2>this is users</h2>
    </div>
  );
};

export default Users;