// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { CategoryTitle, Container } from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperItem from '../SwiperItem';

export function CategorySlider({ content }) {
  const slides = content.data;

  return (
    <Container>
      <CategoryTitle>{content.categoryTitle}</CategoryTitle>

      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={28}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 4
          },
          2560: {
            slidesPerView: 5
          }
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <SwiperItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
