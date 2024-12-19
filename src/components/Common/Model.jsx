import PropTypes from "prop-types";


const Modal = ({ open, onClose, children }) => {

    Modal.propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        children: PropTypes.node.isRequired,
    };

    return (
        <div
            onClick={onClose}
            className={`
          fixed inset-0 flex justify-center items-center transition-colors
          ${open ? "visible bg-black/20" : "invisible"}
        `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
