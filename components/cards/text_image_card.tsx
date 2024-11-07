// components/text_image_card.tsx
import React from 'react';
import styles from './serviceholder.module.css';
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const TextImageCard: React.FC<CardProps> = ({ imageSrc, title, description, link }) => {
  return (
    <div className={styles.card}> {/* Use module CSS class for card */}
      <img src={imageSrc} alt={title} className={styles.cardImage} /> {/* Ensure the class name matches */}
      <h2 className={styles.cardTitle}>{title}</h2> {/* Use module CSS class */}
      <p className={styles.cardDescription}>{description}</p> {/* Use module CSS class */}
      {/*<a href={link} className={styles.cardLink}>Find Out More</a>*/} {/* Use module CSS class */}
    </div>
  );
};

export default TextImageCard;
