import React from 'react'

import './App.css'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Redirect
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

  addToCurrent=book=>{
    let books=[...this.state.current,book];
    this.setState({
      current:books
    });
    this.addToWant=this.addToWant.bind(this);
    this.addToRead=this.addToRead.bind(this);
    this.addToCurrent=this.addToCurrent.bind(this);
  }

  addToWant=book=>{
    let books=[...this.state.want,book];
    this.setState({
      want:books
    });
  }

  addToRead=book=>{
    let books=[...this.state.read,book];
    this.setState({
      read:books
    });
  }

   Search=()=>{
    return(
<SearchComponent addToCurrent={this.addToCurrent} addToRead={this.addToRead} addToWant={this.addToWant}/>
    );
  }

  Home=()=>{
    return(
      <HomeComponent current={this.state.current}  want ={this.state.want}
      read={this.state.read}/>
    );
  }
   

  render() {
    console.log(this.state.current);
    return (
      <div className="app">
  
  <Header/>
  <Switch>
    
    <Route path='/search' component={this.Search}/>
   
<Route path='/home' component={this.Home}/>
<Redirect to='/'/>
   
  </Switch>
  
  
        </div>
          
        );
      
    };
  }

export default BooksApp;