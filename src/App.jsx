import BooksPage from "./pages/BooksPage/BooksPage"
import SearchContextProvider from "./contexts/SearchContextProvider/SearchContextProvider"

function App() {

  return (
    <>
      <SearchContextProvider>
        <BooksPage />
      </SearchContextProvider>
    </>
  )
}

export default App
