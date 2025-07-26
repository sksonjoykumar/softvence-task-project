import icon2 from '../../assets/images/icons/icon-1.png';
import icon1 from '../../assets/images/icons/icon-2.png';
import icon3 from '../../assets/images/icons/icon-3.png';
import Card from './Card';

export default function Working() {
  return (
    <div className="mt-[30px] md:mt-[40px] 2xl:mt-[80px] px-[32px] xl:px-[64px] 2xl:px-[154px] font-inter mb-[60px]">
      <h1 className="text-center font-extrabold text-[36px] 2xl:text-[56px] text-primary uppercase">
        Interested In Working With Us?
      </h1>
      <h4 className="text-[24px] text-center font-semibold text-gray-700">
        We work with real estate investors across the country every day. How can
        we help?
      </h4>

      {/*Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-10 xl:gap-[40px] mt-10 2xl:mt-[80px]">
        {/* Card Component */}
        <Card
          icon={icon1}
          title="Active Deal"
          subtitle="I have an active deal and would like a Term Sheet"
        />
        <Card
          icon={icon2}
          title="Pre-Approval"
          subtitle="I’d like to to get pre-approved so I can find my next deal."
        />
        <Card
          icon={icon3}
          title=" Schedule A Call"
          subtitle="I’d like to schedule a call."
        />
      </div>
    </div>
  );
}
