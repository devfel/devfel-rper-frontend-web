import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { ReactNode, useRef } from 'react'
import Slider from 'react-slick'
import {
  CarouselContainer,
  CarouselControls,
  CarouselSlides,
  CarouselIndicators,
} from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    centerMode: true,
    centerPadding: '257px',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots: ReactNode) => (
      <CarouselIndicators>{dots}</CarouselIndicators>
    ),
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          centerPadding: '129px',
        },
      },
      {
        breakpoint: 1023,
        settings: {
          centerPadding: '54px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
        },
      },
    ],
  }

  return (
    <>
      <CarouselContainer>
        <h3>Pictures & Photos</h3>
        <div>
          <CarouselControls>
            <button onClick={() => sliderRef.current?.slickPrev()}>
              <FiChevronLeft />
            </button>
            <button onClick={() => sliderRef.current?.slickNext()}>
              <FiChevronRight />
            </button>
          </CarouselControls>
          <CarouselSlides>
            <Slider ref={sliderRef} {...settings}>
              <div>
                <img
                  src="https://api.lorem.space/image/car?w=314&h=442"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://api.lorem.space/image/car?w=314&h=442"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://api.lorem.space/image/car?w=314&h=442"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://api.lorem.space/image/car?w=314&h=442"
                  alt=""
                />
              </div>
            </Slider>
          </CarouselSlides>
        </div>
      </CarouselContainer>
    </>
  )
}

export default Carousel
