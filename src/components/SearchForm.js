import React from 'react'

function SearchForm(props) {
    return (
        <div>
            <form className="root">
                  <input 
                    onChange = {props.handleInputChange}
                    className="textfield" 
                    id="outlined-basic" 
                    label="Search!" 
                    variant="outlined"
                    type="search"
                    value={props.search}
                  />
              </form>
        </div>
    )
}

export default SearchForm
