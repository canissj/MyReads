import React, { Component } from 'react'
import BookShelve from './BookShelve'
import { Link } from 'react-router-dom'

const shelves = ['wantToRead', 'currentlyReading', 'read']

class Library extends Component {
    
    filterBooksByShelf = books => shelf => {
        return books.filter(book => book.shelf === shelf)
    };

    render() {
        const filterBooksByShelf = this.filterBooksByShelf(this.props.books);
        return (
            <div className='block'>
                {shelves.map(
                    shelf => <BookShelve key={shelf} books={filterBooksByShelf(shelf)} 
                    shelf={shelf} move={this.props.move} />
                )}
                <div className="open-search">
                    <Link className='search-button' to={'/search'}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Library