import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';
//import Options from '../shared/options';
let cat_books;
class Search extends Component{

constructor(props){
  super(props);
  this.state={
category:null,
categoryBooks:null
  };
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleChange=this.handleChange.bind(this);

}

handleSubmit(e)
{
 BooksAPI.search(this.state.category).then(books=>
  this.setState({categoryBooks:books}));
  

e.preventDefault();
}
handleChange(e){
  this.setState({category:e.target.value});
  e.preventDefault();
}
    


  render(){
   
  
   
if(this.state.categoryBooks!=null){
    cat_books=  this.state.categoryBooks.forEach((book) => {
   console.log(book);
        
     
    
     /* return(
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
         );*/
         return(
           <div>
             <h1>
               {book.title}
             </h1>
           </div>
         )
       
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
      <ol className="books-grid">
  {cat_books}
  </ol>
</div>
      </div>
    );
  }
}


export default Search;
/*<ol className="books-grid">
  {cat_books}
  </ol> */
