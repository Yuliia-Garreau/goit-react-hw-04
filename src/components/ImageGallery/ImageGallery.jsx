import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={s.list}>
      {items.map((image) => (
        <li className={s.item} key={image.id}>
          <ImageCard {...image} image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
