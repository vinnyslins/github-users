import React from 'react';

const User = ({ login, avatar_url }) => (
  <div>
    <h1>{login}</h1>
    <img src={avatar_url} alt={login}/>
  </div>
);

export default User;
