// import "./App.css";
// import "modern-normalize";
// import SearchBar from "./components/SearchBar/SearchBar";
// import Loader from "./components/Loader/Loader";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import { useState, useEffect } from "react";
// import { fetchPicturesBySearch } from "./pictures-api.js";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// function App() {
//   const [pictures, setPictures] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState();

//   const handleSearch = async (searchRequest) => {
//     try {
//       setPictures([]); //add to handleSearch function or handleSetQuery  setPage(0)
//       setError(false);
//       setLoading(true);
//       const response = await fetchPicturesBySearch(searchRequest);
//       setPictures(response);
//       console.log(response);
//     } catch (error) {
//       console.log(error);

//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // useEffect(() => {
//   //   async function fetchPictures() {
//   //     try {
//   //       setLoading(true);
//   //       const response = await axios.get(
//   //         "https://api.unsplash.com/photos/?client_id=vCnAZEnSNJU9w_R_2GyUds1TIUdqOXSMrP0Ij_HGqsg"
//   //       );
//   //       console.log(response.data);
//   //     } catch (error) {
//   //       setError(true);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   //   fetchPictures();
//   // }, []);

//   return (
//     <div>
//       <SearchBar onSubmit={handleSearch} />
//       {loading && <Loader />}
//       {error && <ErrorMessage />}

//       {pictures.length > 0 && <ImageGallery items={pictures} />}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import "modern-normalize";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState, useEffect } from "react";
import { fetchPictures } from "./services/pictures-api.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import { useToggle } from "./services/useToggle.js";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(21);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [modalOpen, setModalOpen] = useState(false);
  const { isOpen, open, closed } = useToggle();
  // const open = setModalOpen(true);
  // const closed = setModalOpen(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const results = await fetchPictures(query, page, perPage);
        setPictures((prev) => [...prev, ...results]);
      } catch {
        // console.log(error.message);

        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);
  // console.log(pictures);
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPictures([]);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}

      {pictures.length > 0 && (
        <ImageGallery
          items={pictures}
          onClick={open}
          setSelectedImage={setSelectedImage}
        />
      )}
      {pictures.length !== 0 && (
        <LoadMoreBtn click={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal isOpen={isOpen} onClose={closed} image={selectedImage} />
    </div>
  );
}

export default App;
