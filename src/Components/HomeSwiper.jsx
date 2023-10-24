import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderImgs } from '../Data/SliderImg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

function HomeSwiper() {
	return (
		<>
			<Swiper
				slidesPerView={3}
				freeMode={true}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Autoplay]}
				className="mySwiper">
				{SliderImgs.map((element, index) => (
					<SwiperSlide className=" py-7 md:py-16 md:px-3" key={index}>
						<Link to={element.link}>
							<img className="max-w-full" src={element.image} alt={element.alt} />
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default HomeSwiper;
