import React from "react";
import SearchInput from "./Searchinput";
import axios from "axios";
import Images from "./images";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={images:[]}
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
  }
  async onSearchSubmit(entry){
    const response =await axios.get(`https://pixabay.com/api/?key=31250121-01f71deebdc83d3c0fb66b3ce&q=${entry}&image_type=photo`)
    console.log(response.data.hits)
    this.setState({images: response.data.hits})
  }

  render(){
    return (
    <div className="ui container" style={{marginTop:"30px"}}>
      <SearchInput onSearchSubmit={this.onSearchSubmit} />
      We have {this.state.images.length} Images
      <Images images={this.state.images} />
    </div>
  );
  }
}
  


export default App;
