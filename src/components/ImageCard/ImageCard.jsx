import s from "./ImageCard.module.css";
const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.img}>
      <img
        onClick={() => onClick(image)}
        src={image.urls.small}
        alt={image.alt_description}
        // height={280}
        // width={390}
      />
    </div>
  );
};

export default ImageCard;
