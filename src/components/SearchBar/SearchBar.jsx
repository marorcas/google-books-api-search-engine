import { useState } from 'react'

import styles from './SearchBar.module.scss'

const SearchBar = ({ onBookSearch }) => {
  const [searchTerm, setSearchTerm] = useState(null)

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onBookSearch(searchTerm)
    setSearchTerm(null)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.SearchBar}>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm || ""}
        onChange={handleSearchTermChange}
        required
      />

      <button className={styles.SearchButton}>Search</button>
    </form>
  )
}

export default SearchBar
