import React from 'react';

const data = [
  { id: 1, name: 'Rutuja', role: '75' },
  { id: 2, name: 'Mansi', role: '83' },
];

function Table() {
  return (
    <div>
      <h2>Student Marks Table</h2>
      <table border="1">
        <thead>
          <tr><th>Roll no.</th><th>Name</th><th>Marks</th></tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
