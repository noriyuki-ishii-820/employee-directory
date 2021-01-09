import React, { Component } from 'react';
import ResultList from "./ResultList"
import SearchForm from "./SearchForm"
import TextField from '@material-ui/core/TextField';
import "./Main.css"
import API from "../utils/API"

class Main extends Component {
  state = {
    search:"",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.search()
      .then(res => this.setState({ results: res.data.results}))
      .catch(err => console.log(err));
  } 

  handleInputChange = event => {
    console.log(event)

    //console.log(filtered)
  } 
    


  render() {
 
    return (
      <div>
          <div className="search">
            <SearchForm handleInputChange={this.handleInputChange}/>
          </div>
        
            <ResultList results={this.state.results}/>
     
      </div>
    );
  }
}

export default Main
