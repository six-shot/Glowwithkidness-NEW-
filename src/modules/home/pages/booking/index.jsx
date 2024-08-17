import React from "react";
import NavFootLayout from "../../layout/NavFootLayout";
import Book from "../../features/book";
import Navbar from "../../features/navbar";

export default function Booking() {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-[1440px] mx-auto pt-[30vh] overflow-hidden ">
        <div className="px-[5%]">
          <h4 className="text-[30px] font-
          semibold text-center">Book An Appointment </h4>
          <Book />
        </div>
      </div>
    </div>
  );
}
