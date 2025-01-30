import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onClick, setSelectedImage }) => {
  const handleClick = (image) => {
    setSelectedImage(image);
    onClick();
  };
  return (
    <ul className={s.list}>
      {items.map((image) => (
        <li className={s.item} key={image.id}>
          {/* <div>
            <img src={item.urls.small} alt={item.alt_description} />
          </div> */}
          <ImageCard
            {...image}
            image={image}
            onClick={() => handleClick(image)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
