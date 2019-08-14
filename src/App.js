import React, { useEffect, useState } from 'react';
import { getUsers } from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getUsers();
      setUsers(data);
    })();
  }, []);

  return (
    <div>
      {
        users.map(user => (
          <div key={user.login}>
            <h6>{user.login}</h6>
          </div>
        ))
      }
    </div>
  );
}

export default App;
