import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-image: linear-gradient(#200f21, #382039);
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;

  h1 {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
  }

  img {
    max-width: 80px;
    max-height: 80px;
    border-radius: 50%;
  }
`;

const User = ({ login, avatar_url }) => (
  <Card>
    <h1>{login}</h1>
    <img src={avatar_url} alt={login}/>
  </Card>
);

export default User;
