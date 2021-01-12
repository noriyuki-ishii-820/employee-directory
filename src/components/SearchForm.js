import React from 'react'
import TextField from '@material-ui/core/TextField';
import "./Searchform.css"

function SearchForm(props) {

    return (
        <div>
            <form className="root">
                  <TextField 
                    value={props.search}
                    onChange = {props.handleInputChange}
                    className="textfield" 
                    id="outlined-basic" 
                    label="Search by Name..." 
                    variant="outlined"
                    type="search"
                  />
              </form>
        </div>
    )
}

export default SearchForm
