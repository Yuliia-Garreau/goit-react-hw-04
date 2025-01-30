// import { useToggle } from "./services/useToggle.js";
// import React from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import { FcLike } from "react-icons/fc";

const customStyles = {
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

const ImageModal = ({ isOpen, onClose, image }) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        // onAfterOpen={onClose}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <img
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

export default ImageModal;

// item.urls.regular

// Не обмежуйся завданням, використовуй дані із об'єктів,
// щоб відобразити більше цікавої інформації в модальному
// вікні. Наприклад, про автора зображення, кількість лайків,
// опис і т.д.

//

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//

// function App() {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);                  open
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);                  close
//   }

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// ReactDOM.render(<App />, appElement);
