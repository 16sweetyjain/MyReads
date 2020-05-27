import React from 'react'
import './App.css'
import {
  BrowserRouter,
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

  constructor(props) {
    super(props);
    this.state = {
      allBooks: [],
      current: [],
      want: [],
      read: [],
      


    }
    this.addToWant = this.addToWant.bind(this);
    this.addToRead = this.addToRead.bind(this);
    this.addToCurrent = this.addToCurrent.bind(this);
    this.deleteFromCurrent = this.deleteFromCurrent.bind(this);
    this.deleteFromRead = this.deleteFromRead.bind(this);
    this.deleteFromWant = this.deleteFromWant.bind(this);
    this.deleteFromAllBooks = this.deleteFromAllBooks.bind(this);

  }
  componentDidMount() {

    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books });

    }).catch(console.error());


  }

  

  deleteFromAllBooks = (bookId) => {
    let booki = this.state.allBooks.filter((book) => {
      return (book.id !== bookId);

    });
    this.setState({ allBooks: booki });
  }

  deleteFromCurrent = (bookId) => {

    let booki = this.state.current.filter((book) => {
      return (book.id !== bookId);

    });
    this.setState({ current: booki });
  }

  deleteFromRead = (bookId) => {

    let booki = this.state.read.filter((book) => {
      return (book.id !== bookId);

    });
    this.setState({ read: booki });
  }

  deleteFromWant = (bookId) => {

    let booki = this.state.want.filter((book) => {
      return (book.id !== bookId);

    });
    this.setState({ want: booki });
  }


  addToCurrent = (book, bookId) => {

    let booki = [...this.state.current, { book: book, id: bookId }];

    this.setState({
      current: booki
    });

  }

  addToWant = (book, bookId) => {


    let booki = [...this.state.want, { book: book, id: bookId }];

    this.setState({
      want: booki
    });
  }

  addToRead = (book, bookId) => {

    let booki = [...this.state.read, { book: book, id: bookId }];

    this.setState({
      read: booki
    });
  }

  Search = () => {
    return (
      <SearchComponent addToCurrent={this.addToCurrent} addToRead={this.addToRead} addToWant={this.addToWant} />
    );
  }

  Home = () => {
    return (
      <HomeComponent current={this.state.current} want={this.state.want}
      allBooks={this.state.allBooks}
        read={this.state.read} addToCurrent={this.addToCurrent}
        addToRead={this.addToRead} addToWant={this.addToWant}
        deleteFromCurrent={this.deleteFromCurrent}
        deleteFromRead={this.deleteFromRead}
        deleteFromWant={this.deleteFromWant} 
        deleteFromAllBooks={this.deleteFromAllBooks}/>
    );
  }


  render() {

    const intial = this.state.allBooks.map((book) => {
      let back;
      if (book == undefined) {
        back = undefined;
      }
      else {
        if (book.imageLinks == undefined) {
          back = undefined;
        }
        else {
          back = book.imageLinks;
        }
      }

      const isBack = "url(" + back.thumbnail + ")";
      const id = book.id;

      return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

              <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={e => this.handleShelfUpdate({ book }, id, e)} >
                  <option value="move" disabled >Move to...</option>
                  <option value="currentlyReading"  >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>

            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>

          </div>



        </li>
      );
    });




    return (
      <div className="app">


        <Header />

       


        <Switch>

          <Route path='/search' component={this.Search} />

          <Route path='/home' component={this.Home} />
          <Redirect to='/home' />

        </Switch>


      </div>

    );

  };
}

export default BooksApp;
