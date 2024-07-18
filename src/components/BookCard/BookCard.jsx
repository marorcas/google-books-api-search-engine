import { useState } from "react"

import styles from "./BookCard.module.scss"

const BookCard = ({ book }) => {
  const [showBookModal, setShowBookModal] = useState(false)

  const openBookModal = () => {
    setShowBookModal(true)
  }

  const closeBookModal = () => {
    setShowBookModal(false)
  }

  return (

    <article className={styles.BookCover}>
      <div className={styles.BookInfo} onClick={openBookModal}>
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors.join(", ")}</h4>
      </div>

      {showBookModal && (
        <div className={styles.BookModal}>
          <button onClick={closeBookModal}>Close</button>
        </div>
      )}
    </article>
  )
}

export default BookCard