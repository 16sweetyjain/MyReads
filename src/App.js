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
      books: []

    }
    this.handleShelfUpdate = this.handleShelfUpdate.bind(this);
  }


  componentDidMount() {

    BooksAPI.getAll().then(books =>


      this.setState({ books: books }));

  }

  handleShelfUpdate = (newBook, newBookId, newShelf) => {


    BooksAPI.update(newBook, newShelf).then(b => {

      newBook.shelf = newShelf;

      this.setState(prevState => ({


        books:

          prevState.books.filter(book => {


            const id = book.id != undefined ? book.id : book.book.id;
            return (id !== newBookId)
          }

          )
            .concat(newBook)
      }));


    });
  }



  Search = () => {
    return (
      <SearchComponent books={this.state.books} handleShelfUpdate={this.handleShelfUpdate} />
    );
  }

  Home = () => {
    return (
      <HomeComponent books={this.state.books} handleShelfUpdate={this.handleShelfUpdate}
      />
    );
  }


  render() {


    const ans = this.state.books.filter(book => {
      return (book.shelf === 'currentlyReading')
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
