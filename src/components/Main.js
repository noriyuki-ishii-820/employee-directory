import React, { Component } from 'react';
import ResultList from "./ResultList"
import SearchForm from "./SearchForm"
import Footer from "./Footer"
import "./Main.css"
import API from "../utils/API"

class Main extends Component {
  state = {
    search:"",
    results: [],
    filtered: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.search()
      .then(res => this.setState({ results: res.data.results}))
      .catch(err => console.log(err));

  } 

  handleInputChange = event => {
    this.setState({search: event.target.value})
  } 

  Ascending = () => {
    const asc = this.state.results.sort((a,b) => ( a.name.first + a.name.last > b.name.first + b.name.last) ? 1 : -1)
    this.setState({results: asc})
  }

  Descending = () => {
    const desc = this.state.results.sort((a,b) => (a.name.first + a.name.last > b.name.first + b.name.last) ? -1 : 1)
    this.setState({results: desc})
  }


  render() {
    const filteredList = this.state.results.filter((item) => {
      let values = item.name.first + item.name.last;
      values = values.toLowerCase();
      return values.indexOf(this.state.search) !== -1
    })

   
    return (
      <div>
          <div className="search">
            <SearchForm handleInputChange={this.handleInputChange}/>
          </div>
          <ResultList 
            results={filteredList}
            Ascending={this.Ascending}
            Descending={this.Descending}
          />
          <Footer /> 
          
      </div>
    );
  }
}

export default Main
