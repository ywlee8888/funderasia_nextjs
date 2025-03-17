import React, { useState } from "react";
import TextIconCard from "./membership";
import styles from './membership.module.css';
import { FaCheckCircle } from "react-icons/fa";

const MembershipCardContainer: React.FC = () => {
  const cardsData = [
    {
      imageSrc: "/img/individual.jpg",
      title: "INDIVIDUAL",
      description: "Individual Member",
      price: "US$15,000/-",
    },
    {
      imageSrc: "/img/family.jpg",
      title: "FAMILY",
      description: "4 Family Members",
      price: "US$50,000/-",
    },
    {
      imageSrc: "/img/corporate_executives.jpg",
      title: "CORPORATE",
      description: "6 Corp Nominees",
      price: "US$100,000/-",
    },    
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentCards = cardsData.slice(startIndex, startIndex + itemsPerPage);

  return (    
    <div className={styles.cardContainer}>    
      <div className={styles.cardItems}>
        {currentCards.map((card, index) => (
          <TextIconCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            price={card.price}
            icon={FaCheckCircle}
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipCardContainer;
