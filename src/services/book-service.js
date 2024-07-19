const API_URL = "https://www.googleapis.com/books/v1/volumes";
// const API_KEY = "AIzaSyAlkMrRj3_2KFb3bFthXq2phPBZzOb0kak";

export const fetchBooks = async (searchTerm) => {
    if (searchTerm.trim() === "") {
        //there are no non-space characters
        throw new Error("Must search for a value");
    }

    console.log(searchTerm);
    const response = await fetch(`${API_URL}?q=${searchTerm}`);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    if (data.totalItems === 0) {
        throw new Error("No books found");
    }

    return data.items;
}

// export const fetchBookById = async (id) => {
//     const response = await fetch(`${API_URL}/${id}`);

//     if (!response.ok) {
//         throw new Error("Failed to fetch book");
//     }

//     const data = await response.json();

//     return data;
// }