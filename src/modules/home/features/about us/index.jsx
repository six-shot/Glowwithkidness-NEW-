import React from 'react'

export default function About() {
  return (
    <div className="px-[5%] py-[5%]">
      <div className="grid sm:grid-cols-3 grid-cols-1">
        <div className="sm:col-span-2">
          <h4 className="text-black tracking-[6px] sm:text-[40px] text-[24px] font-bold uppercase leading-[35px] sm:leading-[50px]">
            We're thrilled you chose us for your beauty services and hope to see
            you regularly.
          </h4>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-20 mt-[5%]">
        <div className="sm:col-span-2 w-full ">
          <img className="w-full h-[1000px] object-cover" src="home.jpg" />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col">
            <img className="w-full h-[400px] object-cover" src="6b.jpg" />
            <div>
              <p className="my-[5%] text-sm font-semibold">
                Welcome to GlowwithKindness Salon. We are thrilled that you have
                chosen us for your beauty services, and we hope you become one
                of our valued regular clients over your next several
                appointments.
              </p>
              <p className="font-semibold text-sm">
                We offer hair styling, makeup, and more. Our team of trained,
                qualified, and licensed professionals pride ourselves on our
                ability to provide a variety of the highest quality services
                possible that are designed to create a look that’s perfect for
                you, make you look and feel your best at competitive prices
                while maintaining the highest standard of hygiene and
                cleanliness within our facility.
              </p>
              <button className="mt-6 py-2.5 px-6 rounded-[50px] border border-black">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
