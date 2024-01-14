import React, { useEffect, useState } from 'react'
import "./Table.css"

const Table = ({data}) => {
    const [TableData, setTableData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      
      const response = await fetch('http://localhost:3001/api/table');
      const data = await response.json();

      
      setTableData(data.map((item, index) => ({
        id: item.id,
        name: item.name,
        quantity:item.quantity,
        price:item.price
        
      })));
    };

    fetchData();
  }, []);
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
        {TableData.map(item => (
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
