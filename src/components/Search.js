import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';
import styles from '../App.css'

let cat_books;
let all_books;

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: null,
      categoryBooks: [], show: false,
      shelf: 'art', errorInCategory: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleShelfChange = this.handleShelfChange.bind(this);



  }

  handleChange(e) {

    this.setState({ category: e.target.value });
    BooksAPI.search(this.state.category).then(books => {

      this.setState({ categoryBooks: books });

    }).catch(error => {

      this.setState({ errorInCategory: true })


    });

    this.setState({ show: true })
    e.preventDefault();

  }


  handleShelfChange(book, bookId, e) {
    // console.log(e.target.value);
    if (e.target.value != null)
      this.setState({ shelf: e.target.value });

    //console.log(book);
    if (e.target.value == "currentlyReading") {
      this.props.addToCurrent(book, bookId);
      //console.log(book);
    }
    if (e.target.value == "wantToRead") {
      this.props.addToWant(book, bookId);
    }
    if (e.target.value == "read") {
      this.props.addToRead(book, bookId);
    }
    //   console.log(book); 
    //  console.log(this.state.shelf);
    e.preventDefault();
  }

  render() {
    console.log(this.state.category);
    //console.log(this.state.categoryBooks.length);
    if (this.state.categoryBooks != null && this.state.errorInCategory == false && this.state.categoryBooks.length > 0) {
      cat_books = this.state.categoryBooks.map((book) => {

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
                  <select value={this.state.shelf} onChange={e => this.handleShelfChange({ book }, id, e)}  >
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
    }








    return (
      <div>
        <div>
          <Link to='/home'>Home</Link>
        </div>
        <div>
          <form >
            <label>
              Enter search text:
  <input type="text" value={this.state.category} onChange={this.handleChange} />

            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        {this.state.category === "" ? null :(

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
