import React from 'react'
import ListBook from './ListBook'

const BookShelve = (props) => {

    const getTitleByShelf = shelf => {
        return (shelf === 'currentlyReading')
                ? "Currently Reading"
                : (shelf === 'wantToRead')
                    ? "Want to Read"
                    : "Read";
    };

    return (
        <div>
            <h2 className="bookshelf-title">{getTitleByShelf(props.shelf)}</h2>
            <ListBook books={props.books} shelf={props.shelf} move={props.move} />
        </div>
    )
}

export default BookShelve