import React from 'react';

import Navbar from './components/Navbar'
import HeaderRow from './components/HeaderRow'
import DataRow from './components/DataRow'
import { render } from '@testing-library/react';

let externalData = require('./data.json')

for(let index in externalData){
  externalData[index].display = true
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      json: externalData,
      filtered: false
    }
  }

  handleSortByLastName = () => {
    let tempJSON = this.state.json
    tempJSON.sort((a,b) => {
      return a.last_name.charCodeAt(0) - b.last_name.charCodeAt(0)
    })
    this.setState({json: tempJSON})
  }

  handleProductManagmentOnly = () => {
    if(this.state.filtered == false){
      let tempJSON = this.state.json
      tempJSON.forEach(elem => {
        if (elem.department != 'Product Management') {
          elem.display = false
        }
      })
      this.setState({ json: tempJSON, filtered: true })
    }
    else{
      let tempJSON = this.state.json
      tempJSON.forEach(elem => {
        elem.display = true
      })
      this.setState({ json: tempJSON, filtered: false })
    }
  }

  render = () => {
    return (
      <>
        <Navbar />
        <div className="container">
          <table className="mt-5 table">
            {/* table header */}
            <HeaderRow columnNames={['First Name', 'Last Name', 'Role', 'Department']} />
            {/* table rows */}
            <tbody>
              {this.state.json.map(row => row.display? <DataRow thisRow={row} /> : null)}
            </tbody>
          </table>
          <button className = "btn btn-primary m-1" onClick = {this.handleSortByLastName}>Sort By Last Name</button>
          <button className="btn btn-danger m-1" onClick={this.handleProductManagmentOnly}>Toggle Product Management Only View</button>
        </div>
      </>
    );
  }
}

export default App;
