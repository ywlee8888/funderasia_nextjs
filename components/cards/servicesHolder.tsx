import React, { useState, useEffect } from "react";
import TextImageCard from "./text_image_card";
import styles from "./serviceholder.module.css";

const ServicesCardContainer: React.FC = () => {
  const cardsData = [    
    {
      imageSrc: "/img/flags/malaysia_round.png",
      title: "MALAYSIA",
      description: "Specialist Healthcare Providers",
      link: "",
    },
    {
      imageSrc: "/img/flags/singapore_round.png",
      title: "SINGAPORE",
      description: "Specialist Healthcare Providers",
      link: "",
    },
    {
      imageSrc: "/img/flags/south-korea_round.png",
      title: "SOUTH KOREA",
      description: "Specialist Healthcare Providers",
      link: "",
    },    
    {
      imageSrc: "/img/flags/thailand_round.png",
      title: "THAILAND",
      description: "Specialist Healthcare Providers",
      link: "",
    },    
  ];

  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = isMobile ? 1 : 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className={isMobile ? styles.mobileCarousel : styles.cardItems}>
        {currentCards.map((card, index) => (
          <TextImageCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>{`${currentPage + 1} / ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ServicesCardContainer;