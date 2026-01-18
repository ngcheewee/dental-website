import Image from "next/image";
import Link from "next/link";
import { valuesItems, teamCardItems } from "@/data/data";
import { RiInstagramLine, RiYoutubeFill } from "@remixicon/react";

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container space-y-16 lg:space-y-20" >
            {/* Title */}
            <div className="flex flex-wrap gap-8 justify-between items-end">
                <div className="max-w-2xl">
                    <h2 className="title">
                      Welcome to Dentora Your Trusted Partner in Dental Care
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra vulputate ac dictumst. Lacus vitae diam.
                    </p>
                </div>
                <div className="flex items-center gap-2.5 justify-end">
                    <span className="relative w-[31px] h-[48px] border border-primary-600 flex items-center justify-center rounded-4xl 
                    before:absolute before:top-2.5 before:left-1/2 before:bg-primary-600 before:w-[3px] before:h-2.5 before:-translate-x-1/2 
                    before:animate-bounce" />
                    <p>Scroll down</p>
                </div>
            </div>
            {/* Banner */}
            <div>
                <Image 
                  src={'/images/about-page-banner.png'} 
                  alt="about page banner" 
                  width={727} 
                  height={787} 
                  className="w-full h-auto" 
                />
            </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="subtittle">Our Story</p>
            <h2 className="title">
              We Started with One Simple Goal: Making Our Patients Smile
            </h2>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra vulputate ac dictumst. Lacus vitae diam.
            </p>
          </div>
          {/* images wrapper */}
          <div className="mt-16 lg:mt-20 flex items-baseline -space-x-20">
            <div className="relative -z-10">
              <Image 
                src={'/images/about-section-img-2.png'} 
                alt="about section image" 
                width={593} 
                height={518}  
                className="rounded-xl rotate-[8deg]"
              />
            </div>
            <div className="bg-primary-600 rounded-xl overflow-hidden">
              <Image 
                src={'/images/about-section-img-3.png'} 
                alt="about section image" 
                width={630} 
                height={564}  
                className="rounded-xl rotate-[9deg]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          {/* Title */}
          <div className="text-center max-w-xl mx-auto">
            <p className="subtitle">Values</p>
            <h2 className="title">
              The Core Principles That Drive Everything We Do
            </h2>
          </div>
          {/* Wrapper */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {valuesItems.map((item) => (
              <div key={item.id} className="border border-primary-200 p-6 rounded-lg flex items-start gap-3.5 bg-white">
                {/* Icon */}
                <span className="shrink-0 size-12 bg-primary-100 flex items-center justify-center rounded-md trct-primary-700">
                  <item.icon />
                </span>
                {/* Content */}
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}  
          </div>
          {/* Btn */}
          <Link href={'/services'} className="secondary-btn block mt-10 max-w-max mx-auto lg:mt-28">BROWSE SERVICES</Link>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
            {/* Title */}
            <div className="max-w-xl mx-auto text-center">
              <p className="subtitle">Our Team</p>
              <h2 className="title">
                Skilled Dentists Committed to Your Oral Health
              </h2>
            </div>

            {/* Wrapper */}
            <div className="mt-11 lg:mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamCardItems.map((item) => (
                <div key={item.id} className="rounded-lg overflow-hidden ">
                  {/* Image */ }
                  <div className="bg-primary-100">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      width={260} 
                      height={244} 
                      className="mx-auto"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-5 text-center space-y-1">
                    <h3 className="card-title">{item.name}</h3>
                    <p>{item.text}</p>
                    <div className="flex items-center justify-center gap-2.5">
                      <a href="#" className="size-9 bg-primary-500 text-white flex items-center justify-center rounded-full hover:bg-primary-700 transition-colors focus:bg-primary-700">
                        <RiInstagramLine />
                      </a>
                      <a href="#" className="size-9 bg-primary-500 text-white flex items-center justify-center rounded-full hover:bg-primary-700 transition-colors focus:bg-primary-700">
                        <RiYoutubeFill />
                      </a>                   
                    </div>
                  </div>  
                </div>
              ))}
            </div>
        </div>
      </section>
    </>
  )
}
