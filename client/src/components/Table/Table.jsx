import React from 'react'
import "./Table.css"

const Table = ({data}) => {
  return (
    <div>
      <table className='product-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table
