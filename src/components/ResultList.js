import React, {useState} from 'react'
import { DataGrid }  from '@material-ui/data-grid';

function ResultList (props) {
  
    console.log(props)
    
    let rows = props.results.map((each,i) => {
       return  {
          "id": i + 1,
          "title":each.name.title,
          "firstName": each.name.first,
          "lastName" : each.name.last,
          "email": each.email,
          "cell": each.cell,
          "dob" : each.dob.date,
          "nat" : each.nat
        }
      })

    const columns = [
        { field: 'id', headerName: 'ID'},
        { field: "title", headerName: "Title"},
        { field: 'firstName', headerName: 'First Name'},
        { field: 'lastName', headerName: 'Last Name'},
        { field: 'email', headerName: 'Email Address'},
        { field: 'cell', headerName: 'Cellphone Number'},
        { field: 'dob', headerName: 'Date of Birth', width: 160},
        { field: 'nat', headerName: "Nationality"}
   ]
   
    return (
        <div>
            <div>test</div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                    rows={rows} columns={columns} pageSize={15} checkboxSelection />
            </div>
        </div>
        
    )
}

export default ResultList
