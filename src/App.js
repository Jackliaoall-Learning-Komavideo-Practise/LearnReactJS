import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // JSX寫法
  // return (
  //   <div className="App">
  //       <h1>I love React.</h1>
  //   </div>
  // );

  // 純JS寫法
  return React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', { className: 'text-danger' }, 'I love React.')
  );
}

export default App;
