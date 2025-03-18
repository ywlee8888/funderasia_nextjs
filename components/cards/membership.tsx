import React from 'react';
import styles from './membership.module.css';
import { IconType } from 'react-icons'; 

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const TextIconCard: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <img src={imageSrc} alt={title} className={styles.cardImage} />
      <p className={styles.cardDescription}>
        {description}
      </p>
    </div>
  );
};

export default TextIconCard;
