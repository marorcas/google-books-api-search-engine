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
          <p className={styles.Author}>
            {book.volumeInfo.authors ? (
              book.volumeInfo.authors.join(", ")
            ) : (
              "[No author recorded]"
            )}
          </p>
        </div>
      </article>

      {showBookModal && (
        <div className={styles.Modal}>
          <div className={styles.ModalContent}>
            <p>Title: {book.volumeInfo.title}</p>
            {book.volumeInfo.imageLinks ? (
              <img src={book.volumeInfo.imageLinks.thumbnail} />
            ) : (
              <img src={placeholderImg} />
            )}
            <p>Author/s: {book.volumeInfo.authors ? (
              book.volumeInfo.authors.join(", ")
              ) : (
                "[No author/s recorded]"
              )}
            </p>
            <p>Summary: {book.volumeInfo.description ? (
              book.volumeInfo.description
              ) : (
                "[No description recorded]"
              )}
            </p>
            <p>Publisher: {book.volumeInfo.publisher ? (
              book.volumeInfo.publisher
              ) : (
                "[No publisher recorded]"
              )}
            </p>
            <p>Published date: {book.volumeInfo.publishedDate ? (
              book.volumeInfo.publishedDate
              ) : (
                "[No date recorded]"
              )}
            </p>
            <p>Page count: {book.volumeInfo.pageCount ? (
              book.volumeInfo.pageCount
              ) : (
                "[No count recorded]"
              )}
            </p>
            <button onClick={closeBookModal}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default BookCard