import Image from "next/image";
import Link from "next/link";
import logo from "../../public/gtlogo.svg";
import mobile from "../../public/tabImages/bxs_mobile.svg";
import fb from "../../public/tabImages/fb1.svg";
import google from "../../public/tabImages/google1.svg";
import linkdn from "../../public/tabImages/linkedin.svg";
import location from "../../public/tabImages/location.svg";
import mail from "../../public/tabImages/mail.svg";
import youTube from "../../public/tabImages/youtube.svg";
const Footer = () => {
  return (
    <div className="bg-[#033631]">
      <div className="md:flex justify-between xl:w-[85%] lg:w-[95%] w-[95%] mx-auto py-[30px]">
        <div className="flex justify-center lg:block w-[40%]">
          <Link href="/">
            <Image src={logo} alt="logo" className="cursor-pointer" />
          </Link>
          <div className="text-[white] px-3 pt-8">
            <p className="text-[13px] font-[400]">
              Level up your career with our Advanced Certified Digital Marketing
              Course led by the coolest experts in town. Get ready to dominate
              with Innovative Gen tools In the field of Meta Ads, Google ads,
              SEO, SMM, Web Devps, Complete Social Media Marketing, and more.
              Say goodbye to FOMO and Start with hello to unstoppable growth.
            </p>
          </div>
          <div className="flex items-center text-[white] px-3 py-5">
            <p className="text-[14px] font-[400]">Follow Us on</p>
            <Image src={linkdn} alt="" className="px-1"/>
            <Image src={fb} alt=""className="px-1"/>
            <Image src={youTube} alt=""className="px-1"/>
            <Image src={google} alt=""className="px-1"/>

          </div>
        </div>
        <div>
          <div className="flex-col py-2 text-[white]">
            <ul className="">
              <p className="font-semibold text-[17px]">Quick Links</p>
              <Link href="/">
                <li className="py-2 font-light">About</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Courses</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Training Process</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Placement</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Corporates</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Admission</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex-col py-2 text-[white]">
            <ul className="">
              <p className="font-semibold text-[17px]">Major Link</p>
              <Link href="/">
                <li className="py-2 font-light">Blog</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Privacy Policy</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Terms and Condition</li>
              </Link>
              <Link href="/">
                <li className="py-2 font-light">Contact us</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="text-[white]">
          <div>
            <p className="font-semibold text-[17px]">Contact us</p>
          </div>
          <div className="pt-2 flex items-center pb-3">
            <Image src={mobile} alt="img" />
            <p className="text-[15px] font-[500] px-2">+91 89399 15572</p>
          </div>
          <div className="pt-2 flex items-center py-3">
            <Image src={mail} alt="img" />
            <p className="text-[15px] font-[500] px-2">
              greenstechnologyomrleads@gmail.com
            </p>
          </div>
          <div className="pt-2 flex items-start py-3">
            <Image src={location} alt="img" />
            <p className="text-[15px] font-[500] px-2">
              No:11, First Street,
              <br /> Padmanabha Nagar, Adyar,
              <br /> Chennai-600 020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
