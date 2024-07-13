import { useState } from 'react';
import styles from './BooksPage.module.scss'

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    // useEffect(() => {
    //   fetchAllBooks()
    //     .then((data) => setBooks(data))
    //     .catch((e) => console.log(e));
    // }, []);

    return (
      <main className={styles.BooksPage}>
        <h1 className={styles.Title}>Books</h1>
        <section className={styles.Books}>
          {/* {books.map((book) => (
            <MovieCard key={book.id} book={book} />
          ))} */}
          <p>Content</p>
        </section>
      </main>
    );
}

export default BooksPage
