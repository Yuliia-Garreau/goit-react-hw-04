import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ click }) => {
  // console.log(click);

  return (
    <div>
      <button className={s.button} onClick={click}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
