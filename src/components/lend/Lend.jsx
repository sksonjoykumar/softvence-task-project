import { MdDoubleArrow } from 'react-icons/md';
import cardImg1 from '../../assets/images/cards-img/card-1.png';
import cardImg2 from '../../assets/images/cards-img/card-2.png';
import mapImg from '../../assets/images/lend/lend.png';
export default function Lend() {
  return (
    <div className="min-h-[911px] bg-gradient-to-t from-green-700 to-primary">
      <div className="px-[32px] xl:px-[64px] 2xl:px-[154px] font-inter pt-[35px] md:pt-[60px] xl:pt-[120px] pb-10">
        {/* Text Title */}
        <div className="">
          <h1 className="uppercase text-[32px] lg:text-[40px] 2xl:text-[60px] font-bold text-white">
            Where We Lend
          </h1>
          <p className="text-base text-white">
            Ridge Street provides hard money loans to real estate investors in
            35 states.
          </p>
          <h4 className="text-base text-white mt-1">
            We focus our efforts in{' '}
            <strong className="text-lg font-bold">Texas</strong> and{' '}
            <strong className="text-lg font-bold">Florida</strong>.
          </h4>
        </div>

        {/* Image map */}
        <div className="py-[40px]">
          <img
            src={mapImg}
            alt="Map"
            className="w-full max-h-[376px] object-contain"
          />
        </div>

        {/* Two cards */}
        <div className="flex flex-wrap justify-evenly gap-10 lg:gap-0">
          <div className="relative">
            <img
              src={cardImg1}
              alt="Card Img"
              className="w-auto xl:w-[440px] xl:h-[560px] object-cover "
            />
            <div className="absolute inset-0 bg-primary opacity-55 pointer-events-none rounded-tl-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-white font-extrabold text-[40px] lg:text-[56px]">
                Texas
              </h1>
              <p className="text-white text-[24px]">
                Hard Money Loans | DSCR Loans
              </p>
              <button
                type="button"
                className="w-[220px] md:w-[230px] border-2 border-gray-300 rounded-3xl py-2 mt-5 uppercase text-base text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold"
              >
                View All Locations
              </button>
            </div>
          </div>

          {/* Second image with overlay */}
          <div className="relative">
            <img src={cardImg2} alt="Card Img 2" className="object-cover" />

            <div className="absolute inset-0 bg-primary opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-white font-extrabold text-[40px] lg:text-[56px] ">
                Texas
              </h1>
              <p className="text-white text-[24px]">
                Hard Money Loans | DSCR Loans
              </p>
              <button
                className="w-[220px] md:w-[230px] border-2 border-gray-300 rounded-3xl py-2 mt-5 uppercase text-base text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold"
                type="button"
              >
                View All Locations
              </button>
            </div>
          </div>
        </div>

        {/* Button */}

        <div className="flex justify-center items-center mt-12">
          <button className="w-[280px] 2xl:w-[380px] 2xl:h-[81px] relative inline-flex items-center uppercase h-11 pl-5 pr-14 bg-white text-primary font-semibold text-[17px] 2xl:text-[24px] rounded-l-md overflow-hidden group  transition-all duration-200 hover:bg-slate-100 ">
            View All Locations
            <span className="p-2 2xl:p-4  absolute right-4 2xl:top-0 my-1 2xl:h-[72px] 2xl:w-14 bg-primary text-primary flex items-center justify-center skew-x-[-20deg] border-l border-primary ">
              <span className="skew-x-[20deg] text-xl font-bold">
                {' '}
                <MdDoubleArrow
                  color="#ffffff"
                  className="text-[24px] 2xl:text-[35px]"
                />
              </span>
            </span>
            <span className="p-4  absolute -right-[2.79rem]  top-0 h-full w-14 bg-[#157E3C]  flex items-center justify-center skew-x-[-20deg] bg-opacity-100"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
