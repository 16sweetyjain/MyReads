import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';

class Home extends Component{

    render(){
        return(
           < div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
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