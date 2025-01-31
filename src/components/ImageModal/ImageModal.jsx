import Modal from "react-modal";
import { FcLike } from "react-icons/fc";
import s from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return;
  console.log(image);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <img
          className={s.image}
          src={image.urls.regular}
          alt={image.description || "Image from Unsplash"}
          style={{
            width: "100%",
            height: "729px",
            objectFit: "cover",
          }}
        />
        <div style={{ padding: "10px" }}>
          <p>
            <strong>
              <FcLike />
            </strong>{" "}
            {image.likes}
          </p>
          <p>
            <strong></strong> {image.description || "No description available."}
          </p>
        </div>
      </Modal>
    </div>
  );
};
