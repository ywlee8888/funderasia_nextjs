import React from 'react';
import Slider from 'react-slick';
import TextImageCard from '../cards/text_image_card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

interface CarouselProps {
  cards: {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const PartnerCarousel: React.FC<CarouselProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <TextImageCard 
          key={index} 
          imageSrc={card.imageSrc} 
          title={card.title} 
          description={card.description} 
          link={card.link} 
        />
      ))}
    </Slider>
  );
};

export default PartnerCarousel;
