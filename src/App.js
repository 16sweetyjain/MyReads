
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
      current:[],want:[],read:[],allBooks:[]
    }
    this.addToWant=this.addToWant.bind(this);
    this.addToRead=this.addToRead.bind(this);
    this.addToCurrent=this.addToCurrent.bind(this);
    this.deleteFromCurrent=this.deleteFromCurrent.bind(this);
    this.deleteFromRead=this.deleteFromRead.bind(this);
    this.deleteFromWant=this.deleteFromWant.bind(this);
  
  }
  componentDidMount(){
    BooksAPI.getAll().then(books=>
      this.setState({allBooks:books}));
  }

  deleteFromCurrent=(bookId)=>{
  
      let booki =this.state.current.filter((book)=>{
      return (book.id!==bookId);
      
      });
      this.setState({current:booki});
          }
  
  deleteFromRead=(bookId)=>{
  
    let booki =this.state.read.filter((book)=>{
    return (book.id!==bookId);
    
    });
    this.setState({read:booki});
        }

deleteFromWant=(bookId)=>{
  
  let booki =this.state.want.filter((book)=>{
  return (book.id!==bookId);
  
  });
  this.setState({want:booki});
      }


  addToCurrent=(bookId,catBooks)=>{
 let book=catBooks.filter(b=>b.id===bookId);
 let booki=Object.assign({},book,{id:bookId});

 //console.log(bookId);
 //console.log(booki);  
   let books=[...this.state.current,booki];
    this.setState({
      current:books
    });
   
  }

  addToWant=(bookId,catBooks)=>{
  
    let book=catBooks.filter(b=>b.id===bookId);
    //console.log(bookId);
   // console.log(book);
    let booki=Object.assign({},book,{id:bookId});


   let books=[...this.state.current,booki];
    this.setState({
      want:books
    });
  }

  addToRead=(bookId,catBooks)=>{
    let book=catBooks.filter(b=>b.id===bookId);
   // console.log(bookId);
   // console.log(book);    
    let booki=Object.assign({},book,{id:bookId});

 //console.log(bookId);
 //console.log(booki);  
   let books=[...this.state.current,booki];
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
      read={this.state.read} />
    );
  }
   

  render() {
   /* console.log('current:')
  console.log(this.state.current);
  console.log('read:')
 console.log(this.state.read);
 console.log('want:');
  console.log(this.state.want);*/
  /*this.state.current.map((book)=>{
   console.log(book.id);
  })*/
  //console.log(this.state.allBooks);
    return (
      <div className="app">
        
  
  <Header/>
  <Switch>
    
    <Route path='/search' component={this.Search}/>
   
<Route path='/home' component={this.Home}/>
<Redirect to='/home'/>
   
  </Switch>
  
  
        </div>
          
        );
      
    };
  }

export default BooksApp;
