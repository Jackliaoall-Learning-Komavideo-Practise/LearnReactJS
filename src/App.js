import logo from './logo.svg';
import './App.css';
import React from 'react';

import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div className="text-center p-4">
      <button className="btn btn-danger">确定</button>
      <hr />
      <ItemDetail></ItemDetail>
    </div>
  );
}

export default App;
