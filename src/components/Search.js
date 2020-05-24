import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';
let cat_books;
let all_books;
class Search extends Component{

constructor(props){
  super(props);
  
  this.state={
category:null,
categoryBooks:[],allBooks:[],show:false,
shelf:'art'
  };
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleChange=this.handleChange.bind(this);
  this.handleShelfChange=this.handleShelfChange.bind(this);
 this.addBooks=this.addBooks.bind(this);

}



componentDidMount(){
  BooksAPI.getAll().then(books=>
    this.setState({allBooks:books}));
}
handleSubmit(e)
{
 BooksAPI.search(this.state.category).then(books=>

  this.setState({categoryBooks:books}));
  this.setState({show:true});
  

e.preventDefault();
}
handleChange(e){
  this.setState({category:e.target.value});
  e.preventDefault();
}

 



   handleShelfChange(e){
     if(e.target.value!=null)
     this.setState({shelf:e.target.value});
  
 //   console.log(book); 
   //  console.log(this.state.shelf);
     e.preventDefault();
   } 

addBooks(book){
  if(this.state.shelf=="currentlyReading"){
    this.props.addToCurrent(book);
  }  
  if(this.state.shelf=="wantToRead"){
    this.props.addToCurrent(book);
  }
  if(this.state.shelf=="read"){
    this.props.addToCurrent(book);
  }
}
  render(){
   // console.log(this.props);
   
    if(this.state.allBooks!=null){
      all_books=  this.state.allBooks.map((book) => {
     // console.log(book);
           
        
       
         return(
            <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}>
                   
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
                  
                      </div>
                      </div>
                   
                      </li>     
            );
            
          
         });
       }

if(this.state.categoryBooks!=null){
   cat_books=  this.state.categoryBooks.map((book) => {
  // console.log(book);
  
     this.addBooks({book});
    
      return(
         <li>
                   <div className="book">
                     <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url({book.thumbnail})' }}>
                
                       <div className="book-shelf-changer">
                         <select   value={this.state.shelf}  onChange="this.handleShelfChange;this.addBooks({this.book};">
                           <option value="move" disabled >Move to...</option>
                           <option value="currentlyReading" selected >Currently Reading</option>
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
    }
    
    //  console.log(this.state.categoryBooks);  

      
 
    return(
      <div>
        <div>
        <form onSubmit={this.handleSubmit}>
<label>
  Enter search text:
  <input type="text" value={this.state.category}  onChange={this.handleChange}/>

</label>
<input type="submit" value="Submit"/>
        </form>
        </div>
      
    
      <div className="bookshelf-books">
     
{this.state.show==true?(
<div>

<ol className="books-grid">
  
{cat_books}
  </ol>

</div>):

(<div>
<ol className="books-grid">
  
  {all_books}
  </ol>
  </div>)}

</div>
  </div>


    );
  }
}


export default Search;

