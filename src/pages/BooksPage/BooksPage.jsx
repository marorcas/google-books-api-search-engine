import { useContext } from 'react'

import styles from './BooksPage.module.scss'

import BooksContainer from '../../containers/BooksContainer/BooksContainer'
import SearchBar from '../../components/SearchBar/SearchBar'
import { SearchContext } from '../../contexts/SearchContextProvider/SearchContextProvider'

const BooksPage = () => {
    const { setSearchTerm } = useContext(SearchContext)

    const onBookSearch = (value) => {
      setSearchTerm(value)
    }

    return (
      <>
      {/* <div className={styles.BooksPage}> */}
        <h1 className={styles.Title}>Books Search</h1>
        <SearchBar onBookSearch={onBookSearch} />
        <BooksContainer />
      {/* </div> */}
      </>
    );
}

export default BooksPage
