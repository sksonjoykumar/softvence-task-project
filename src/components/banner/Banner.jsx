import { MdDoubleArrow } from 'react-icons/md';
import houseImage from '../../assets/images/banner/banner1.png';
import subtractImage from '../../assets/images/banner/subtract2.png';

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden font-inter">
      <div
        className="relative h-screen 2xl:h-[1000px] w-full bg-cover bg-no-repeat bg-contains"
        style={{
          backgroundImage: `url('${houseImage}')`,
        }}
      >
        <div className="absolute top-0 left-0 w-full  h-full">
          <img
            src={subtractImage}
            alt="House Overlay"
            className="object-cover w-full h-full object-right"
          />
        </div>

        {/* This div creates the white fade effect on the left side */}
        <div className="px-[32px] xl:px-[64px] 2xl:px-[154px] ">
          <div className="absolute top-1/2   -translate-y-1/2 ">
            {/* 2xl:w-[700px] 2xl:h-[403px] */}
            <div className="">
              <h1 className="  text-[32px] lg:text-[40px] 2xl:text-[60px] font-bold text-primary uppercase ">
                Florida and Texas <br /> Hard Money Lenders
              </h1>

              <p className="font-semibold text-[24px] xl:text-[32px] text-txtColor">
                Fast Closing Fix and Flip and Rental Loans <br />
                For Your Investment Properties.
              </p>
            

              <button className="mt-[30px] xl:mt-[60px]  w-[290px] md:w-[310px] 2xl:w-[417px]  2xl:h-[81px] relative inline-flex items-center h-11 pl-6 pr-14 bg-primary text-white font-semibold text-[17px] 2xl:text-[24px] rounded-l-md overflow-hidden group hover:bg-[#1d7241] transition-all duration-200">
                GET APPROVED ONLINE
                <span className="p-2 2xl:p-4  absolute right-4 2xl:top-0 my-1 2xl:h-[72px] 2xl:w-14 bg-white text-primary flex items-center justify-center skew-x-[-20deg] border-l border-primary ">
                  <span className="skew-x-[20deg] text-xl font-bold">
                    {' '}
                    <MdDoubleArrow
                      color="#165831"
                      className="text-[24px] 2xl:text-[35px]"
                    />
                  </span>
                </span>
                <span className="p-4  absolute -right-[2.79rem]  top-0 h-full w-14 bg-[#eeeef4e7] md:bg-[#eeeef4]  flex items-center justify-center skew-x-[-20deg] bg-opacity-100"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
