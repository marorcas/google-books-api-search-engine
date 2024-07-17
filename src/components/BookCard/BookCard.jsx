import styles from "./BookCard.module.scss"

const BookCard = ({ book }) => {
  return (

    <article className={styles.BookCover}>
      <div className={styles.BookInfo}>
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors}</h4>
      </div>
    </article>
  )
}

export default BookCard