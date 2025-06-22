import React from 'react';

function KanbanBoard() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {['Work', 'Progress', 'Done'].map((stage) => (
        <div key={stage} style={{ border: '1px solid black', padding: '1rem' }}>
          <h3>{stage}</h3>
          <p>Task A</p>
          <p>Task B</p>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
