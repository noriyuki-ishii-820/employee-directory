import React from 'react'

function SearchForm(props) {

    return (
        <div>
            <form className="root">
                  <input 
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
