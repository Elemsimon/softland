import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import gallery1 from '../assets/img/app-gallery/app-gallery-1.png';
import gallery2 from '../assets/img/app-gallery/app-gallery-2.png';
import gallery3 from '../assets/img/app-gallery/app-gallery-3.png';
import gallery4 from '../assets/img/app-gallery/app-gallery-4.png';
import gallery5 from '../assets/img/app-gallery/app-gallery-5.png';
import gallery6 from '../assets/img/app-gallery/app-gallery-6.png';
import gallery7 from '../assets/img/app-gallery/app-gallery-7.png';
import gallery8 from '../assets/img/app-gallery/app-gallery-8.png';
import gallery9 from '../assets/img/app-gallery/app-gallery-9.png';
import gallery10 from '../assets/img/app-gallery/app-gallery-10.png';
import gallery11 from '../assets/img/app-gallery/app-gallery-11.png';
import gallery12 from '../assets/img/app-gallery/app-gallery-12.png';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}
          <Swiper
            spaceBetween={30} // Space between slides
            slidesPerView={7} // Number of slides visible
            pagination={{ clickable: true }} // Pagination dots
            modules={[Pagination, Autoplay]}
            loop={true} // Infinite loop
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay slides
          >
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" href={gallery1}><img src={gallery1} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" href={gallery2}><img src={gallery2} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" href={gallery3}><img src={gallery3} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery4}><img src={gallery4} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery5}><img src={gallery5} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery6}><img src={gallery6} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery7}><img src={gallery7} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery8}><img src={gallery8} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery9}><img src={gallery9} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery10}><img src={gallery10} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery11}><img src={gallery11} className="img-fluid" alt /></a></div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery-full" href={gallery12}><img src={gallery12} className="img-fluid" alt /></a></div>
            </SwiperSlide> 
          </Swiper>
    </section>

  )
}

export default Gallery