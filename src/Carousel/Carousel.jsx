import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Carousel.css';

const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const slides = [
    {
      title: 'Car 1',
      description: 'We Offering You the Latest Cars With Latest Models',
      url: 'https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-aventador-109-1625607587.jpg',
    },
    {
      title: 'Car 2',
      description: 'We Offering You the Cars with Modern Colors',
      url: 'https://www.arabianbusiness.com/cloud/2022/11/30/Lamborghini-Huracan-Sterrato.jpg',
    },
    {
      title: 'Car 3',
      description: 'We Offer You The Latest Cars With Modern Colors and Spoilers',
      url: 'https://cdn.zeebiz.com/sites/default/files/2022/08/26/197076-screenshot-2022-08-26-162741.jpg',
    },
  ];

  useEffect(() => {
    // Set the initial active slide index
    setActiveSlideIndex(0);
  }, []);

  return (
    <div className='carousel'>
      <div>
        <div className="carousel-content">
          <span>Discover Our Latest Models</span>
          <h1>HM Car & Cars</h1>
          <hr />
          {/* Conditionally render content based on the active slide index */}
          {activeSlideIndex === 0 && (
            <p>We Offer the Latest Cars With Latest Models</p>
          )}
          {activeSlideIndex === 1 && (
            <p>We Offer Cars with Modern Colors</p>
          )}
          {activeSlideIndex === 2 && (
            <p>We Offer the Latest Cars With Modern Colors and Spoilers</p>
          )}
          <a href="#" className='slider-btn'>Explore More Cars</a>
        </div>
      </div>

      <Swiper
        className='my-swiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={0}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={false} // Set loop to false
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, // Adjust delay based on your transition time
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={handleSlideChange}
        runCallbacksOnInit={true}
      >
        {slides.map((data, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: `url(${data.url})` }} className='my-swiper-slider'>
            <div className={`swiper-card ${index === activeSlideIndex ? 'active' : ''}`}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <a href={`${data.url}`} target="_blank" className='slider-btn'>Explore More Cars</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
