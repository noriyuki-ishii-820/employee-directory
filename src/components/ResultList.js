import React, {useState} from 'react'
import { DataGrid }  from '@material-ui/data-grid';
import "./ResultList.css"

function ResultList (props) {
  
    console.log(props)
    
    let rows = props.results.map((each,i) => {
       return  {
          "id": i + 1,
          "images": <img src={each.picture.medium} alt="image"/>,
          "title":each.name.title,
          "Name": each.name.first + " " + each.name.last,
          "email": each.email,
          "cell": each.cell,
          "dob" : each.dob.date,
          "nat" : each.nat
        }
      })

    const columns = [
        { field: 'id', headerName: 'ID'},
        { field: 'images', headName: "Images"},
        { field: 'Name', headerName: 'Name', width: 200},
        { field: 'email', headerName: 'Email Address', width: 250},
        { field: 'cell', headerName: 'Cellphone Number', width: 200},
        { field: 'dob', headerName: 'Date of Birth', width: 200},
   ]
   
    return (
        <div >
            <div style={{ height: "100vh", width: '80%' }} className="root">
                <DataGrid 
                    rows={rows} columns={columns} pageSize={15} />
            </div>
        </div>
        
    )
}

export default ResultList
