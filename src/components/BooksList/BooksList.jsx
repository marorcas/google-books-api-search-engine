import styles from "./BooksList.module.scss"

import BookCard from "../BookCard/BookCard"

const BooksList = ({ booksList }) => {
    console.log(booksList.length)
    return (
        <div className={styles.BooksList}>
            {booksList.map((book) => 
                <BookCard key={book.id} book={book} />
            )}
        </div>
    )
}

export default BooksList