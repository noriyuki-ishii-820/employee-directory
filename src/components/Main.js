import React, { Component } from 'react';
import ResultList from "./ResultList"
import TextField from '@material-ui/core/TextField';
import "./Main.css"
import API from "../utils/API"

class Main extends Component {
  state = {
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.search()
      .then(res => this.setState({ results: res.data.results}))
      .catch(err => console.log(err));
  } 

    render() {
    return (
      <div>
          <div className="search">
              <form className="root" noValidate autoComplete="off">
                  <TextField className="textfield" id="outlined-basic" label="Search!" variant="outlined" />
              </form>
          </div>
        
            <ResultList results={this.state.results}
            />
     
      </div>
    );
  }
}

export default Main
