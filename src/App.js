import React from 'react';

import Navbar from './components/Navbar'
import HeaderRow from './components/HeaderRow'
import DataRow from './components/DataRow'

let json = require('./data.json')

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <table className="mt-5 table">
        {/* table header */}
        <HeaderRow columnNames = {['First Name','Last Name','Role','Department']} dat/>
        {/* table rows */}
        <tbody>
          {json.map(row => <DataRow thisRow = {row}/>)}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
