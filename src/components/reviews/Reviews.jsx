import { MdDoubleArrow } from 'react-icons/md';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clients } from './clients';
import PastProducts from '../past-projects/PastProducts';
export default function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className=" ">
      <div className=" min-h-[440px] bg-white ">
        <div className="px-[32px] xl:px-[64px] 2xl:px-[154px] font-inter mt-[80px] mb-64">
          <h1 className="text-center uppercase text-[32px] lg:text-[40px] 2xl:text-[56px] font-bold text-primary">
            Ridge Street Client Reviews
          </h1>
        </div>
        <div
          className=" bg-primary py-20 px-[32px] xl:px-[64px] 2xl:px-[154px] "
          style={{ overflow: 'visible' }}
        >
        {/* Carousel */}
          <div className="-mt-72">
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
              {clients.map((client, index) => (
                <div
                  key={index}
                  className=" bg-white border  p-4 mx-3 rounded-2xl shadow-lg text-center "
                >
                  <div className="flex justify-center">
                    <img
                      src={client.userIcon}
                      alt="User"
                      className="w-24 h-24 rounded-full   border-4 border-white shadow-md"
                    />
                  </div>

                  <p className="text-[24px] font-semibold text-primary ">
                    {client.name}
                  </p>
                  <p className="text-[18px] text-primary">{client.title}</p>
                  <p className="text-sm text-gray-700 mt-2 text-ellipsis">
                    {client.description}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Button */}

          <div className="flex justify-center items-center mt-12">
            <button className="w-[280px] 2xl:w-[380px] 2xl:h-[81px] relative inline-flex items-center uppercase h-11 pl-5 pr-14 bg-white text-primary font-semibold text-[17px] 2xl:text-[24px] rounded-l-md overflow-hidden group  transition-all duration-200 hover:bg-slate-100 ">
              Get Approved Online
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
          {/* Past Products Components */}
          <PastProducts/>
        </div>
      </div>
    </div>
  );
}
