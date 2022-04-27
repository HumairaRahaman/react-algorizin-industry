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
   <div>
    {
      tableData.map((data,index)=><DataTable key={data.id} tableData={data}></DataTable>)
    }
    </div>
  )
}

export default Homepage
