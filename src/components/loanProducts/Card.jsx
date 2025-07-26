/* eslint-disable react/prop-types */
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdDoubleArrow } from 'react-icons/md';
import { SlExclamation } from 'react-icons/sl';

const LoanCard = ({ icon, title, subtitle, points, learnMoreLink = '#',color }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm border border-gray-200 text-primary font-inter hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out pb-6">
      <div />
      {/* Icon */}
      <div className="flex justify-center mt-6 mb-4">
        <div className={`border  rounded-xl p-4 ${color}`}>
          <img
            src={icon}
            alt="Loan Icon"
            className="w-14 h-14 object-contain border border-gray-300 "
          />
        </div>
      </div>
      {/* Title + Subtitle */}
      <div className="px-6 text-center">
        <h3 className="text-xl font-bold ">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-4">{subtitle}</p>

        {/* Bullet Points */}
        <ul className="space-y-2 text-base  text-left mb-4">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <IoMdCheckmarkCircleOutline className=" text-[20px] mt-[2px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Learn More */}
        <a
          href={learnMoreLink}
          className="flex items-center gap-1 text-base  underline mb-6"
        >
          <SlExclamation />
          Learn More
        </a>

        <button className=" w-auto sm:w-[290px] relative inline-flex items-center h-11 pl-6  bg-primary text-white hover:text-primary font-semibold text-[17px] rounded-md overflow-hidden group hover:bg-[#FFFFFF] transition-all duration-200">
          GET APPROVED ONLINE <MdDoubleArrow className="text-[25px]" />
          <span className="p-2  absolute right-0 -bottom-1 my-1 w-1 h-full bg-white text-primary flex items-center justify-center skew-x-[-20deg]  "></span>
          <span className="p-4  absolute -right-[1.79rem]  top-0 h-full w-14 bg-[#FFFFFF]   flex items-center justify-center skew-x-[-20deg] bg-opacity-100"></span>
        </button>
      </div>

      <div />
    </div>
  );
};

export default LoanCard;
