import React from "react";
import NavFootLayout from "../../layout/NavFootLayout";
import { Link } from "react-router-dom";

export default function HairGuide() {
  return (
    <div>
      <NavFootLayout>
        <div className="w-full pt-[14vh]  sm:pt-[19vh]">
          <img
            src="/about.jpg"
            className="w-full lg:h-[400px] h-[300px] object-right object-cover"
          />
          <div className="max-w-[1440px] mx-auto">
            <div className="px-[5%]">
              <h4 className="text-[30px] font-semibold  text-center mt-10 sm:mt-20 ">
                Hair Guide: (How to Protect Your Braids)
              </h4>
              <ol className="list-decimal lg:text-lg font-medium grid sm:grid-cols-2 grid-cols-1 gap-20 sm:mt-14 mt-10 px-[5%]">
                <div className="col-span-1 ">
                  <div className="flex flex-col gap-8">
                    <li>
                      GlowwithKindness advises against keeping braids on for
                      more than Four (4) to Eight (8) weeks. Yes, a braided
                      hairstyle can be worn for a very long time. However, you
                      shouldn&apos;t leave them on for too long. Every Three (3) to
                      Five (5) days, use oil sheen spray and mousse. This gives
                      your hair a pleasant smell and prevents your roots from
                      drying out.
                    </li>
                    <li>
                      Your hair will be more prone to breakage, knots, and
                      tangles the longer you leave your braids in.
                    </li>
                    <li>
                      Although braids are protective styles, they should not be
                      made repeatedly because your hair also needs a break.
                    </li>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex flex-col gap-8">
                    <li>
                      You might need to retouch your edges after Three (3) weeks
                      if you intend to wear your braids for Eight (8) weeks.
                      Before arriving to replace the braids, properly detangle,
                      shampoo, and condition your hair.
                    </li>
                    <li>
                      When you go to bed, cover your braids with a silk or satin
                      hair bonnet to prevent friction with your bedding. This
                      will keep the hair from fraying or even breaking,
                      especially around the edges.
                    </li>
                    <li>
                      For individual braids, wearing a ponytail at the same spot
                      each day might lead to hair breakage; alternating the spot
                      where your ponytail sits will help prevent breakages
                    </li>
                  </div>
                </div>
              </ol>
              <Link to="/booking">
                <div className="flex justify-center items-center w-full my-10">
                  <button className=" mb-7 px-8 py-3 bg-primary mt-5 font-medium rounded-[50px]">
                    Book Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </NavFootLayout>
    </div>
  );
}
