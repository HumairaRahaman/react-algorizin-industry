import React from "react"

const DataTable = ({ tableData }) => {
  const { dateUpdated, title, details, status, quantity, unitPrice, amount } =
    tableData;
  console.log(tableData);
  return (
   
   
       <table>
        <tbody>
        
          <tr className="">
            <td>{title}</td>
            <td>{quantity}</td>
            <td>{amount}</td>
          </tr>
          
        </tbody>
      </table>
  
   
  );
};

export default DataTable;
