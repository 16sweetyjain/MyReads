import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'

class Book extends Component {

    handleShelfChange(book, id, e) {

        this.props.handleShelfUpdate(book, id, e.target.value);
        e.preventDefault();
    }

    render() {


        let currentShelf = '';
        for (let each_book of this.props.books) {
            const id = each_book.id != undefined ? each_book.id : each_book.book.id;

            if (id === this.props.book.id) {
                currentShelf = each_book.shelf;
                break;
            }
        }

        const id = this.props.book.id;
        let back;
        back = this.props.book.imageLinks;
        const isBack = back === undefined ? null : "url(" + this.props.book.imageLinks.thumbnail + ")";
        //  this.addBooks({book});
        let author;
        let first = this.props.book.authors;
        if (first !== undefined) {
            author = (this.props.book.authors)[0];
        }
        else {
            author = undefined;
        }


        return (
            <li key={id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: isBack }} />

                        <div className="book-shelf-changer">
                            <select defaultValue={currentShelf} onChange={e => this.handleShelfChange(this.props.book, id, e)}   >
                                <option value="move" >Move to...</option>
                                <option value="currentlyReading"  >Currently Reading</option>
                                <option value="wantToRead"  >Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" >None</option>
                            </select>
                        </div>
                    </div>

                    <div className="book-title">{this.props.book.title}</div>
                    {author === undefined ? null : <div className="book-authors">{author}</div>}

                </div>
            </li>


        );
    }
}
export default Book;
