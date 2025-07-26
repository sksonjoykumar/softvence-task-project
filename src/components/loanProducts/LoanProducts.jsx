import icon1 from '../../assets/images/loan-icon/icon-1.png';
import icon2 from '../../assets/images/loan-icon/icon-2.png';
import icon3 from '../../assets/images/loan-icon/icon-3.png';
import LoanCard from './Card';

export default function LoanProducts() {
  return (
    <div className="mt-[30px] md:mt-[40px] 2xl:mt-[80px] px-[32px] xl:px-[64px] 2xl:px-[154px] font-inter mb-[60px]">
      <h1 className="text-center font-extrabold text-[36px] 2xl:text-[56px] text-primary uppercase">
        Lorn Products
      </h1>

      {/* Loan Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-10 xl:gap-[40px] mt-10 2xl:mt-[80px]">
        <LoanCard
          icon={icon1}
          title="Fix and Flip"
          subtitle="Funding For Rehab + Purchase"
          points={[
            '$50,000 up to $3,000,000',
            'Interest Rate 10.5%–12.99%',
            'Origination Fee From 1.5%',
            'Up to 85% of Purchase and 100% of Rehab',
          ]}
          learnMoreLink="#"
          color={'bg-white'}
        />
        <LoanCard
          icon={icon2}
          title="Rental Property"
          subtitle="30 Year DSCR loans in Florida and Texas"
          points={[
            'Up to $1,500,000',
            'Interest Rate 6.75%-8.25%',
            'Origination Fee From 1.5%',
            'Up to 85% of LTV',
          ]}
          learnMoreLink="#"
          color={'bg-primary'}
        />
        <LoanCard
          icon={icon3}
          title="Ground Up Construction"
          subtitle="Ground Up Construction loans in Florida and Texas"
          points={[
            'Up to $3,500,000',
            'Interest Rate 11.25%-13.25%',
            'Origination Fee From 1.5%',
            'Up to 80% of LTC',
          ]}
          learnMoreLink="#"
          color={'bg-primary'}
        />
      </div>
    </div>
  );
}
