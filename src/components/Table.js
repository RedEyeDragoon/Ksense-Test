import React, { useState, useEffect } from 'react';

import classes from './Table.module.css'

const Table = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        if(res.ok) {
          return res.json();
        } else {
          const error = 'Failed';
          throw new Error(error);
        }
      }).then(data => {
        data.map(user => {
          const name = user.name;
          const userName = user.username;
          const id = user.id
          setUsers(prev => {
            return [...prev, {name, userName, id}];
          })
        })
      }).catch(err => {
        console.error(err);
      })
    }
    fetchUsers();
  }, [])

  const viewPost = (id) => {
    props.onView(id);
  }

  return (
    <table className={classes.main}>
      <tbody>
        <tr>
          <th>User</th>
          <th>Username</th>
          <th>View Post</th>
        </tr>
        {users.map(user => {
          return(
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td><button onClick={viewPost.bind(this, user.id)}>View Post</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>  
  )
};

export default Table; 