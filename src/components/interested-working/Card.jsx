/* eslint-disable react/prop-types */
import { GoArrowUpRight } from 'react-icons/go';

export default function Card({ icon, title, subtitle }) {
  return (
    <div className="relative bg-white rounded-lg shadow-md  border border-gray-200  pb-6">
      <div />
      {/* Icon */}
      <div className="flex justify-center mt-6 mb-4">
        <div className={` bg-[#e3faed7d]   rounded-sm p-4 `}>
          <img
            src={icon}
            alt="Loan Icon"
            className="w-14 h-14 object-contain"
          />
        </div>
      </div>
      {/* Title + Subtitle */}
      <div className="px-6 text-center">
        <h3 className="text-[24px] font-semibold ">{title}</h3>
        <p className="text-sm text-center">{subtitle}</p>

        <div className="flex items-center justify-center mt-4">
          <button
            type="button"
            className="flex items-center gap-2 border text-sm border-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-md px-3 py-1.5
          "
          >
            Find a home{' '}
            <GoArrowUpRight
              size={19}
              className="text-primary hover:text-white"
            />
          </button>
        </div>
      </div>

      <div />
    </div>
  );
}
