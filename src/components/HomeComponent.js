import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';

class Home extends Component{
constructor(props){
  super(props);
this.state={
  shelf_current:'',
  shelf_read:'',shelf_want:''
}
this.handleShelfUpdateForCurrent=this.handleShelfUpdateForCurrent.bind(this);
this.handleShelfUpdateForRead=this.handleShelfUpdateForRead.bind(this);
this.handleShelfUpdateForWant=this.handleShelfUpdateForWant.bind(this);

}

handleShelfUpdateForCurrent(book,e){
 /* this.setState({shelf_current:e.target.value});
  //console.log(e.target.value);
 // console.log(book.id);
 const booki=this.props.current.filter(book=>book.id===bookId);
 this.props.deleteFromCurrent(bookId);
  if(e.target.value=="wantToRead"){
 
  this.props.addToWant(booki,bookId);
    }

    if(e.target.value=="read"){
      this.props.addToRead(booki,bookId);
    }*/
    BooksAPI.update(book,e.target.value).then(booki=>console.log(booki));

    
}

handleShelfUpdateForWant(bookId,e){
  this.setState({shelf_want:e.target.value});
  //console.log(e.target.value);
 // console.log(book.id);
 /*const booki=this.props.current.filter(book=>book.id===bookId);
 this.props.deleteFromWant(bookId);
  if(e.target.value=="read"){
 
  this.props.addToRead(booki,bookId);
    }

    if(e.target.value=="currentlyReading"){
      this.props.addToCurrent(booki,bookId);
    }*/

    
}

handleShelfUpdateForRead(bookId,e){
  this.setState({shelf_read:e.target.value});
  //console.log(e.target.value);
 // console.log(book.id);
 const booki=this.props.read.filter(book=>book.id===bookId);
 this.props.deleteFromRead(bookId);
  if(e.target.value=="wantToRead"){
 
  this.props.addToWant(booki,bookId);
    }

    if(e.target.value=="currentlyReading"){
      this.props.addToCurrent(booki,bookId);
    }

    
}
 
    render(){
//console.log(this.props);
     const curr=this.props.current.map((book)=>{
       const id=book.id
   // console.log(book.description);
          return(
        <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}>
               
                      <div className="book-shelf-changer">
                        <select  value={this.state.shelf_current}  onChange={e=>this.handleShelfUpdateForCurrent({book},e)}>
                          <option value="move" >Move to...</option>
                          <option value="currentlyReading" >Currently Reading</option>
                          <option value="wantToRead" >Want to Read</option>
                          <option value="read" >Read</option>
                          <option value="none" >None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    
              
                  </div>
                  </div>
               
                  </li>     
        );
     });
     const read=this.props.read.map((book)=>{
      const id=book.id
      return(
        <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url({book.thumbnail})'}}>
               
                      <div className="book-shelf-changer">
                        <select value={this.state.shelf_read}  onChange={e=>this.handleShelfUpdateForRead(id,e)}>
                          <option value="move" >Move to...</option>
                          <option value="currentlyReading" >Currently Reading</option>
                          <option value="wantToRead" >Want to Read</option>
                          <option value="read" >Read</option>
                          <option value="none" >None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                
              
                  </div>
                  </div>
               
                  </li>     
        );
     });
     const want=this.props.want.map((book)=>{
      const id=book.id
      return(
        <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url({book.thumbnail})'}}>
               
                      <div className="book-shelf-changer">
                        <select value={this.state.shelf_want}  onChange={e=>this.handleShelfUpdateForWant(id,e)}>
                          <option value="move" >Move to...</option>
                          <option value="currentlyReading" >Currently Reading</option>
                          <option value="wantToRead" >Want to Read</option>
                          <option value="read" >Read</option>
                          <option value="none" >None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                
              
                  </div>
                  </div>
               
                  </li>     
        );
     });
        return(
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
