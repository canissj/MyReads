import React, { Component } from 'react'
import * as _ from 'underscore'
import * as BooksApi from '../apis/BooksApi'
import { Link } from 'react-router-dom'

class SearchBar extends Component {
    state = {
        queryId: 0,
        lastQuery: '',
        query: '',
    }

    searchBooks = (currentQueryId) => _.debounce(() => {
        const { lastQuery, query, queryId } = this.state;
        if (lastQuery !== query && queryId === currentQueryId) {
            BooksApi.search(query).then(books => {
                let list = [];
                if (books instanceof Array) {
                    list = books.map(book => 
                        ({
                            id: book.id,
                            title: book.title,
                            authors: book.authors,
                            img: book.imageLinks ? book.imageLinks.thumbnail : '',
                            shelf: book.shelf
                        })
                    )};
                this.props.updateSearch(list);
            });
        }
    }, 500)();

    onChange = (event) => {
        const query = event.target.value;
        this.setState(prevState => ({
            query: query,
            queryId: prevState.queryId + 1
        }));
        this.searchBooks(this.state.queryId + 1);
        this.props.updateSearch([]);
    }
    
    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={'/'}></Link>
                    <div className="search-books-input-wrapper">
                        <input placeholder='Search by book title or author' 
                            value={this.state.query}
                            onChange={this.onChange}
                            />
                    </div>
                </div>
          </div>
        )
    }
}

export default SearchBar