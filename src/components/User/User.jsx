import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
const {id,name, email,phone}=user;

const userStyle ={
  border:'2px solid green',
  borderRadius:'20px',
  padding:'10px',
  margin:'10px'
}

  return (
    <div style={userStyle}>
      <h3>Name : {name}</h3>
      <p>email : <small>{email}</small></p>
      <p>Phone : <small>{phone}</small></p>
      <Link to={`/users/${id}`}>Show detail</Link>
    </div>
  );
};

export default User;