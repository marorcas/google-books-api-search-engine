import { useContext, useEffect, useState } from "react"

import styles from "./BooksContainer.module.scss"

import { SearchContext } from "../../contexts/SearchContextProvider/SearchContextProvider"
import { fetchBooks } from "../../services/book-service"
import BooksList from "../../components/BooksList/BooksList"

const BooksContainer = () => {
    const { searchTerm } = useContext(SearchContext)
    const [booksList, setBooksList] = useState(null)
    const [error, setError] = useState(null)
    const [fetchStatus, setFetchStatus] = useState("IDLE")

    useEffect(() => {
        if (searchTerm === null) {
            return
        }

        setFetchStatus("LOADING")

        fetchBooks(searchTerm)
            .then(data => {
                setFetchStatus("SUCCESS")
                setBooksList(data)
            }).catch(err => {
                setError(err)
                setFetchStatus("FAILURE")
            })
    }, [searchTerm])

    return (
        <>
            <div className={styles.BooksContainer}>
                {fetchStatus === "IDLE" && <p>Search for a book</p>}

                {/* seems to work most of the time but sometimes results page doesn't display after a few searches? */}
                {fetchStatus === "LOADING" && (
                    <div className={styles.Loading}>
                        <span className={styles.Dots}></span>
                    </div>
                )}

                {fetchStatus === "SUCCESS" && <BooksList booksList={booksList} />}

                {fetchStatus === "FAILURE" && (
                    <p className={styles.Error}>{error.message}</p>
                )}
            </div>
        </>
    )
}

export default BooksContainer