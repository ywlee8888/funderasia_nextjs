import Image from "next/image";
import styles from "./bannerclear.module.css";
import { useEffect, useState } from "react";

interface FullWidthImageProps {
  src: string;
  alt: string;
}

const BannerFlag: React.FC<FullWidthImageProps> = ({ src, alt }) => {
    const [imageHeight, setImageHeight] = useState(400); // Default height

    const handleImageLoad = (img: { naturalHeight: number; naturalWidth: number; }) => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      setImageHeight(1920 / aspectRatio / 2); // Scale down as needed
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
    </div>
  );
};

export default BannerFlag;
