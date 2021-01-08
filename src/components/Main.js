import React, {useEffect, useState} from 'react';
import ResultList from "./ResultList"
import TextField from '@material-ui/core/TextField';
import "./Main.css"

const API = "https://randomuser.me/api/?results=15"

function Main() {
  const [data, setData] = useState([]);

  useEffect(() =>{
      const getPeople = async () => {
        const response = await fetch(API);
        const jsonData = await response.json();
        setData(jsonData);
    };
    getPeople();
  }, [])

  return (
        <div>
            <div className="search">
                <form className="root" noValidate autoComplete="off">
                    <TextField className="textfield" id="outlined-basic" label="Search!" variant="outlined" />
                </form>
            </div>
            <div>
              <ResultList
                results={data} 
              />
            </div>
        </div>
    )
}

export default Main
