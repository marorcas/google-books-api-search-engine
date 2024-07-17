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

                {fetchStatus === "LOADING" && <p>Searching for {searchTerm}</p>}

                {fetchStatus === "SUCCESS" && <BooksList booksList={booksList} />}

                {fetchStatus === "FAILURE" && <p>{error.message}</p>}
            </div>
        </>
    )
}

export default BooksContainer