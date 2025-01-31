import "./App.css";
import "modern-normalize";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState, useEffect } from "react";
import { fetchPictures } from "./services/pictures-api.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import { ImageModal } from "./components/ImageModal/ImageModal.jsx";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(21);
  const [selectedImage, setSelectedImage] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const open = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };
  const closed = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const results = await fetchPictures(query, page, perPage);
        setPictures((prev) => [...prev, ...results]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);
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
      <ImageModal isOpen={modalOpen} onClose={closed} image={selectedImage} />
    </div>
  );
}

export default App;
