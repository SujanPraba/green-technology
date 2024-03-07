"use client";
import ComapnyScroll from "@/components/ComapnyScroll";
import CondentLeft from "@/components/CondentLeft";
import CondentRight from "@/components/CondentRight";
import FaqComponent from "@/components/FaqComponent";
import Footer from "@/components/Footer";
import FormComponent from "@/components/Form";
import Navbar from "@/components/Navbar";
import SlidingCondent from "@/components/SlidingCondent";
import TabComponent from "@/components/TabComponent";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import career from "../../public/career.svg";
import blog from "../../public/digitalmarket/blog.svg";
import condent from "../../public/digitalmarket/content.svg";
import emailMarket from "../../public/digitalmarket/email-marketing.svg";
import influencer from "../../public/digitalmarket/influencer.svg";
import keywords from "../../public/digitalmarket/keywords.svg";
import seo from "../../public/digitalmarket/seo.svg";
import socialMedia from "../../public/digitalmarket/socialMedia.svg";
import graduate from "../../public/graduate.svg";
import group from "../../public/group.svg";
import placement from "../../public/placement.svg";
import quality from "../../public/quality.svg";
import arrrow from "../../public/rightArrow.svg";
import sectionOne from "../../public/sectionOne.svg";
import training from "../../public/training_live.svg";
import webinar from "../../public/webinar.svg";
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    document.body.classList.add("scroll-smooth");

    // Cleanup on component unmount
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
      document.body.classList.remove("scroll-smooth");
    };
  });

  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="bg-[#F4FAFA] w-full lg:flex justify-between lg:px-[60px] px-[30px] lg:pt-[60px] pt-[30px] py-[15px]">
        <div className="lg:w-45%">
          <h1 className="md:text-[36px] hidden lg:block text-[24px] font-[700]">
            BECOME A DIGITAL MARKETER <br />
            IN 60 HOURS
          </h1>
          <h1 className="lg:text-[36px] lg:hidden md:text-[28px] text-center text-[24px] font-[700]">
            BECOME A DIGITAL MARKETER
            IN 60 HOURS
          </h1>
          <p className="lg:text-[18px] hidden lg:block text-[14px] font-normal text-[#333333]">
            A complete placement assistance programme <br /> to make you
            industry ready
          </p>
          <p className="lg:text-[18px] lg:hidden text-center text-[14px] font-normal text-[#333333]">
            A complete placement assistance programme to make you
            industry ready
          </p>
          <div className="flex justify-center lg:block">
          <Link href="#enquirenow" className="ml-2">
          <button className="bg-[#333333] text-[white] lg:px-[24px] px-[12px] hover:px-[14px] lg:hover:px-[28px] transition-all duration-300 lg:py-[10px] py-[5px] flex rounded-[24px] mt-[12px]">
            Apply Now <Image src={arrrow} alt="arrow" className="ml-1" />
          </button>
          </Link>
          </div>
          <div className="border-[1px] py-[16px] md:w-[70%] lg:w-[100%] mx-auto lg:px-[24px] px-[4px] flex justify-around lg:justify-between lg:mt-[60px] mt-[30px] border-gradient">
            <div>
              <div className="flex justify-center items-center">
                <Image src={graduate} alt="image" />
              </div>
              <p className="lg:text-[24px] text-[16px] font-[700] mt-1 text-center">10 K</p>
              <p className="lg:text-[12px] text-[10px] font-[400] text-[#666666] mt-1 text-center">
                Students Enrolled
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Image src={webinar} alt="image" />
              </div>
              <p className="lg:text-[24px] text-[16px] font-[700] mt-1 text-center">60 Hrs</p>
              <p className="lg:text-[12px] text-[10px] font-[400] text-[#666666] mt-1 text-center">
                Offline / Online <br /> Learning
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Image src={training} alt="image" />
              </div>
              <p className="lg:text-[24px] text-[16px] font-[700] mt-1 text-center">60 hrs</p>
              <p className="lg:text-[12px] text-[10px] font-[400] text-[#666666] mt-1 text-center">
                Live Training
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Image src={training} alt="image" />
              </div>
              <p className="lg:text-[24px] text-[16px] font-[700] mt-1 text-center">60 Hrs</p>
              <p className="lg:text-[12px] text-[10px] font-[400] text-[#666666] mt-1 text-center">
                Live Training
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] flex lg:justify-end justify-center mt-8 lg:mt-0 -mb-[16px]">
          <Image src={sectionOne} alt="image" className="bottom-0" />
        </div>
      </div>
      {/* <-------------------- COmpany Scrolling --------------------> */}
      <section className="lg:pt-[120px] pt-[60px] font-[600]" id="placement">
      <p className='text-[24px] text-center py-4'>100 + Hiring Partners</p>
        <ComapnyScroll />
      </section>
      {/* <--------------------Condent-Left --------------------> */}
      <section className="lg:pt-[120px] pt-[60px]">
        <CondentLeft />
      </section>
      {/* <-------------------- Key Highlight --------------------> */}
      <section className="lg:pt-[120px] pt-[60px] w-full lg:flex justify-between lg:px-[90px] px-[20px]">
        <div className="lg:w-[45%] w-[90%]">
          <h2 className="lg:text-[34px] text-[18px] font-[700]">Key Highlight</h2>
          <p className="lg:text-[15px] text-[13px] text-[#666666]">
            We hire efficient trainers with 10+ years of experience, offering
            top-notch, affordable training. They integrate real-world scenarios,
            and we offer flexible batch timings for students and professionals.
            Our trainers provide both classroom and online training, meeting
            global standards and guaranteeing job placement post-training.
            limited Class size
          </p>
        </div>
        <div className="lg:w-[45%] lg:ml-auto mx-auto pt-8 lg:pt-0">
          <div className="bg-[#F8F8F8] py-[12px] w-[90%] mx-auto rounded-lg px-[16px] flex items-center">
            <Image src={quality} alt="img" />
            <p className="lg:font-[700] font-[600] lg:px-10 px-5 lg:text-[19px] text-[14px]">
              Quality and Practical Training
            </p>
          </div>
          <div className="bg-[#F8F8F8] py-[12px] w-[90%] mx-auto rounded-lg px-[16px] flex items-center mt-6">
            <Image src={placement} alt="img" />
            <p className="lg:font-[700] font-[600] lg:px-10 px-5 lg:text-[19px] text-[14px]">
              100% Job Placement Assistance
            </p>
          </div>
          <div className="bg-[#F8F8F8] py-[12px] w-[90%] mx-auto rounded-lg px-[16px] flex items-center mt-6">
            <Image src={career} alt="img" />
            <p className="lg:font-[700] font-[600] lg:px-10 px-5 lg:text-[19px] text-[14px]">Career Guidance</p>
          </div>
          <div className="bg-[#F8F8F8] py-[12px] w-[90%] mx-auto rounded-lg px-[16px] flex items-center mt-6">
            <Image src={group} alt="img" />
            <p className="lg:font-[700] font-[600] lg:px-10 px-5 lg:text-[19px] text-[14px]">Career Guidance</p>
          </div>
        </div>
      </section>
      {/* <-------------------- Condent Right--------------------> */}
      <section className="lg:pt-[120px] pt-[60px]">
      <CondentRight/>
      </section>
      {/* <-------------------- Digital Marketing--------------------> */}
      <section className="lg:pt-[120px] pt-[60px] lg:px-[60px] px-[20px]">
        <div className="flex items-center ml-8" id="courses">
          <h2 className="w-[3px] h-[40px] bg-[#000000]"></h2>
          <p className="px-3 font-[600] lg:text-[28px] text-[16px]">
            Digital Marketing Course Modules
          </p>
        </div>
        <p className="font-[400] text-[12px] text-[#666666] lg:pl-8 pl-12 pt-2">
          Areas that you will expertise on :
        </p>
        <div className="lg:pt-[45px] pt-[25px]">
          <div className="w-[90%] mx-auto rounded-[8px] border-[1px] border-[#ffffff] shadow-lg p-[16px]">
            <div className="flex">
              <Image src={emailMarket} alt="img" />
              <p className="px-4 font-[500] text-[18px]">Email Marketing</p>
            </div>
            <p className="text-[#333333] text-[14px] font-[400] pt-[15px]">
              You will learn how to develop a successful email marketing
              strategy focused on human connection to cultivate trust and expand
              your business.
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[8px] border-[1px] border-[#ffffff] shadow-lg p-[16px] mt-[15px]">
            <div className="flex">
              <Image src={seo} alt="img" />
              <p className="px-4 font-[500] text-[18px]">SEO of websites</p>
            </div>
            <p className="text-[#333333] text-[14px] font-[400] pt-[15px]">
              Familiarize with the free and paid SEO tools and other aspects
              related to SEO of websites.
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[8px] border-[1px] border-[#ffffff] shadow-lg p-[16px] mt-[15px]">
            <div className="flex">
              <Image src={socialMedia} alt="img" />
              <p className="px-4 font-[500] text-[18px]">
                Social media campaign analysis
              </p>
            </div>
            <p className="text-[#333333] text-[14px] font-[400] pt-[15px]">
              Learn to analyze, assess, and enhance social media data to amplify
              your social media presence.
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[8px] border-[1px] border-[#ffffff] shadow-lg p-[16px] mt-[15px]">
            <div className="flex">
              <Image src={influencer} alt="img" />
              <p className="px-4 font-[500] text-[18px]">
                Influencer Marketing
              </p>
            </div>
            <p className="text-[#333333] text-[14px] font-[400] pt-[15px]">
              Learn influencer marketing to attract traffic to help the site
              rank higher in search engines.
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[8px] border-[1px] border-[#ffffff] shadow-lg p-[16px] mt-[15px]">
            <div className="flex">
              <Image src={keywords} alt="img" />
              <p className="px-4 font-[500] text-[18px]">Keyword Research</p>
            </div>
            <p className="text-[#333333] text-[14px] font-[400] pt-[15px]">
              Discover short and long keyword phrases to improve return on
              investment by achieving higher rankings in search engines, and
              enhance your learning outcomes.
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[8px] border-[1px] border-[#ffffff] shadow-lg p-[16px] mt-[15px]">
            <div className="flex">
              <Image src={condent} alt="img" />
              <p className="px-4 font-[500] text-[18px]">Content Marketing</p>
            </div>
            <p className="text-[#333333] text-[14px] font-[400] pt-[15px]">
              Design a actionable content marketing strategy conducting reaserch
              and writting content hat converts.
            </p>
          </div>
          <div
            id="courses"
            className="w-[90%] mx-auto rounded-[8px] border-[1px] border-[#ffffff] shadow-lg p-[16px] mt-[15px]"
          >
            <div className="flex">
              <Image src={blog} alt="img" />
              <p className="px-4 font-[500] text-[18px]">Blogging</p>
            </div>
            <p className="text-[#333333] text-[14px] font-[400] pt-[15px]">
              Develop a blogging plan that encompasses creating content modules
              and implementing SEO strategies to draw in potential leads and
              enhance learning opportunities.
            </p>
          </div>
        </div>
      </section>
      {/* <-------------------- What you learn--------------------> */}
      <section className="lg:pt-[100px] pt-[50px]">
        <TabComponent />
      </section>
      {/* <-------------------- Sliding Condent--------------------> */}
      <section className="lg:pt-[120px] pt-[60px]">
      <div className="flex items-center ml-8 pb-3 pl-6" id="testimonial">
          <h2 className="w-[3px] h-[40px] bg-[#000000]"></h2>
          <p className="px-3 font-[600] lg:text-[28px] text-[16px]">
            Success Stories !
          </p>
        </div>
      <SlidingCondent/>
      </section>
      {/* <-------------------- Faq--------------------> */}
      <section className="lg:pt-[100px] pt-[60px]">
        <FaqComponent />
      </section>
       {/* <-------------------- Form--------------------> */}
       <section className="lg:pt-[100px] pt-[50px]" id="enquirenow">
        <FormComponent />
      </section>
       {/* <-------------------- Footer--------------------> */}
       <section className="lg:pt-[100px] pt-[50px]">
        <Footer />
      </section>
    </div>
  );
}
