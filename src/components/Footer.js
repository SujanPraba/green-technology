import Image from "next/image";
import Link from "next/link";
import logo from "../../public/FooterLogo.svg";
import insta from "../../public/footer/insta.svg";
import twit from "../../public/footer/twit.svg";
import mobile from "../../public/tabImages/bxs_mobile.svg";
import fb from "../../public/tabImages/fb1.svg";
import linkdn from "../../public/tabImages/linkedin.svg";
import location from "../../public/tabImages/location.svg";
import mail from "../../public/tabImages/mail.svg";
import youTube from "../../public/tabImages/youtube.svg";
const Footer = () => {
  return (
    <div className="bg-[#033631]">
      <div className="lg:flex justify-between xl:w-[85%] lg:w-[95%] w-[95%] mx-auto py-[30px]">
        <div className="block lg:justify-center lg:w-[40%]">
          <Link href="/">
            <Image src={logo} alt="logo" className="cursor-pointer pl-3" />
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
          <div className="lg:flex hidden items-center text-[white] px-3 py-5">
            <p className="text-[14px] font-[400]">Follow Us on</p>
            <Link href="https://www.linkedin.com/company/greens-education/">
              <Image src={linkdn} alt="" className="px-1" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61556895692559">
              <Image src={fb} alt="" className="px-1" />
            </Link>
            <Link href="https://www.youtube.com/@GreensTechnologies-xp8wk">
              <Image src={youTube} alt="" className="px-1" />
            </Link>
            <Link href="https://www.instagram.com/greenstechofficial?igsh=MWlnZDZoZGZqYnFsOQ%3D%3D&utm_source=qr">
            <Image src={insta} alt="" className="px-1" />
          </Link>
          <Link href="https://twitter.com/GreensTech_">
            <Image src={twit} alt="" className="px-1" />
          </Link>
          </div>
        </div>
        <div className="flex justify-between lg:block pt-8 lg:pt-0">
          <div className="">
            <div className="flex-col py-2 text-[white] px-4 lg:px-0">
              <ul className="">
                <p className="font-semibold text-[17px]">Quick Links</p>
                <Link href="/">
                  <li className="py-2 font-light">About</li>
                </Link>
                <Link href="#courses">
                  <li className="py-2 font-light">Courses</li>
                </Link>
                <Link href="#training">
                  <li className="py-2 font-light">Training Process</li>
                </Link>
                <Link href="#placement">
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
            {/* <div className="flex-col py-2 text-[white] px-4 lg:px-0">
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
                <Link href="#enquirenow">
                  <li className="py-2 font-light">Contact us</li>
                </Link>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="text-[white] px-4 lg:px-0 pt-8 lg:pt-0">
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
        <div className="flex lg:hidden items-center justify-center lg:justify-start text-[white] px-4 py-5">
          <p className="text-[14px] font-[400]">Follow Us on</p>
          <Link href="https://www.linkedin.com/company/greens-education/">
            <Image src={linkdn} alt="" className="px-1" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61556895692559">
            <Image src={fb} alt="" className="px-1" />
          </Link>
          <Link href="https://www.youtube.com/@GreensTechnologies-xp8wk">
            <Image src={youTube} alt="" className="px-1" />
          </Link>
          <Link href="https://www.instagram.com/greenstechofficial?igsh=MWlnZDZoZGZqYnFsOQ%3D%3D&utm_source=qr">
            <Image src={insta} alt="" className="px-1" />
          </Link>
          <Link href="https://twitter.com/GreensTech_">
            <Image src={twit} alt="" className="px-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
