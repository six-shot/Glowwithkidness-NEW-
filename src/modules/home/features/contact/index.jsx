import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosContact } from "react-icons/io";
import Email from "../../components/modals/SucessfulEmail";

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
   setLoading(true); 

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
    <div className="relative w-full lg:h-[110vh] h-[150vh] ">
      <img
        className="absolute object-cover left-0 w-full h-full z-10 "
        src="/comb .jpeg"
      />
      <div className="absolute top-0 left-0 z-20 w-full">
        <div className="max-w-[1440px] mx-auto pt-[5%] pb-[5%] px-[5%]">
          <div className="grid lg:grid-cols-3 grid-cols-1 h-[600px]">
            <div className="col-span-1 w-full h-full lg:py-0 py-[10%] bg-primary flex flex-col justify-center items-center ">
              <h4 className="uppercase sm:text-[50px] text-[30px]">
                Our Timing
              </h4>
              <div className="flex flex-col ">
                <h4 className="uppercase text-center mt-7 text-sm font-medium">
                  monday
                </h4>
                <div className=" uppercase flex flex-col justify-center items-center mt-3 gap-2 text-center">
                 closed
                </div>
                <h4 className="uppercase text-center mt-7 text-sm font-medium">
                  tuesday - sunday
                </h4>
                <div className="flex flex-col justify-center items-center mt-3 gap-2 text-center">
                  <h4>08:00am - 08:00pm</h4>
                  
                </div>
              </div>
              <div className="flex gap-2 items-center mt-7 bg-white p-2">
                <div className="px-5 py-4 bg-primary">
                  <SlEarphonesAlt />
                </div>
                <h6 className="px-3 text-sm font-semibold">(469) 670-0124</h6>
              </div>
            </div>

            <div className="col-span-2 w-full h-full bg-white py-[5%] px-[5%]">
              <div className="flex items-center justify-center flex-col">
                <h5 className="tracking-[3px] font-medium">ANY QUERY</h5>

                <h4 className="sm:text-[40px] text-[30px] font-medium">
                  GET IN TOUCH
                </h4>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-[3%] flex gap-4 flex-col"
              >
                <div className="bg-[#f1cedd96] w-full h-[60px] flex items-center px-[5%]">
                  <IoIosContact className="text-[20px] " />
                  <div className="border-r-[2px] border-gray-400 h-[14px] px-1" />
                  <input
                    type="text"
                    name="user_name"
                    className="h-full w-full outline-none bg-transparent placeholder:text-gray-400 px-3 placeholder:text-sm"
                    placeholder="YOUR NAME *"
                  />
                </div>
                <div className="bg-[#f1cedd96] w-full h-[60px] flex items-center px-[5%]">
                  <IoIosContact className="text-[20px] " />
                  <div className="border-r-[2px] border-gray-400 h-[14px] px-1" />
                  <input
                    type="text"
                    name="user_email"
                    className="h-full w-full outline-none bg-transparent placeholder:text-gray-400 px-3 placeholder:text-sm"
                    placeholder="YOUR EMAIL *"
                  />
                </div>
                <div className="bg-[#f1cedd96] w-full h-[150px] flex items-center px-[5%] py-[2%]">
                  <textarea
                    name="message"
                    className="h-full w-full outline-none bg-transparent placeholder:text-gray-400 px-3 placeholder:text-sm"
                    placeholder="YOUR MESSAGE *"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full h-[60px] bg-primary font-medium ${
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
      </div>
      <div className="absolute inset-0 bg-primary lg:h-[110vh] h-[150vh] opacity-40 z-[10] "></div>
      <Email isOpen={isOpen} close={close} />
    </div>
  );
}
