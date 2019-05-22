import React, { Component } from 'react';
import './css/App.css';
import { Route } from 'react-router-dom';
import Library from './components/Library'
import SearchBook from './components/SearchBook'
import * as BookApi from './apis/BooksApi'

class BookApp extends Component {
  state = {
    booksOnShelf: [],
  }

  componentDidMount() {
    this.getBooks();
  }
 
  getBooks = () => {
    BookApi.getAll().then((books) => {
        const list = books.map(book => 
            ({
                id: book.id,
                title: book.title,
                authors: book.authors,
                img: book.imageLinks ? book.imageLinks.thumbnail : '',
                shelf: book.shelf
            })
        );
        this.setState({
            booksOnShelf: list,
          });
    });
  };

  move = bookId => event => {
    let shelf = event.target.value;
    BookApi.update({id: bookId}, shelf)
      .then(() => this.getBooks());
    };

  render() {
    return (
      <div className="App">
          <Route exact path="/" render={ () => (
            <Library books={this.state.booksOnShelf} move={this.move} identifier={'library'}/>
            )} />
          <Route exact path="/search" render= {() => (
            <SearchBook move={this.move} booksOnShelf={this.state.booksOnShelf} identifier={'searchbook'}/>
          )}>
          </Route>
      </div>
    );
  }
}

export default BookApp;
