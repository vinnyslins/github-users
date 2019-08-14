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
    padding: 5px 10px;
    border: 1px solid #fff;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    background-color: transparent;
    color: #fff;
    font-family: courier new;
    outline: 0;

    &:hover {
      font-weight: bold;
      transform: translateY(2px);
      transition: all 0.2s;
    }
  }
`;

const User = ({ login, avatar_url }) => (
  <Card>
    <h1>{login}</h1>
    <img src={avatar_url} alt={login}/>
    <a href={`https://github.com/${login}`} target='blank'>
      <button>ver mais</button>
    </a>
  </Card>
);

export default User;
