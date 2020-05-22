import React from 'react'
import * as BooksAPI from './BooksAPI'
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

class BooksApp extends React.Component {
  
   SearchComponent=()=>{
    return(
      <SearchComponent/>
    );
  }


  HomeComponent=()=>{
    return(
      <HomeComponent/>
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
