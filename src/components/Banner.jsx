import { img1, img2, img4 } from "../assets"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'
import { Link } from "react-router-dom"

const SalesAd = () => {
  return (
    <div className="bg-grey-100 w-64 h-44 flex flex-col justify-center items-center md:h-48 md:w-[35%] rounded-md p-4">
      <p className="text-5xl text-center text-secondary uppercase md:text-6xl lg:text-7xl">
        <strong>Sale</strong>
      </p>
      <p className="uppercase font-bold md:text-lg lg:text-xl">Up to 50% off</p>
      <Link to="/products" className="btn btn_primary mt-2">Shop Now</Link>
    </div>
  )
}

const Banner = () => {

  const images = [img1, img2, img4]

  return (
    <section className='h-72 md:h-[500px] pb-8'>
      <Swiper 
        pagination={{clickable: true}}
        autoplay={{delay: 3000}} 
        modules={[Pagination, Autoplay]} 
        className='w-full h-full relative rounded-md'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" className="w-full h-full object-cover block" />
          </SwiperSlide>
        ))}

        <div className="absolute w-full h-full top-0 flex items-center z-[1] justify-center">
          <SalesAd />
        </div>
      </Swiper>
    </section>
  )
}

export default Banner
