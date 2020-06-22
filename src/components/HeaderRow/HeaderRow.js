import React from 'react';

const HeaderRow = (props) => {
  return(
    <thead>
      <tr>
        {props.columnNames.map(elem => <th>{elem}</th>)}
      </tr>
    </thead>
  )
}

export default HeaderRow