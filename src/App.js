import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from './components/Header';
import SearchComponent from './components/Search';
import HomeComponent from './components/HomeComponent';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      want: [
        {book:
          {
          book:{
          allowAnonLogging: false,
          authors: (2) ["Stuart Jonathan Russell", "Peter Norvig"],
          averageRating: 4.5,
          canonicalVolumeLink: "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=8jZBksh-bUMC",
          categories: ["Computers"],
          contentVersion: "preview-1.0.0",
          description: "Artificial intelligence: A Modern Approach, 3e,is ideal for one or two-semester, undergraduate or graduate-level courses in Artificial Intelligence. It is also a valuable resource for computer professionals, linguists, and cognitive scientists interested in artificial intelligence. The revision of this best-selling text offers the most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence.",
          imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=8jZBksh-b…C&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=8jZBksh-b…C&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
       
          infoLink: "http://books.google.com/books?id=8jZBksh-bUMC&dq=artificial+intelligence&hl=&source=gbs_api",
          language: "en",
          maturityRating: "NOT_MATURE",
          pageCount: 1132,
          previewLink: "http://books.google.com/books?id=8jZBksh-bUMC&q=artificial+intelligence&dq=artificial+intelligence&hl=&cd=1&source=gbs_api",
          printType: "BOOK",
          publishedDate: "2010",
          publisher: "Prentice Hall",
          ratingsCount: 10,
          readingModes: {text: false, image: false},
          subtitle: "A Modern Approach",
          title: "Artificial Intelligence",
          }
          },
          id:"8jZBksh-bUMC"
          }
          
    
      ],
 read: [{book:
        {
        book:
        {
        allowAnonLogging: false,
        authors: ["John Drury"],
        averageRating: 5,
        canonicalVolumeLink: "https://books.google.com/books/about/Poetry_Dictionary.html?hl=&id=vERZtJC5AmkC",
        categories: ["Reference"],
        contentVersion: "1.0.0.0.preview.1",
        description: "Revised and updated, The Poetry Dictionary is the most comprehensive resource of poetry terms for any lover, teacher, or student of poetry. Author and poet John Drury gives clear, relevant definitions to the terms that all poets need to know and understand. In a friendly tone, with hundreds of classic and contemporary examples, Drury teaches concepts that will broaden and stimulate your creative process.",
        imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=vERZtJC5A…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=vERZtJC5A…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        infoLink: "http://books.google.com/books?id=vERZtJC5AmkC&dq=poetry&hl=&source=gbs_api",
        language: "en",
        maturityRating: "NOT_MATURE",
        pageCount: 374,
        previewLink: "http://books.google.com/books?id=vERZtJC5AmkC&printsec=frontcover&dq=poetry&hl=&cd=7&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2006",
        publisher: "Writer's Digest Books",
        ratingsCount: 2,
        readingModes: {text: false, image: true},
        title: "Poetry Dictionary",
        }
        },
        id:"vERZtJC5AmkC"
        }
        
      ],current: [{book:
        {
        book:{
        allowAnonLogging: false,
        authors: ["John Haugeland"],
        averageRating: 4.5,
        canonicalVolumeLink: "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=zLFSPdIuqKsC",
        categories: ["Computers"],
        contentVersion: "0.0.1.0.preview.1",
        description: "Presented in non-technical terms, this book explores the relationship between human thinking and machine computing",
        imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=zLFSPdIuq…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=zLFSPdIuq…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},  
        infoLink: "http://books.google.com/books?id=zLFSPdIuqKsC&dq=artificial+intelligence&hl=&source=gbs_api",
        language: "en",
        maturityRating: "NOT_MATURE",
        pageCount: 287,
        previewLink: "http://books.google.com/books?id=zLFSPdIuqKsC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=2&source=gbs_api",
        printType: "BOOK",
        publishedDate: "1989-01-01",
        publisher: "MIT Press",
        ratingsCount: 2,
        readingModes: {text: false, image: true},
        subtitle: "The Very Idea",
        title: "Artificial Intelligence"
        }
        }
        ,
        id: "zLFSPdIuqKsC"}
    
      ],

      allBooks:[]
      
     
    }
    this.addToWant = this.addToWant.bind(this);
    this.addToRead = this.addToRead.bind(this);
    this.addToCurrent = this.addToCurrent.bind(this);
    this.deleteFromCurrent = this.deleteFromCurrent.bind(this);
    this.deleteFromRead = this.deleteFromRead.bind(this);
    this.deleteFromWant = this.deleteFromWant.bind(this);

  }
  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({ allBooks: books }));
  }

  deleteFromCurrent = (bookId) => {

    let booki = this.state.current.filter((book) => {
      return (book.id !== bookId);

    });
    this.setState({ current: booki });
  }

  deleteFromRead = (bookId) => {

    let booki = this.state.read.filter((book) => {
      return (book.id !== bookId);

    });
    this.setState({ read: booki });
  }

  deleteFromWant = (bookId) => {

    let booki = this.state.want.filter((book) => {
      return (book.id !== bookId);

    });
    this.setState({ want: booki });
  }


  addToCurrent = (book, bookId) => {

    let booki = [...this.state.current, { book: book, id: bookId }];

    this.setState({
      current: booki
    });

  }

  addToWant = (book, bookId) => {


    let booki = [...this.state.want, { book: book, id: bookId }];

    this.setState({
      want: booki
    });
  }

  addToRead = (book, bookId) => {

    let booki = [...this.state.read, { book: book, id: bookId }];

    this.setState({
      read: booki
    });
  }

  Search = () => {
    return (
      <SearchComponent addToCurrent={this.addToCurrent} addToRead={this.addToRead} addToWant={this.addToWant} />
    );
  }

  Home = () => {
    return (
      <HomeComponent current={this.state.current} want={this.state.want}
        read={this.state.read} addToCurrent={this.addToCurrent}
        addToRead={this.addToRead} addToWant={this.addToWant}
        deleteFromCurrent={this.deleteFromCurrent}
        deleteFromRead={this.deleteFromRead}
        deleteFromWant={this.deleteFromWant} />
    );
  }


  render() {


   /* console.log('current:')
    console.log(this.state.current);
    console.log('want:')
    console.log(this.state.want);
    console.log('read:')
    console.log(this.state.read);*/

console.log(this.state.current);
    return (
      <div className="app">


        <Header />
        <Switch>

          <Route path='/search' component={this.Search} />

          <Route path='/home' component={this.Home} />
          <Redirect to='/home' />

        </Switch>


      </div>

    );

  };
}

export default BooksApp;
