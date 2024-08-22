import { useState } from "react"

import styles from "./BookCard.module.scss"

// import placeholderImg from "../../assets/placeholder.png"
import BookCardExitIcon from "./BookCardExitIcon"

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
          <img src={book.imageLink} className={styles.Cover} />
          {/* {book.volumeInfo.imageLinks ? (
            <img src={book.volumeInfo.imageLinks.thumbnail}
              className={styles.Cover} />
          ) : (
            <img src={placeholderImg} className={styles.PlaceholderImg} />
          )} */}
        </div>

        <div className={styles.RightPage}>
          <p className={styles.Title}>{book.title}</p>
          <p className={styles.Author}>{book.authors}</p>
        </div>
      </article>

      {showBookModal && (
        <div className={styles.Modal}>
          <div className={styles.ExitModal}>
            <button onClick={closeBookModal}>
              <BookCardExitIcon/>
            </button>
          </div>
          <table className={styles.ModalContent}>
            <tbody>
                <tr>
                    <th>Title</th>
                    <td>{book.title}</td>
                </tr>
                <tr>
                    <th>Book Cover</th>
                    <td>
                      <img src={book.imageLink} />
                      {/* {book.volumeInfo.imageLinks ? (
                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                      ) : (
                        <img src={placeholderImg} />
                      )} */}
                    </td>
                </tr>
                <tr>
                    <th>Author/s</th>
                    <td>
                      {book.authors}
                    </td>
                </tr>
                <tr>
                    <th>Summary</th>
                    <td>
                      {book.description}
                    </td>
                </tr>
                <tr>
                    <th>Publisher</th>
                    <td>
                      {book.publisher}
                    </td>
                </tr>
                <tr>
                    <th>Published Date</th>
                    <td>
                      {book.publishedDate}
                    </td>
                </tr>
                <tr>
                    <th>Page Count</th>
                    <td>
                      {book.pageCount}
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default BookCard