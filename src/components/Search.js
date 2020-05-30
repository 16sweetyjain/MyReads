import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';
import styles from '../App.css'
import Book from './Book';

let cat_books;


class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: '',
      categoryBooks: [], show: false,
      errorInCategory: false,
    };

    this.handleSearch = this.handleSearch.bind(this);


  }

  handleSearch(e) {


    this.setState({ category: e.target.value });

    if (e.target.value != '') {

      BooksAPI.search(e.target.value).then(books => {

        if (books.length > 0) {

          this.setState({ categoryBooks: books, errorInCategory: false });
        }
        else {
          this.setState({ categoryBooks: [], errorInCategory: true });

        }

      })
    }
    else {
      this.setState({ categoryBooks: [], errorInCategory: true });
    }


    e.preventDefault();

  }


  render() {

    cat_books = this.state.categoryBooks.map((book) => {
      const id = book.id
      return (
        <Book key={id} book={book} books={this.props.books} handleShelfUpdate={this.props.handleShelfUpdate} />
      );

    });



    return (
      <div>
        <div>
          <Link to='/home'>Home</Link>
        </div>
        <div>
          <form >
            <label>
              Enter search text:
  <input type="text" value={this.state.category} onChange={this.handleSearch} />

            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        {this.state.errorInCategory === true ? null : (
          <div className="bookshelf-books">
            <div>
              <ol className="books-grid">
                {cat_books}
              </ol>
            </div>
          </div>

        )}

      </div>

    );

  }
}


export default Search;
