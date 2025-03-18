import React, { useState } from "react";
import TextIconCard from "./membership";
import styles from "./membership.module.css";
import { FaCheckCircle } from "react-icons/fa";

const MembershipCardContainer: React.FC = () => {
  const cardsData = [
    {
      imageSrc: "/img/individual.jpg",
      title: "INDIVIDUAL",
      description:
        "Enjoy seamless, personalized healthcare concierge services across Asia, ensuring you get the care you need, when you need it, with complete peace of mind",
    },
    {
      imageSrc: "/img/family.jpg",
      title: "FAMILY",
      description:
        "Protect your loved ones with unlimited access to expert healthcare support, providing peace of mind and convenience wherever you are in Asia",
    },
    {
      imageSrc: "/img/corporate_executives.jpg",
      title: "CORPORATE",
      description:
        "Elevate employee well-being with tailored healthcare concierge services, enhancing productivity and care access for your team across Asia",
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
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipCardContainer;
