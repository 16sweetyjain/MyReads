import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';
import styles from '../App.css'

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
    this.handleShelfChange = this.handleShelfChange.bind(this);

  }

  handleSearch(e) {


    this.setState({ category: e.target.value });

    BooksAPI.search(e.target.value).then(books => {

      if (books.length > 0) {

        this.setState({ categoryBooks: books });
      }
      else {
        this.setState({ categoryBooks: [] });
      }

    }).catch(error => {

      this.setState({ errorInCategory: true })


    });


    // this.setState({ show: true })
    e.preventDefault();

  }

  handleShelfChange(book, id, e) {

    this.props.handleShelfUpdate(book, id, e.target.value);
    e.preventDefault();
  }




  render() {



    // console.log(this.state.categoryBooks);
    //console.log(this.state.categoryBooks.length);
    if (this.state.categoryBooks.length > 0) {
      cat_books = this.state.categoryBooks.map((book) => {

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
  <input type="text" value={this.state.category} onChange={this.handleSearch} />

            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        {this.state.category === '' ? null : (

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
