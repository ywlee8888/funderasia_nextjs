import Image from "next/image";
import styles from "./bannerclear.module.css";
import FlagGrid from "../flags/flaggrid";
import { useEffect, useState } from "react";

// Define the props interface
interface FullWidthImageProps {
  src: string;
  alt: string;
}

const MedicalImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
  const [imageDimensions, setImageDimensions] = useState({ height: 0, width: 0 });

  // Use effect to set the dimensions once the image is loaded
  const handleImageLoad = (img: { naturalHeight: number; naturalWidth: number; }) => {
    setImageDimensions({ height: img.naturalHeight, width: img.naturalWidth });
  };

  return (
    <div className={styles.bannerContainer}>
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={styles.bannerImage}
        onLoadingComplete={handleImageLoad} // Adjusted to match the expected type
      />
      {/* Overlay FlagGrid */}
      {imageDimensions.height > 0 && (
        <FlagGrid 
          containerHeight={imageDimensions.height} 
          containerWidth={imageDimensions.width} 
        />
      )}
    </div>
  );
};

export default MedicalImage;
