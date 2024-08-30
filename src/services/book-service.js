const API_URL = "https://www.googleapis.com/books/v1/volumes";
const placeholderImg = "../../assets/placeholder.png";

export const fetchBooks = async (searchTerm) => {
    if (searchTerm.trim() === "") {
        //there are no non-space characters
        throw new Error("Must search for a value");
    }

    console.log(searchTerm);
    const response = await fetch(`${API_URL}?q=${searchTerm}&maxResults=24`);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    if (data.totalItems === 0) {
        throw new Error(`No books found for "${searchTerm}"`);
    }

    return cleanData(data.items);
}

export const cleanData = (data) => {
    return data.map(book => {
        const volumeInfo = book.volumeInfo;

        return {
            id: book.id,
            title: volumeInfo.title || "[No title recorded]",
            authors: volumeInfo.authors ? volumeInfo.authors.join(", ") : "[No authors recorded]",
            description: volumeInfo.description || "[No description recorded]",
            publisher: volumeInfo.publisher || "[No publisher recorded]",
            publishedDate: volumeInfo.publishedDate || "[No date recorded]",
            pageCount: volumeInfo.pageCount || "[No page count recorded]",
            imageLink: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : placeholderImg,
        }
    })
};