import React, { useRef, useState } from "react";
import NavFootLayout from "../../layout/NavFootLayout";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Email from "../../components/modals/SucessfulEmail";
import MapComponent from "../../features/map/index"
export default function Contact() {

  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_id = process.env.REACT_APP_PUBLIC_ID;
  
    let [isOpen, setIsOpen] = useState(false);
    let [loading, setLoading] = useState(false);
    function open() {
      setIsOpen(true);
    }

    function close() {
      setIsOpen(false);
    }
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true); // Set loading to true

      emailjs
        .sendForm(service_id, template_id, form.current, public_id)
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            open();
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setLoading(false);
        });
    };
  return (
    <div>
      <NavFootLayout>
        <div className="w-full pt-[14vh]  sm:pt-[19vh]">
          <img
            src="/about.jpg"
            className="w-full sm:h-[400px] h-[300px] object-right object-cover"
          />
          <div className="max-w-[1440px] mx-auto">
            <div className="grid sm:grid-cols-3 grid-cols-1   px-[5%] my-[6%] ">
              <div className="sm:col-span-2">
                <h4 className="text-[30px] font-semibold mb-5">Contact Us</h4>
                <div className="grid sm:grid-cols-2 grid-cols-1 w-full">
                  <div className="col-span-1 w-full">
                    <div className="flex flex-col sm:gap-6 gap-4 sm:mt-5">
                      <div className="flex items-center gap-2">
                        <FiPhone className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          (469) 670-0124
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdOutlineLocationOn className="text-[26px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          3702 Frankford Rd, Dallas TX, 75287
                        </h6>
                      </div>

                      <div className="flex items-center gap-2">
                        <MdOutlineEmail className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          inguiry@glowwithkidness.com
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex flex-col gap-6 mt-5">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          Tue - Sun: 8am - 8pm
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          Mon: CLOSED
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:mt-0 mt-5 px-[5%] ">
              <div className="grid sm:grid-cols-2 grid-cols-1">
                <div className="col-span-1">
                  <MapComponent />
                </div>
                <div>
                  <h4 className="text-[30px] font-semibold mb-5">
                    Send Us A Message
                  </h4>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4 mb-5"
                  >
                    <div className="w-full h-[50px] bg-[#F7F7F7] rounded-[10px]">
                      <input
                        type="text"
                        name="user_name"
                        className="w-full h-full bg-transparent outline-none px-5"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="w-full h-[50px] bg-[#F7F7F7] rounded-[10px]">
                      <input
                        type="text"
                        name="user_email"
                        className="w-full h-full bg-transparent outline-none px-5"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="w-full h-[200px] bg-[#F7F7F7] rounded-[10px]">
                      <textarea
                        name="message"
                        type="text"
                        className="w-full h-full bg-transparent outline-none p-5"
                        placeholder="Your Message"
                      />
                    </div>
                    <button
                      type="submit"
                      className={`w-full h-[50px] rounded-[50px] bg-primary font-medium ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`} // Disable the button while loading
                      disabled={loading} // Disable button if loading
                    >
                      {loading ? "Sending..." : "SEND MESSAGE"}{" "}
                      {/* Show loading text */}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <Email isOpen={isOpen} close={close} />
          </div>
        </div>
      </NavFootLayout>
    </div>
  );
}
