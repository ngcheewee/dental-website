"use client"
import { testimonialsItems } from "@/data/data";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";


const Testimonials = () => {
  return (
    <div className="container">
        {/* Title */}
        <div className="max-w-2xl space-y-2">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">Hear from Our 1,000+ Happy Patients</h2> 
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur. Amet platea egestas aliquam habitant. Hac</p>   
        </div>
        {/* Wrapper */}
        <Swiper modules={[Navigation]} spaceBetween={20} className="mt-11" navigation={{prevEl:".prev-btn", nextEl:".next-btn"}} loop breakpoints={{ 768: { slidesPerView: 2 ,},  }}>
            {testimonialsItems.map((item) => ( 
                //card
                <SwiperSlide key={item.id} className="border border-primary-200 p-5 rounded-md flex flex-col sm:flex-row items-start gap-5">
                    {/* img */}
                    <div className="max-w-max shrink-0">
                        <Image src={item.img} alt={item.author} width={95} height={95} className="rounded-full ring-4 ring-primary-600 size-16" />
                    </div>
                    {/* content */}
                    <div className="space-y-4">
                        <p>{item.text}</p>
                        <p className="card-title">{item.author}</p>

                    </div>
                </SwiperSlide>
            ))}    
        </Swiper>
        {/* Navigation */}
        <div className="flex items-center justify-center mt-11 lg:mt-16 gap-2.5">
            <button className="size-10 bg-primary-500 hover:bg-primary-700 transition-colors text-white rounded-full flex items-center justify-center border-primary-800 border focus:bg-primary-700 prev-btn">
                <RiArrowLeftLine />
            </button>
            <button className="size-10 bg-primary-500 hover:bg-primary-700 transition-colors text-white rounded-full flex items-center justify-center border-primary-800 border focus:bg-primary-700 next-btn">
                <RiArrowRightLine />
            </button>
        </div>
    </div>
  )
}

export default Testimonials