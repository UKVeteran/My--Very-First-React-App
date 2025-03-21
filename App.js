import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to My First React App! 🚀</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;