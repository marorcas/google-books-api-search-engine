// const API_URL = "https://www.googleapis.com/books/v1/";

// export const fetchAllBooks = async () => {
//     try {
//         const response = await fetch(API_URL, {
//             headers: {
//               Accept: "application/json",
//             },
//           });

//           console.log(jokeSearchTerm)
    
//           const data = await response.json()
//           setJokesList(data.results)
//         } catch (error) {
//           console.error('Error fetching jokes:', error);
//         }
//       };


//     const collectionRef = collection(db, "movies");
//     const snapshot = await getDocs(collectionRef);
//     console.log(snapshot);
//     const cleanData = snapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() };
//     });
//     console.log(cleanData);
//     return cleanData;
// };