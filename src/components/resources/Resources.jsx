import { resourceInfo } from './resource';
// import img2 from '../../assets/images/card-img/p-5.png';
// import img3 from '../../assets/images/card-img/p-6.png';
export default function Resources() {
  return (
    <div className="mt-[30px] md:mt-[40px] 2xl:mt-[80px] px-[32px] xl:px-[64px] 2xl:px-[154px] font-inter">
      {/* Text Title */}
      <div className="flex justify-between items-end">
        <h1 className="leading-tight font-extrabold text-[36px] 2xl:text-[56px] text-primary uppercase">
          Other Resources <br /> You’ll Like
        </h1>
        <button
          type="button"
          className="w-[200px] ] px-6 py-3 font-semibold text-[18px] bg-primary text-white rounded-3xl hover:bg-[#1d7241] transition-all duration-200"
        >
          View All
        </button>
      </div>

      {/*   Cards */}

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-[20px]">
        {resourceInfo.map((resource, idx) => (
          <div key={idx} className="p-5 border shadow-md rounded-2xl">
            <img
              src={resource.img}
              alt="card-img"
              className="w-full max-[328px] object-cover"
            />
            {/* content */}
            <div className="mt-5">
              <p className="text-sm  text-gray-700">{resource.date}</p>
              <h3 className="text-[22px] leading-tight 2xl:text-[28px] font-bold text-primary mt-4">
                {resource.title}
              </h3>
              <p className="mt-4 text-[18px] text-gray-700">
                {resource.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
