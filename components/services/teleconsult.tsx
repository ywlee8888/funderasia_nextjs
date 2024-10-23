import { useRef, useEffect } from "react";

interface TeleConsulttProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeleConsult = ({ isOpen, onClose }: TeleConsulttProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null); // Create a ref for the modal content

  // Close modal on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef} // Attach ref to the modal content
        className="bg-white p-8 rounded shadow-lg w-1/3"
      >
        <h2 className="text-xl font-bold text-black mb-4">Tele-Consultation Support</h2>
        <p className="text-black">
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).  There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, by injected humour, or randomised words 
          which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
          you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem 
          Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
          generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence 
          structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always 
          free from repetition, injected humour, or non-characteristic words etc.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TeleConsult;
