import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetail2 from "../UserDetail2/UserDetail2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, name, email, phone } = user;

  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const userStyle = {
    border: "2px solid green",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={userStyle}>
      <h3>Name : {name}</h3>
      <p>
        email : <small>{email}</small>
      </p>
      <p>
        Phone : <small>{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show detail</Link>

      {/* " ! " toggle er kaj kore */}
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading....</span>}>
          <UserDetail2 userPromise={userPromise}></UserDetail2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
