import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link, Route } from 'react-router-dom';

let curri, wanti, readi;
class Home extends Component {
  constructor(props) {
    super(props);



    this.handleShelfChange = this.handleShelfChange.bind(this);

  }


  handleShelfChange(book, id, e) {



    this.props.handleShelfUpdate(book, id, e.target.value);
    e.preventDefault();
  }




  render() {




    const current = this.props.books.filter(b => b.shelf === 'currentlyReading');
    //console.log(current);
    const curri = current.map((el) => {

      //const book = el.book;
      const book = el.book != undefined ? el.book : el;
      let currentShelf = '';


      for (let each_book of this.props.books) {
        const id = each_book.id != undefined ? each_book.id : each_book.book.id;

        if (id === book.id) {
          currentShelf = each_book.shelf;
          break;
        }
      }


      const id = book.id;
      let back;
      back = book.imageLinks;
      const isBack = back === undefined ? null : "url(" + book.imageLinks.thumbnail + ")";
      //  this.addBooks({book});


      const title = book.title ? book.title : 'No title available';
      let author;
      let first = book.authors;
      if (first !== undefined) {
        author = (book.authors)[0];
      }
      else {
        author = undefined;
      }


      return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

              <div className="book-shelf-changer">
                <select defaultValue={currentShelf} onChange={e => this.handleShelfChanget({ book }, id, e)}   >
                  <option value="move" >Move to...</option>
                  <option value="currentlyReading"  >Currently Reading</option>
                  <option value="wantToRead"  >Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>

            <div className="book-title">{book.title}</div>
            {author === undefined ? null : <div className="book-authors">{author}</div>}

          </div>
        </li>
      );



    });
    const read = this.props.books.filter(b => b.shelf === 'read');
    // console.log(this.read);
    const readi = read.map((el) => {

      //const book = el.book;
      const book = el.book != undefined ? el.book : el;
      let currentShelf = '';


      for (let each_book of this.props.books) {
        const id = each_book.id != undefined ? each_book.id : each_book.book.id;

        if (id === book.id) {
          currentShelf = each_book.shelf;
          break;
        }
      }

      const id = book.id;
      let back;
      back = book.imageLinks;
      const isBack = back === undefined ? null : "url(" + book.imageLinks.thumbnail + ")";
      //  this.addBooks({book});
      let author;
      let first = book.authors;
      if (first !== undefined) {
        author = (book.authors)[0];
      }
      else {
        author = undefined;
      }


      return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

              <div className="book-shelf-changer">
                <select defaultValue={currentShelf} onChange={e => this.handleShelfChange({ book }, id, e)}   >
                  <option value="move" >Move to...</option>
                  <option value="currentlyReading"  >Currently Reading</option>
                  <option value="wantToRead"  >Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>

            <div className="book-title">{book.title}</div>
            {author === undefined ? null : <div className="book-authors">{author}</div>}

          </div>
        </li>
      );




    });

    const want = this.props.books.filter(b => b.shelf === 'wantToRead');
    const wanti = want.map((el) => {
      const book = el.book != undefined ? el.book : el;

      let currentShelf = '';

      for (let each_book of this.props.books) {
        const id = each_book.id != undefined ? each_book.id : each_book.book.id;

        if (id === book.id) {
          currentShelf = each_book.shelf;
          break;
        }
      }

      const id = book.id;
      let back;
      back = book.imageLinks;
      const isBack = back === undefined ? null : "url(" + book.imageLinks.thumbnail + ")";
      //  this.addBooks({book});
      let author;
      let first = book.authors;
      if (first !== undefined) {
        author = (book.authors)[0];
      }
      else {
        author = undefined;
      }


      return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

              <div className="book-shelf-changer">
                <select defaultValue={currentShelf} onChange={e => this.handleShelfChange({ book }, id, e)}   >
                  <option value="move" >Move to...</option>
                  <option value="currentlyReading"  >Currently Reading</option>
                  <option value="wantToRead"  >Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>

            <div className="book-title">{book.title}</div>
            {author === undefined ? null : <div className="book-authors">{author}</div>}

          </div>
        </li>
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
