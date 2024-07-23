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
          <div className={styles.ExitModal}>
            <button onClick={closeBookModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
          </div>
          <table className={styles.ModalContent}>
            <tbody>
                <tr>
                    <th>Title</th>
                    <td>{book.volumeInfo.title}</td>
                </tr>
                <tr>
                    <th>Book Cover</th>
                    <td>
                      {book.volumeInfo.imageLinks ? (
                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                      ) : (
                        <img src={placeholderImg} />
                      )}
                    </td>
                </tr>
                <tr>
                    <th>Author/s</th>
                    <td>
                      {book.volumeInfo.authors ? (
                        book.volumeInfo.authors.join(", ")
                        ) : (
                          "[No author/s recorded]"
                        )}
                    </td>
                </tr>
                <tr>
                    <th>Summary</th>
                    <td>
                      {book.volumeInfo.description ? (
                        book.volumeInfo.description
                      ) : (
                          "[No description recorded]"
                      )}
                    </td>
                </tr>
                <tr>
                    <th>Publisher</th>
                    <td>
                      {book.volumeInfo.publisher ? (
                        book.volumeInfo.publisher
                      ) : (
                        "[No publisher recorded]"
                      )}
                    </td>
                </tr>
                <tr>
                    <th>Published Date</th>
                    <td>
                      {book.volumeInfo.publishedDate ? (
                        book.volumeInfo.publishedDate
                      ) : (
                        "[No date recorded]"
                      )}
                    </td>
                </tr>
                <tr>
                    <th>Page Count</th>
                    <td>
                      {book.volumeInfo.pageCount ? (
                        book.volumeInfo.pageCount
                      ) : (
                        "[No count recorded]"
                      )}
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* {showBookModal && (
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
      )} */}
    </>
  )
}

export default BookCard