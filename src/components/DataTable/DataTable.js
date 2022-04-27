import React from 'react'

const DataTable = ({tableData}) => {
    const {dateUpdated,title,details,status,quantity,unitPrice,amount} = tableData;
    console.log(tableData);
    return (
        <div>
            <h2>{status}</h2>
        </div>
    );
};

export default DataTable;