import React from "react";
import NavFootLayout from "../../layout/NavFootLayout";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
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
              <h4 className="text-[30px] font-semibold  text-center mt-10 sm:mt-20 ">
                Terms and Conditions
              </h4>
              <ol className="list-decimal sm:text-lg font-medium flex flex-col gap-20 sm:mt-14 mt-10 px-[5%]">
                <div>
                  <div className="flex flex-col gap-8">
                    <li>
                      Your appointment will be{" "}
                      <span className="font-bold">AUTOMATICALLY CANCELED</span>{" "}
                      after <span className="font-bold">FIFTEEN (15)</span>{" "}
                      <span className="font-bold">MINUTES</span> of non-arrival.
                      You are allowed <span className="font-bold">ONE (1)</span>{" "}
                      rescheduled appointment with your non-refundable deposit.
                      You <span className="font-bold">MUST</span> call in to{" "}
                      <span className="font-bold">RESCHEDULE</span> a new
                      appointment <span className="font-bold">BEFORE</span> or{" "}
                      <span className="font-bold">BY</span> 6:00 PM (CENTRAL
                      TIME) the{" "}
                      <span className="font-bold">NEXT BUSINESS DAY</span>; if
                      not, your non-refundable deposit will be{" "}
                      <span className="font-bold">FORFEITED</span>. This also
                      applies to{" "}
                      <span className="font-bold">NO CALL, NO SHOW</span>{" "}
                      clients.
                    </li>
                    <li>
                      Kindly make sure your hair is freshly shampooed, free of
                      any hair product, and fully blown out straight with a blow
                      dryer that has a comb attachment. Failure to do these
                      attracts an extra <span className="font-bold">$20</span>{" "}
                      fee.
                    </li>
                    <li>
                      <span className="font-bold">
                        Mixed color tone (ombré)
                      </span>{" "}
                      attracts an extra <span className="font-bold">$15</span>{" "}
                      fee.
                    </li>
                    <li>
                      Any major style change after your appointment is booked
                      will require you to remit the original balance of the new
                      style.
                    </li>
                    <li>
                      For guests coming to do{" "}
                      <span className="font-bold">TOUCH UP</span>, kindly{" "}
                      <span className="font-bold">TAKE DOWN</span> up to{" "}
                      <span className="font-bold">THIRTY (30)</span> braids.
                      Properly detangle, shampoo, and condition your hair before
                      arriving to replace the braids to{" "}
                      <span className="font-bold">AVOID EXTRA FEES</span>.
                    </li>
                    <li>
                      Kindly arrive <span className="font-bold">ALONE</span> for
                      your appointment. <span className="font-bold">NO</span>{" "}
                      extra guests are permitted.
                    </li>
                    <li>
                      If you are to provide braiding hair (hair extension), it{" "}
                      <span className="font-bold">MUST</span> be Four (4) bags
                      of X-Pression{" "}
                      <span className="font-bold">PRE-STRETCHED</span>. Kindly
                      allow <span className="font-bold">THIRTY (30)</span>{" "}
                      <span className="font-bold">MINUTES</span> for the
                      braiding hair to be prepped upon arrival.
                    </li>
                    <li>
                      Your hair <span className="font-bold">MUST</span> be at{" "}
                      <span className="font-bold">LEAST</span> Four (4) inches
                      in length <span className="font-bold">ALL AROUND</span>.{" "}
                      <span className="font-bold">ONLY</span>{" "}
                      <span className="font-bold">BOX BRAIDS</span> style can
                      still be done with at least{" "}
                      <span className="font-bold">Two (2)</span> inch length of
                      hair. Kindly contact us to schedule a free consultation if
                      you question your hair length, suffer from hair loss or
                      alopecia <span className="font-bold">BEFORE</span> booking
                      your appointment.
                    </li>
                    <li>
                      If you have any complaint about your hair, you have{" "}
                      <span className="font-bold">Twenty-Four (24)</span>{" "}
                      <span className="font-bold">HOURS</span> from the time
                      your hair was done to make the complaint. You{" "}
                      <span className="font-bold">MUST</span> return to the
                      salon with your hair{" "}
                      <span className="font-bold">NOT</span> taken down.
                    </li>
                    <li>
                      Services are <span className="font-bold">ONLY</span>{" "}
                      available to clients over{" "}
                      <span className="font-bold">TWELVE (12)</span> years (
                      <span className="font-bold">Age 12-17</span>{" "}
                      <span className="font-bold">MUST</span> be accompanied by
                      their <span className="font-bold">PARENT</span> or a{" "}
                      <span className="font-bold">GUARDIAN</span>).
                    </li>
                  </div>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </NavFootLayout>
    </div>
  );
}
