import React from 'react';
import styles from './membership.module.css';
import { IconType } from 'react-icons'; 
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  icon: IconType;
}

const TextIconCard: React.FC<CardProps> = ({ imageSrc, title, description, price, icon: Icon }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <Image src={imageSrc} alt={title} className={styles.cardImage} />
      <p className={styles.cardDescription}>
        <Icon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        {description}
      </p>
      <p className={styles.cardPrice}>{price}</p>
    </div>
  );
};

export default TextIconCard;
