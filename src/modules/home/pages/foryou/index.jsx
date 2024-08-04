import React from "react";
import NavFootLayout from "../../layout/NavFootLayout";
import { Link } from "react-router-dom";

export default function ForYou() {
  return (
    <div>
      <NavFootLayout>
        <div className="w-full pt-[14vh]  sm:pt-[19vh]">
          <img
            src="/about.jpg"
            className="w-full sm:h-[400px] h-[300px] object-right object-cover"
          />
          <div className="max-w-[1440px] mx-auto">
            <div className="px-[5%]">
              <h4 className="text-[30px] font-semibold  text-center mt-10 sm:mt-20">
                Because You're Special
              </h4>
              <ol className="list-decimal sm:text-lg font-medium flex gap-5 flex-col mt-14 px-[5%]">
                <li>
                  Free Wi-Fi, Netflix, and refreshments are available for your
                  entertainment.
                </li>
                <li>
                  The salon offers a Referral Plan whereby if you refer a
                  friend, you EACH get a 10% DISCOUNT on your next visit. Kindly
                  request a referral card(s) from the front desk.
                </li>
                <li>
                  Kindly bring along your loyalty card to be signed off after
                  each visit so you can earn your 10% and 20% DISCOUNT on your
                  5th and 10th appointment respectively. We appreciate your
                  loyalty and would like to “Thank you” with this Loyalty Plan.
                </li>
                <li>
                  We do offer a reminder service which will be sent to your
                  mobile phone and email a day before your appointment.
                </li>
                <li>
                  All appointments are to be made on our website as we do not
                  accept walk-ins.
                </li>
                <li>
                  For Emergency Services and Custom-Made Styles, kindly contact
                  us to discuss an appointment.
                </li>
              </ol>
              <Link to="/booking">    <div className="flex justify-center items-center w-full my-10">
                <button className=" mb-7 px-8 py-3 bg-primary mt-5 font-medium rounded-[50px]">
                  Book Now
                </button>
              </div></Link>
          
            </div>
          </div>
        </div>
      </NavFootLayout>
    </div>
  );
}
