import React, { PureComponent } from 'react'
import ListBook from './ListBook'
import SearchBar from './SearchBar';

class SearchBook extends PureComponent {

    state = {
        searchedBooks: []
    }

    updateSearch = (books) => {
        this.setState({searchedBooks: books});
    }

    checkShelf = books => (
        books.map(book => {
            const find = this.props.booksOnShelf.find(bookOnShelf => bookOnShelf.id === book.id);
            return {
                ...book,
                shelf: find ? find.shelf : 'none'
            };
        })
    )

    render() {
        let books = this.checkShelf(this.state.searchedBooks);
        return (
            <div>
                <SearchBar updateSearch={this.updateSearch}/>
                {this.state.searchedBooks.length > 0 && 
                <ListBook books={books} move={this.props.move} />}
            </div>
        )
    }
}

export default SearchBook