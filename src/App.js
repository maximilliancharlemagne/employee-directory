import React from 'react';

import Navbar from './components/Navbar'
import HeaderRow from './components/HeaderRow'

let json = require('./data.json')

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <table className="mt-5 table">
        {/* table header */}
        <HeaderRow columnNames = {['ID','First Name','Last Name','Role','Department']} dat/>
        {/* table rows */}
      </table>
    </div>
    </>
  );
}

export default App;
