import React, { useEffect, useState } from 'react';
import { getUsers } from './services/api';
import User from './components/User';

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
          <User
            key={user.login}
            login={user.login}
            avatar_url={user.avatar_url}
          />
        ))
      }
    </div>
  );
}

export default App;
