import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';

const Card = styled.div`
  background-image: linear-gradient(#200f21, #382039);
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12%;

  h1 {
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    font-family: courier new;
  }

  img {
    max-width: 80px;
    max-height: 80px;
    border-radius: 50%;
  }

  button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const User = ({ login, avatar_url }) => (
  <Card>
    <h1>{login}</h1>
    <img src={avatar_url} alt={login}/>
    <a href={`https://github.com/${login}`} target='blank'>
      <Button>ver mais</Button>
    </a>
  </Card>
);

export default User;
