import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class SavedBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }
    
    updateBook = (book, shelf) => {
        this.props.onChange(book, shelf)
    }

    render() {
        const books = this.props.books
        const currentlyShelf = books.filter((b) => b.shelf === 'currentlyReading')
        const wantShelf = books.filter((b) => b.shelf === 'wantToRead')
        const readShelf = books.filter((b) => b.shelf === 'read')

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MY LIBRARY</h1>
                </div>
                <BookShelf 
                    title="Currently Reading"  
                    books={books.filter((book) => (book.shelf === "currentlyReading"))} 
                    onChangeBook={this.props.onChange}/>
                <BookShelf 
                    title="Want to Read"  
                    books={books.filter((book) => (book.shelf === "wantToRead"))}
                    onChangeBook={this.props.onChange}/>
                <BookShelf 
                    title="Read" 
                    books={books.filter((book) => (book.shelf === "read"))}
                    onChangeBook={this.props.onChange}/>
            </div>
        )
    }
}

export default SavedBooks