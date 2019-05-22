import React from 'react'
import Book from './Book'

const ListBook = (props) => {
    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book=> (
                        <li key={book.id}> 
                            <Book book={book} move={props.move}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ListBook