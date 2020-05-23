import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';

class Home extends Component{
constructor(props){
  super(props);
}

 
    render(){
console.log(this.props);
     /* const curr=this.props.current((book)=>{
        return(
        <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url({back.smallThumbnail})' }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" >Move to...</option>
                          <option value="currentlyReading" >Currently Reading</option>
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
        });*/
        return(
           < div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                   
                  </ol>
                </div>
              </div>


              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                  </ol>
                </div>
              </div>

              
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Home;