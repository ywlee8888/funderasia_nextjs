import { useEffect } from 'react';

const SpecialistConnectAlert: React.FC<{
  message: string;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseTime?: number;
}> = ({ message, onClose, autoClose = false, autoCloseTime = 3000 }) => {
  
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);

      // Clear timeout if component unmounts before time is up
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Notification</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SpecialistConnectAlert;
