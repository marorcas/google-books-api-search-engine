import { BrowserRouter, Route, Routes } from "react-router-dom"
import BooksPage from "./pages/BooksPage/BooksPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
