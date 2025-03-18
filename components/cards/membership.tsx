import React from 'react';
import styles from './membership.module.css';
import { IconType } from 'react-icons'; 

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  icon: IconType;
}

const TextIconCard: React.FC<CardProps> = ({ imageSrc, title, description, icon: Icon }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <img src={imageSrc} alt={title} className={styles.cardImage} />
      <p className={styles.cardDescription}>
        <Icon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        {description}
      </p>
    </div>
  );
};

export default TextIconCard;
