import React from 'react';

const DataRow = (props) => {
  return (
  <tr>
    <td>{props.thisRow.first_name}</td>
    <td>{props.thisRow.last_name}</td>
    <td>{props.thisRow.role}</td>
    <td>{props.thisRow.department}</td>
  </tr>
  )
}

export default DataRow