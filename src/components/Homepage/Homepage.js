import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable/DataTable'

const Homepage = () => {
  const [tableData, setTableData] = useState([])

  useEffect(()=>{
    const url = 'data.json'
    fetch(url)
    .then(res=> res.json())
    .then(data=> setTableData(data))
  },[])
  return (
    <div className="grid grid-cols-7 gap-1 ">
       <div className="col-span-1 bg-indigo-400">
       
       <div>Dashboard</div>
       <div>Inventory</div>
       <div>Documents</div>
       <div>Settings</div>
   
   </div>
   <div className="col-span-6 bg-cyan-600">
     <h2>Inventory</h2>
    {
      tableData.map(data=><DataTable key={data.id} tableData={data}></DataTable>)
    }
    </div>
    </div>
  )
}

export default Homepage
