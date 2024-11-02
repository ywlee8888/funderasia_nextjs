// components/bannerConcierge.tsx
import Image from "next/image";
import styles from "./bannerconcierge.module.css";
import ServicesCardContainer from "@/components/cards/servicesHolder";
import Link from "next/link";

// Define the props interface
interface FullWidthImageProps {
  src: string;
  alt: string;
  title: string;
}

const ConciergeImage: React.FC<FullWidthImageProps> = ({ src, alt, title }) => {
  return (
    <div className={styles.bannerContainer}>
      {/* Title Text */}
      <h1 className={styles.title}>{title}</h1>
      {/* Image */}
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={styles.bannerImage}
      />
      {/* Services Card Container Overlay */}
      <div className={styles.servicesCardContainer}>
        <ServicesCardContainer />
      </div>
    </div>
  );
};

export default ConciergeImage;
