import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link, Route } from 'react-router-dom';
import Book from './Book';

let curri, wanti, readi;
class Home extends Component {
  constructor(props) {
    super(props);


  }


  render() {

    const current = this.props.books.filter(b => b.shelf === 'currentlyReading');

    const curri = current.map((el) => {


      const book = el.book != undefined ? el.book : el;

      return (

        <Book book={book} books={this.props.books} handleShelfUpdate={this.props.handleShelfUpdate} />
      );

    });


    const read = this.props.books.filter(b => b.shelf === 'read');

    const readi = read.map((el) => {

      const book = el.book != undefined ? el.book : el;

      return (

        <Book book={book} books={this.props.books} handleShelfUpdate={this.props.handleShelfUpdate} />

      );


    });


    const want = this.props.books.filter(b => b.shelf === 'wantToRead');
    const wanti = want.map((el) => {
      const book = el.book != undefined ? el.book : el;

      return (

        <Book book={book} books={this.props.books} handleShelfUpdate={this.props.handleShelfUpdate} />


      );
    });

    return (

      <div>



        < div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {curri}
                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wanti}
                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readi}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to='/search'> ADD BOOKS TO SHELF</Link>
        </div>

      </div>
    );
  }
}

export default Home;
