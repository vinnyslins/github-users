import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getUsers } from './services/api';
import User from './components/User';

const Main = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getUsers();
      setUsers(data);
    })();
  }, []);

  return (
    <Main>
      {
        users.map(user => (
          <User
            key={user.login}
            login={user.login}
            avatar_url={user.avatar_url}
          />
        ))
      }
    </Main>
  );
}

export default App;
