import React from 'react'

import './App.css'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import SearchComponent from './components/Search';
import HomeComponent from './components/HomeComponent';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      current:[],want:[],read:[]
    }
  
  }

  
  
   SearchComponent=()=>{
    return(
      <SearchComponent current={this.state.current}  want ={this.state.want}
      read={this.state.read}/>
    );
  }


  HomeComponent=()=>{
    return(
      <HomeComponent current={this.state.current}  want ={this.state.want}
      read={this.state.read}/>
    );
  }

  render() {
    return (
      <div className="app">
  
  <Header/>
  <Switch>
    
    <Route path='/search' component={SearchComponent}/>
   

<Route path='/home' component={HomeComponent}/>
   
  </Switch>
        </div>
          
        );
      
    };
  }

export default BooksApp;
