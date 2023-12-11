/* eslint-disable react/prop-types */
// ConfirmationDialog.jsx
const ConfirmationDialog = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-xl font-semibold mb-4">
              Your order is confirmed. Products will arrive soon. Thank you for shopping with us.
            </p>
            <button onClick={onClose} className="bg-green-500 text-white px-4 py-2">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationDialog;
