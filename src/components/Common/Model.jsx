
// import PropTypes from 'prop-types';

// const Modal = ({ isOpen, closeModal, title, date, location, description, image }) => {

//     Modal.propTypes = {
//         isOpen: PropTypes.bool.isRequired,
//         closeModal: PropTypes.func.isRequired,
//         title: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         location: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//     };
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//             <div className="bg-white max-w-4xl w-full mx-4 rounded-lg overflow-hidden shadow-lg">
//                 {/* <div
//                     className="relative h-[300px] bg-cover bg-center"
//                     style={{ backgroundImage: `url(${image})` }}
//                 ></div>
//                 <div className="p-6">
//                     <h2 className="text-2xl font-bold mb-4">{title}</h2>
//                     <div className="flex space-x-4 mb-4">
//                         <p className="flex items-center text-gray-700">
//                             <i className="bi bi-calendar mr-2"></i> {date}
//                         </p>
//                         <p className="flex items-center text-gray-700">
//                             <i className="bi bi-geo-alt mr-2"></i> {location}
//                         </p>
//                     </div>
//                     <p className="text-gray-600 mb-6">{description}</p>
//                     <button
//                         onClick={onClose}
//                         className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white py-3 rounded-lg font-medium transition-colors"
//                     >
//                         Close
//                     </button>
//                 </div> */}
//                 <button
//                     onClick={() => closeModal(false)}
//                     className="absolute top-4 right-4 text-gray-700 hover:text-red-600"
//                 >
//                     <i className="bi bi-x-lg text-2xl"></i>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Modal;
