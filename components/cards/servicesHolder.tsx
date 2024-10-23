import React, { useState } from "react";
import TextImageCard from "./text_image_card";
import styles from "./serviceholder.module.css";

const ServicesCardContainer: React.FC = () => {
  const cardsData = [
    {
      imageSrc: "/img/hospital-1.jpg",
      title: "Silver Oaks Hospital",
      description: "12 Orchard Road, Orchard Heights, Singapore",
      link: "/link1",
    },
    {
      imageSrc: "/img/hospital-2.jpg",
      title: "Cedarwood General Hospital",
      description: "120 Jalan Tunku Abdul Rahman, Kuala Lumpur",
      link: "/link2",
    },
    {
      imageSrc: "/img/hospital-3.jpg",
      title: "Pine Ridge Medical Institute",
      description: "33 East Coast Parkway, Singapore",
      link: "/link3",
    },
    {
      imageSrc: "/img/hospital-4.jpg",
      title: "Blue Horizon Health Center",
      description: "75 Zhongxiao East Road, Taipei",
      link: "/link4",
    },
    {
      imageSrc: "/img/hospital-5.jpg",
      title: "Crystal Lake Hospital",
      description: "90 Jalan Sultan Ismail, Kuala Lumpur",
      link: "/link5",
    },
    {
      imageSrc: "/img/hospital-6.jpg",
      title: "Mountainview Care Center",
      description: "88 Silom Road, Silom Tower, Bangkok",
      link: "/link6",
    },
    {
      imageSrc: "/img/hospital-7.jpg",
      title: "Maple Leaf Medical Center",
      description: "58 Dongdaemun Design Plaza, Jung-gu, Seoul ",
      link: "/link7",
    },
    {
      imageSrc: "/img/hospital-8.jpg",
      title: "Lakeside Wellness Hospital",
      description: "30 Dotonbori, Namba, Osaka",
      link: "/link8",
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
      <div className={styles.cardItems}> {/* This div holds the cards */}
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

      {/* Pagination controls below the images */}
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
