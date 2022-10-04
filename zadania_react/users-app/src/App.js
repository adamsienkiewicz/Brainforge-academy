
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(url);
      if (!res.ok) return Error('Oh no');

      setUsers(await res.json());
    };

    fetchUsers();
  }, []);

  return (
    <div className='App'>
      <div className='flex justify-center items-center flex-col'>
        {users.map((user) => (
          <div
            key={user.id}
            className='w-full m-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-col items-center p-10'>
              <img
                className='mb-3 w-24 h-24 rounded-full shadow-lg'
                src={`https://picsum.photos/id/${user.id}/200/300`}
                alt='avatar'
              />
              <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>{user.name}</h5>
              <span className='mb-1 text-sm text-gray-500 dark:text-gray-400'>{user.email}</span>
              <span className='mb-1 text-sm text-gray-500 dark:text-gray-400'>{user.address.city}</span>
              <span className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
                {user.address.street + ', ' + user.address.suite}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
