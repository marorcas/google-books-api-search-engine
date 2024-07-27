import { useState } from "react";

import styles from "./BooksList.module.scss"

import BookCard from "../BookCard/BookCard"
import BookListBackIcon from "./BookListBackIcon";
import BookListNextIcon from "./BookListNextIcon";

const BooksList = ({ booksList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 6;
  
    const lastIndex = currentPage * booksPerPage;
    const firstIndex = lastIndex - booksPerPage;
    const currentBooks = booksList.slice(firstIndex, lastIndex);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    return (
        <section>
            <div className={styles.BooksList}>
                {currentBooks.map((book) => 
                    <BookCard key={book.id} book={book} />
                )}
            </div>

            <div className={styles.Pagination}>
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    <BookListBackIcon/>
                </button>

                <button onClick={() => paginate(currentPage + 1)} disabled={lastIndex >= booksList.length}>
                    <BookListNextIcon/>
                </button>
            </div>
        </section>
    )
}

export default BooksList