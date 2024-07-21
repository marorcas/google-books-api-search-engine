import { useState } from "react"

import styles from "./BookCard.module.scss"

import placeholderImg from "../../assets/placeholder.png"

const BookCard = ({ book }) => {
  const [showBookModal, setShowBookModal] = useState(false)

  const openBookModal = () => {
    setShowBookModal(true)
  }

  const closeBookModal = () => {
    setShowBookModal(false)
  }

  return (
    <>
      <article className={styles.Book} onClick={openBookModal}>
        <div className={styles.LeftPage}>
          {book.volumeInfo.imageLinks ? (
            <img src={book.volumeInfo.imageLinks.thumbnail}
              className={styles.Cover} />
          ) : (
            <img src={placeholderImg} className={styles.PlaceholderImg} />
          )}
        </div>

        <div className={styles.RightPage}>
          <p className={styles.Title}>{book.volumeInfo.title}</p>
          <p className={styles.Author}>{book.volumeInfo.authors.join(", ")}</p>
        </div>
      </article>

      {showBookModal && (
        <div className={styles.Modal}>
          <p>Title: {book.volumeInfo.title}</p>
          {book.volumeInfo.imageLinks ? (
            <img src={book.volumeInfo.imageLinks.thumbnail} />
          ) : (
            <img src={placeholderImg} />
          )}
          <p>Author/s: {book.volumeInfo.authors.join(", ")}</p>
          <p>Summary: {book.volumeInfo.description}</p>
          <p>Publisher: {book.volumeInfo.publisher}</p>
          <p>Published date: {book.volumeInfo.publishedDate}</p>
          <p>Page count: {book.volumeInfo.pageCount}</p>
          <button onClick={closeBookModal}>Close</button>
        </div>
      )}
    </>
  )
}

export default BookCard