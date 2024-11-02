import Image from "next/image";
import styles from "./bannerclear.module.css";
import FlagGrid from "../flags/flaggrid";
import { useEffect, useState } from "react";

interface FullWidthImageProps {
  src: string;
  alt: string;
}

const MedicalImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
  const [imageDimensions, setImageDimensions] = useState({ height: 0, width: 0 });

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
        onLoadingComplete={handleImageLoad}
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
