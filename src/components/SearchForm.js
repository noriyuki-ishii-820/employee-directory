import React from 'react'
import TextField from '@material-ui/core/TextField';
import "./Searchfield.css"

function SearchForm(props) {

    return (
        <div>
            <form className="root">
                  <TextField 
                    value={props.search}
                    onChange = {props.handleInputChange}
                    className="textfield" 
                    id="outlined-basic" 
                    label="Search!" 
                    variant="outlined"
                    type="search"
                  />
              </form>
        </div>
    )
}

export default SearchForm
