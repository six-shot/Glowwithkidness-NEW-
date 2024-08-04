import React from "react";
import NavFootLayout from "../../layout/NavFootLayout";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <NavFootLayout>
        <div className="w-full pt-[14vh]  sm:pt-[19vh]">
          <img
            src="/about.jpg"
            className="w-full sm:h-[400px] h-[300px] object-right object-cover"
          />
          <div className="max-w-[1440px] mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center sm:gap-20 px-[5%] py-[5%]">
              <div className="col-span-1">
                <img
                  src="/about-us.jpg"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="col-span-1 sm:mt-0 mt-8">
                <h4 className="text-[30px] font-semibold mb-5">Our Mission</h4>
                <div className="text-lg">
                  <p>
                    GlowwithKindness Salon is a team-oriented salon. Our team of
                    licensed professionals are constantly updating their skills
                    to ensure that you always receive the best possible service
                    by using state-of-art practices and superior quality
                    products!
                  </p>
                  <p className="my-8">
                    We keep up with the latest trends in our industry by
                    continually attending hair and makeup shows throughout the
                    year. We are confident that you will be highly impressed
                    with our services and our commitment to customer
                    satisfaction. We pay close attention to the little details
                    of every service, and we want to be known for being the
                    ultimate professionals.
                  </p>
                  <p>
                    Come experience a family atmosphere where you come as guests
                    and leave as friends thereby establishing a long-lasting
                    relationship of trust and commitment…
                  </p>
                </div>
                <Link to="/booking">
                  <button className="px-8 py-3 bg-primary mt-5 font-medium rounded-[50px]">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </NavFootLayout>
    </div>
  );
}
