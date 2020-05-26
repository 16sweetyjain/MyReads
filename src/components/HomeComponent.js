import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf_current: '',
      shelf_read: '', shelf_want: ''
    }
    this.handleShelfUpdateForCurrent = this.handleShelfUpdateForCurrent.bind(this);
    this.handleShelfUpdateForRead = this.handleShelfUpdateForRead.bind(this);
    this.handleShelfUpdateForWant = this.handleShelfUpdateForWant.bind(this);

  }

  handleShelfUpdateForCurrent(book, bookId, e) {
    this.setState({ shelf_current: e.target.value });


    this.props.deleteFromCurrent(bookId);
    if (e.target.value == "wantToRead") {

      this.props.addToWant(book, bookId);
    }

    if (e.target.value == "read") {
      this.props.addToRead(book, bookId);
    }

  }


  handleShelfUpdateForWant(book, bookId, e) {
    this.setState({ shelf_want: e.target.value });

    this.props.deleteFromWant(bookId);
    if (e.target.value == "currentlyReading") {

      this.props.addToCurrent(book, bookId);
    }

    if (e.target.value == "read") {
      this.props.addToRead(book, bookId);
    }

  }


  handleShelfUpdateForRead(book, bookId, e) {
    this.setState({ shelf_read: e.target.value });

    //console.log(book);
    this.props.deleteFromRead(bookId);
    if (e.target.value == "wantToRead") {

      this.props.addToWant(book, bookId);
    }

    if (e.target.value == "currentlyReading") {

      this.props.addToCurrent(book, bookId);
    }

  }



  render() {

    const curr = this.props.current.map((el) => {

      const book = el.book.book;
    

      let back;
      let author, title;
      if (book == undefined) {
        author = undefined;
      }
      else {
        if (book.authors == undefined) {
          author = undefined;
        }
        else {
          author = (book.authors)[0];
        }
      }
      if (book == undefined) {
        title = undefined;
      }
      else {
        if (book.title == undefined) {
          title = undefined;
        }
        else {
          title = book.title;
        }
      }

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
     // back=book.imageLinks;

      const isBack = back === undefined ? null : "url(" + back.thumbnail + ")";
      const id = el.id;

      return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

              <div className="book-shelf-changer">
                <select value={this.state.shelf_current} onChange={e => this.handleShelfUpdateForCurrent({ book }, id, e)}  >
                  <option value="move" >Move to...</option>
                  <option value="currentlyReading" disabled >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>

           {title===undefined?null:<div className="book-title">{title}</div> } 
            {author === undefined ? null : <div className="book-authors">{author}</div>}

          </div>



        </li>
      );
    });
    const read= this.props.read.map((el) => {

      const book = el.book.book;
     
    

      let back;
      let author, title;
      if (book == undefined) {
        author = undefined;
      }
      else {
        if (book.authors == undefined) {
          author = undefined;
        }
        else {
          author = (book.authors)[0];
        }
      }
      if (book == undefined) {
        title = undefined;
      }
      else {
        if (book.title == undefined) {
          title = undefined;
        }
        else {
          title = book.title;
        }
      }

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

      const isBack = back === undefined ? null : "url(" + back.thumbnail + ")";
      const id = el.id;

      return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

              <div className="book-shelf-changer">
                <select value={this.state.shelf_current} onChange={e => this.handleShelfUpdateForCurrent({ book }, id, e)}  >
                  <option value="move" >Move to...</option>
                  <option value="currentlyReading"  >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read"  disabled>Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>

           {title===undefined?null:<div className="book-title">{title}</div> } 
            {author === undefined ? null : <div className="book-authors">{author}</div>}

          </div>



        </li>
      );
    });
   
    const want = this.props.want.map((el) => {

      const book = el.book.book;
   

      let back;
      let author, title;
      if (book == undefined) {
        author = undefined;
      }
      else {
        if (book.authors == undefined) {
          author = undefined;
        }
        else {
          author = (book.authors)[0];
        }
      }
      if (book == undefined) {
        title = undefined;
      }
      else {
        if (book.title == undefined) {
          title = undefined;
        }
        else {
          title = book.title;
        }
      }

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

      const isBack = back === undefined ? null : "url(" + back.thumbnail + ")";
      const id = el.id;

      return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

              <div className="book-shelf-changer">
                <select value={this.state.shelf_current} onChange={e => this.handleShelfUpdateForCurrent({ book }, id, e)}  >
                  <option value="move" >Move to...</option>
                  <option value="currentlyReading" disabled >Currently Reading</option>
                  <option value="wantToRead" disabled >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>

           {title===undefined?null:<div className="book-title">{title}</div> } 
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

                  {curr}
                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {want}
                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read}
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
