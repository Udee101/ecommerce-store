import { img1, img2, img4 } from "../assets"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'

const Banner = () => {

  const images = [img1, img2, img4]

  return (
    <section className='h-72 md:h-[500px] pb-8'>
      <Swiper 
        pagination={{clickable: true}}
        autoplay={{delay: 3000}} 
        modules={[Pagination, Autoplay]} 
        className='w-full h-full rounded-md'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" className="w-full h-full object-cover block" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Banner
