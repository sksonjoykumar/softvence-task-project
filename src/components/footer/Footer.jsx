import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';
import { MdOutlineMailOutline, MdOutlinePhoneAndroid } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { footerInfo } from './footer';

export default function Footer() {
  return (
    <div className="bg-primary ">
      <div className=" px-[32px] xl:px-[64px] 2xl:px-[154px] font-inter">
        <div className="grid gap-6 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white py-[40px]">
          {footerInfo.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-[24px]">{item.heading}</h3>
              <ul>
                <li className="text-[20px] mt-3 py-1 cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link1}</Link>
                </li>
                <li className="text-[20px] mt-1 py-[3px] cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link2}</Link>
                </li>
                <li className="text-[20px] mt-1 py-[3px] cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link3}</Link>
                </li>
                <li className="text-[20px] mt-1 py-[3px] cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link4}</Link>
                </li>

                <li className="text-[20px] mt-1 py-[3px] cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link5}</Link>
                </li>
                <li className="text-[24px] font-bold mt-1 py-[3px] cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link6}</Link>
                </li>
                <li className="text-[20px] mt-1 py-[3px] cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link7}</Link>
                </li>
                <li className="text-[20px] mt-1 py-[3px] cursor-pointer hover:text-gray-300 transition-all duration-200">
                  <Link>{item.link8}</Link>
                </li>
              </ul>
            </div>
          ))}

          {/* Contact area */}
          <div className="">
            <h3 className="font-bold text-[24px]">Contact Us</h3>
            <div className="mt-3">
              <p className="text-[20px]">Email</p>
              <div className="flex items-center gap-2">
                <span className="text-[22px]">
                  <MdOutlineMailOutline />
                </span>
                <span className="text-[20px]">loans@ridgestreetcap.com</span>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-[20px]">Direct/Text</p>
              <div className="flex items-center gap-2">
                <span className="text-[22px]">
                  <MdOutlinePhoneAndroid />
                </span>
                <span className="text-[20px]">Phone: 786-304-2751</span>
              </div>
            </div>
            {/* logo */}
            <div className="logo bg-white mt-8 px-2 py-2 rounded-lg shadow-md text-center">
              <Link
                to="/"
                className="text-primary font-bold text-2xl sm:text-3xl 2xl:text-[35px] uppercase "
              >
                Ridge <span className="text-secondary">Street</span>
              </Link>
            </div>
            {/* social icon */}
            <div className="mt-5 flex items-center justify-evenly gap-3">
              <a href="">
                <FaLinkedin size={28} />
              </a>
              <a href="#">
                <FaFacebookF size={28} />
              </a>
              <a href="#">
                <FaTwitter size={28} />
              </a>
              <a href="#">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
