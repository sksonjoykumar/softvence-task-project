import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FaLocationDot } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { IoIosSquareOutline } from 'react-icons/io';
import { IoBedOutline } from 'react-icons/io5';
import { MdDoubleArrow, MdGarage, MdOutlineBedroomParent } from 'react-icons/md';
import { products } from './products';

export default function PastProducts() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className=" font-inter mt-20">
      {/* Title */}
      <div>
        <h1 className="text-[40px] xl:text-[56px] font-bold text-white uppercase">
          Past Projects
        </h1>
        <p className=" text-[24px] lg:text-[32px] text-white">
          A Proven Track Record Funding Projects Like These
        </p>
      </div>

      <div className="mt-10">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 2s ease-in-out"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className=" bg-white  mx-4 rounded-2xl shadow-lg  "
            >
              <img
                src={product.image}
                alt="User"
                className="w-full h-full rounded-t-2xl"
              />

              {/* card content */}
              <div className="p-5">
                <div className="text-center">
                  <p className="text-[22] font-semibold text-primary ">
                    {product.title}
                  </p>
                  <div className="flex items-center gap-2 justify-center mt-1">
                    <span>
                      <FaLocationDot className="text-primary" />
                    </span>
                    <span className="text-sm ">{product.location}</span>
                  </div>
                </div>

                <div className="mt-4 border-t flex  justify-between border-b pb-4">
                  <div className="mt-2">
                    <div className="flex items-start gap-3">
                      <IoIosSquareOutline size={22} className="text-primary" />
                      <p className="text-sm text-gray-600">
                        {product.squareTitle}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <IoBedOutline size={22} className="text-primary" />
                      <p className="text-sm text-gray-600">
                        {product.bedTitle}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-2">
                      <div className="flex items-center gap-3">
                        <MdGarage size={22} className="text-primary" />
                        <p className="text-sm text-gray-600">
                          {product.garageTitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdOutlineBedroomParent
                          size={22}
                          className="text-primary"
                        />
                        <p className="text-sm text-gray-600">
                          {product.bedRoomTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ======= */}
                <div className=" flex  justify-between ">
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      <GoDotFill size={17} className="text-primary" />
                      <p className="text-sm text-gray-600">{product.amount}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <GoDotFill size={17} className="text-primary" />
                      <p className="text-sm text-gray-600">{product.rate}</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <GoDotFill size={17} className="text-primary" />
                        <p className="text-sm text-gray-600">{product.ltv}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <GoDotFill size={17} className="text-primary" />
                        <p className="text-sm text-gray-600">{product.term}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom */}
              <div className=" h-10 w-full bg-[#114a28] text-white flex items-center justify-center rounded-b-2xl text-base font-semibold">
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-12">
        <button className="w-[280px] 2xl:w-[380px] 2xl:h-[81px] relative inline-flex items-center uppercase h-11 pl-5 pr-14 bg-white text-primary font-semibold text-[17px] 2xl:text-[24px] rounded-l-md overflow-hidden group  transition-all duration-200 hover:bg-slate-100 ">
          Get Terms For Your Project
          <span className="p-2 2xl:p-4  absolute right-4 2xl:top-0 my-1 2xl:h-[72px] 2xl:w-14 bg-primary text-primary flex items-center justify-center skew-x-[-20deg] border-l border-primary ">
            <span className="skew-x-[20deg] text-xl font-bold">
              {' '}
              <MdDoubleArrow
                color="#ffffff"
                className="text-[24px] 2xl:text-[35px]"
              />
            </span>
          </span>
          <span className="p-4  absolute -right-[2.79rem]  top-0 h-full w-14 bg-[#165831]  flex items-center justify-center skew-x-[-20deg] bg-opacity-100"></span>
        </button>
      </div>
    </div>
  );
}
