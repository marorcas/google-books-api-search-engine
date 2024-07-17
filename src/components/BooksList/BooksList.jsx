import styles from "./BooksList.module.scss"

import BookCard from "../BookCard/BookCard"

const BooksList = ({ booksList }) => {
    return (
        <div className={styles.BooksList}>
            {booksList.map((book) => 
                <BookCard key={book.id} book={book} />
            )}
        </div>
    )
}

export default BooksList