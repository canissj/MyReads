import React from 'react'

const Book = (props) => {
    const { id, title, authors, img, shelf } = props.book;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${img})`}}></div>
                <div className="book-shelf-changer">
                    <select onChange={(e) => props.move(id)(e)} value={shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors && authors.map(author => <span key={author+title}>{author}.</span>)}</div>
        </div>
    )

}

export default Book