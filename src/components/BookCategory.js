import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookCategory extends Component {
    static propTypes = {
        onShelfChange: PropTypes.func.isRequired
    }

    //Function that makes an API with the target value to update the shelf of a saved book from parent component
    changeShelf = (e) => {
        this.props.onShelfChange(e.target.value)
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.changeShelf} value={this.props.book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.author}</div>
                </div>
            </li>
        )
    }
}

export default BookCategory