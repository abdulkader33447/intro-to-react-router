import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  // console.log(user)

const {userId}=useParams();
console.log(userId)


  // const  params = useParams();
  // console.log(params.userId)

  const {name, website } = user;
  return (
    <div>
      <h3>User detail here</h3>
      <h5>Name : {name}</h5>
      <p>website : {website}</p>
    </div>
  );
};

export default UserDetails;
