import { useState } from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-[9999] bg-white">
      <div className="px-[32px] xl:px-[64px] 2xl:px-[154px] font-inter border-b">
        <div className="relative flex gap-3 h-[120px] items-center justify-between">
          {/* logo */}
          <div className="logo ">
            <Link
              to="/"
              className="text-primary font-bold text-2xl sm:text-3xl 2xl:text-[40px] uppercase "
            >
              Ridge <span className="text-secondary">Street</span>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-[26px]">
            <li className="text-txtColor text-base xl:text-lg 2xl:text-[20px] font-[500] leading-6 ">
              <NavLink to="/fixandflip">Fix and Flip</NavLink>
            </li>
            <li className="text-txtColor text-base xl:text-lg 2xl:text-[20px] font-[500] leading-6">
              <NavLink to="/rentalloans">Rental Loans</NavLink>
            </li>
            <li className="text-txtColor text-base xl:text-lg 2xl:text-[20px] font-[500] leading-6">
              <NavLink to="/wherewelend">Where We Lend</NavLink>
            </li>
            <li className="text-txtColor text-base xl:text-lg 2xl:text-[20px] font-[500] leading-6">
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li className="text-txtColor text-base xl:text-lg 2xl:text-[20px] font-[500] leading-6">
              <NavLink to="/resource">Resource</NavLink>
            </li>

            <li className="">
              <button
                className=" px-2 2xl:px-4 py-2 2xl:py-2.5  text-white bg-primary cursor-pointer rounded-md flex items-center text-base 2xl:text-[18px] hover:bg-[#1d7241] transition-all duration-200"
                type="button"
              >
                Get Approved Online
              </button>
            </li>
          </ul>

          {/* mobile menu */}
          <button
            className="block lg:hidden"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMiniBars3 size={35} />
          </button>

          {menuOpen && (
            <div className="fixed top-0 right-0 z-[9999] w-[230px] lg:w-[250px] h-screen bg-white border-l pt-10 shadow-md transition-all duration-300">
              <div className="flex justify-end pr-10">
                <button
                  className="block lg:hidden"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <IoClose size={35} />
                </button>
              </div>
              <ul className="flex flex-col items-center gap-10 mt-[6rem]">
                <li className="text-txtColor text-lg font-[500] leading-6">
                  <NavLink to="/fixandflip" onClick={() => setMenuOpen(false)}>
                    Fix and Flip
                  </NavLink>
                </li>
                <li className="text-txtColor text-lg font-[500] leading-6">
                  <NavLink to="/rentalloans" onClick={() => setMenuOpen(false)}>
                    Rental Loans
                  </NavLink>
                </li>
                <li className="text-txtColor text-lg font-[500] leading-6">
                  <NavLink to="/wherewelend" onClick={() => setMenuOpen(false)}>
                    Where We Lend
                  </NavLink>
                </li>
                <li className="text-txtColor text-lg font-[500] leading-6">
                  <NavLink to="/aboutus" onClick={() => setMenuOpen(false)}>
                    About Us
                  </NavLink>
                </li>
                <li className="text-txtColor text-lg font-[500] leading-6">
                  <NavLink to="/resource" onClick={() => setMenuOpen(false)}>
                    Resource
                  </NavLink>
                </li>
                <li>
                  <button
                    className="px-4 py-2 text-white bg-primary cursor-pointer rounded-md flex items-center text-base hover:bg-[#1d7241] transition-all duration-200"
                    type="button"
                  >
                    Get Approved Online
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
