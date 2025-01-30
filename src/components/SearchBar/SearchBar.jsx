// import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useState } from "react";

// const notification = () =>
//   toast.error("Please enter a search query", {
//     duration: 2000,
//     position: "top-right",
//   });

// console.log(notification);

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter a search query!", {
        duration: 2000,
        position: "top-right",
      });
    }
    // const form = e.target;
    // const searchRequest = form.elements.searchRequest.value;
    // console.log(searchRequest);

    // if (form.elements.searchRequest.value.trim() === "") {
    //   notification();
    //   return;
    // }
    onSubmit(value);
    console.log(value.length);

    e.target.reset();
  };
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
          Search
        </button>
        {/* {value.length === 0 &&
          toast.error("Please enter a search query!", {
            duration: 2000,
            position: "top-right",
          })} */}
      </form>
    </header>
  );
};

export default SearchBar;
