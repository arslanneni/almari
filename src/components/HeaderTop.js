import React from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
            <a href="https://www.facebook.com/hafsa.bloch111113?mibextid=hIlR13" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
            </div>
            
            <div className="header_top__icon_wrapper" >
            <a href="https://www.instagram.com/umm_e_hafsa___?igshid=YzVkODRmOTdmMw==" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </div>
          
          </div>

          {/* <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div> */}

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="PKR">PKR</option>
              <option value="USD $">USD $</option>
              
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
