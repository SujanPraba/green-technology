"use client";
import { Tab, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import fb from "../../public/tabImages/fb.svg";
import fbStar from "../../public/tabImages/fbStar.svg";
import google from "../../public/tabImages/google.svg";
import qStar from "../../public/tabImages/qugoStar.svg";
import quaro from "../../public/tabImages/quora.svg";
import socialMedia from "../../public/tabImages/social-media.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabComponent() {
  let [categories] = useState({
    "What you'll learn": () => (
      <div className="w-[100%] lg:w-[95%] mx-auto flex lg:justify-between justify-center items-center lg:pt-[75px] pt-[20px]">
        <div className="lg:w-[63%] w-[80%]">
          <h3 className="md:text-[22px] text-[16px] font-[600] text-[white]">
            What you'll learn
          </h3>
          <p className="font-[400] lg:text-[13px] text-[11px] text-[white] lg:py-3 py-1">
            Immerse yourself in a rich tapestry of both fundamental and advanced
            concepts, honing your skills in key areas such as Social Media
            Marketing, Search Engine Optimization, and Content Marketing. But
            wait, there’s more! Explore the latest trends in digital marketing,
            from Affiliate Marketing to Email Marketing, and beyond.
          </p>
          <p className="font-[400] lg:text-[13px]  text-[11px] text-[white] lg:py-3 py-1">
            Each module of our course is designed to ignite your creativity and
            provide hands-on experience, offering practical insights that
            seamlessly blend theory with real-world application. Our mission? To
            equip you with the prowess needed to craft compelling digital
            marketing campaigns that resonate across various social media
            platforms. Get ready to unleash your potential and make your mark in
            the digital landscape with Green Technologies!
          </p>
          <div className="lg:pt-[24px] pt-[12px] md:flex justify-between  lg:px-0">
            <div className="flex xl:max-w-[270px] mx-auto max-w-[350px] md:max-w-[205px] justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={quaro} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={fb} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={fbStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Good</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 145 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={google} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] hidden lg:flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
    ),
    "Course Eligibility": () => (
      <div className="w-[100%] lg:w-[95%] mx-auto flex lg:justify-between justify-center items-center lg:pt-[75px] pt-[20px]">
        <div className="lg:w-[63%] w-[80%]">
          <h3 className="md:text-[22px] text-[16px] font-[600] text-[white]">
            Eligibility
          </h3>
          <p className="font-[400] lg:text-[13px] text-[11px] text-[white] lg:py-3 py-1">
            Bachelor’s or Equivalent Degree <br />
            You only need a laptop with Android or iOS and a stable internet
            connection for the Ace Web <br />
            Academy digital marketing course. Basic communication skills like
            reading, speaking, and writing are essential for working <br />{" "}
            professionals and graduates taking this course.
            <br /> All software used in the course is free, so there’s no need
            to buy any software.
          </p>

          <div className="lg:pt-[24px] pt-[12px] md:flex justify-between  lg:px-0">
            <div className="flex xl:max-w-[270px] mx-auto max-w-[350px] md:max-w-[205px] justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={quaro} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={fb} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={fbStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Good</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 145 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={google} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] hidden lg:flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
    ),
    "Course Certification": () => (
      <div className="w-[100%] lg:w-[95%] mx-auto flex lg:justify-between justify-center items-center lg:pt-[75px] pt-[20px]">
        <div className="lg:w-[63%] w-[80%]">
          <h3 className="md:text-[22px] text-[16px] font-[600] text-[white]">
            Digital Marketing Course Certification from Green Technologies:
          </h3>
          <p className="font-[400] lg:text-[13px] text-[11px] text-[white] lg:py-3 py-1">
            Transform into a digital marketing specialist upon completion <br />
            Validate expertise in SEO, PPC, Social Media, Digital Analytics,
            Content and Mobile Marketing, and more <br />
            Showcase proficiency in advanced concepts like Affiliate Marketing,
            Email Marketing, and Conversion Optimization
          </p>
          <p className="font-[400] lg:text-[13px]  text-[11px] text-[white] lg:py-3 py-1">
            Enhance credibility for building dynamic real-world projects with
            in-depth knowledge and the latest tools
          </p>
          <p className="font-[400] lg:text-[13px]  text-[11px] text-[white] lg:py-3 py-1">
            Fast-track your career in digital marketing with a structured
            course, leading to well-paid internships or jobs
          </p>
          <div className="lg:pt-[24px] pt-[12px] md:flex justify-between  lg:px-0">
            <div className="flex xl:max-w-[270px] mx-auto max-w-[350px] md:max-w-[205px] justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={quaro} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={fb} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={fbStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Good</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 145 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={google} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] hidden lg:flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
    ),
    "Mock Interviews": () => (
      <div className="w-[100%] lg:w-[95%] mx-auto flex lg:justify-between justify-center items-center lg:pt-[75px] pt-[20px]">
        <div className="lg:w-[63%] w-[80%]">
          <h3 className="md:text-[22px] text-[16px] font-[600] text-[white]">
            Green Technologies digital marketing course offers unique mock
            interviews to prepare students for career success.
          </h3>
          <p className="font-[400] lg:text-[13px] text-[11px] text-[white] lg:py-3 py-1">
            {" "}
            Our comprehensive mock interviews cover a wide range of interview
            questions, helping students overcome nervousness and advance in
            their careers.{" "}
          </p>
          <p className="font-[400] lg:text-[13px] text-[11px] text-[white] lg:py-3 py-1">
            Designed meticulously, our mock interviews include both generic and
            technically focused questions to ensure students excel in
            interviews.
          </p>
          <p className="font-[400] lg:text-[13px] text-[11px] text-[white] lg:py-3 py-1">
            Whether you’re a beginner or an expert, our mock interviews refine
            interview and negotiation skills.
          </p>
          <p className="font-[400] lg:text-[13px] text-[11px] text-[white] lg:py-3 py-1">
            These sessions also enhance analytical and problem-solving
            abilities, maximizing career prospects.
          </p>

          <div className="lg:pt-[24px] pt-[12px] md:flex justify-between  lg:px-0">
            <div className="flex xl:max-w-[270px] mx-auto max-w-[350px] md:max-w-[205px] justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={quaro} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={fb} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={fbStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Good</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 145 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={google} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] hidden lg:flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
    ),
    "Industry Experts": () => (
      <div className="w-[100%] lg:w-[95%] mx-auto flex lg:justify-between justify-center items-center lg:pt-[75px] pt-[20px]">
        <div className="lg:w-[63%] w-[80%]">
          <h3 className="md:text-[22px] text-[16px] font-[600] text-[white]">
            We offer guided career support from industry experts alongside a
            structured curriculum for building successful careers.
          </h3>
          <p className="font-[400] lg:text-[13px]  text-[11px] text-[white] lg:py-3 py-1">
            Our expert panel provides in-depth understanding and advanced
            knowledge in digital marketing domains.
          </p>
          <p className="font-[400] lg:text-[13px]  text-[11px] text-[white] lg:py-3 py-1">
            From career guidance to mentoring to mock interviews, our experts
            assist students in mastering in-demand skills.
          </p>
          <p className="font-[400] lg:text-[13px]  text-[11px] text-[white] lg:py-3 py-1">
            Constant guidance ensures students are job-ready with proficiency in
            advanced digital marketing tools and techniques.
          </p>
          <p className="font-[400] lg:text-[13px]  text-[11px] text-[white] lg:py-3 py-1">
            Benefit from industry experts’ rich experience in driving
            omni-channel digital marketing campaigns for a competitive edge in
            your career.
          </p>
          <div className="lg:pt-[24px] pt-[12px] md:flex justify-between  lg:px-0">
            <div className="flex xl:max-w-[270px] mx-auto max-w-[350px] md:max-w-[205px] justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={quaro} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={fb} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={fbStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Good</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 145 Reviews
                </p>
              </div>
            </div>
            <div className="flex  md:max-w-[205px] max-w-[350px] xl:max-w-[270px] mx-auto justify-around md:justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3 my-4 lg:my-0">
              <div>
                <Image src={google} alt="Image" />
              </div>
              <div className="px-2">
                <Image src={qStar} alt="Image" />
                <p className="font-[700] text-[18px] text-[white]">Excellent</p>
                <p className="font-[400] text-[13px] text-[white]">
                  Based on 77 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] hidden lg:flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
    ),
  });

  return (
    <div className="w-full lg:min-h-[650px] px-2 lg:py-16 py-8 sm:px-0 bg-gradient-to-l from-[#103D33] via-[#5C6337] to-[#A4873D]">
      <Tab.Group>
        <Tab.List className="flex sm:w-[65%] mx-auto rounded-[50px] bg-[white] p-[6px]">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-3xl lg:py-2.5 lg:text-sm md:text-[10px] text-[8px] font-[400] lg:leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-[#033631] focus:outline-none",
                  selected
                    ? "bg-[#033631] text-[white] shadow py-[6px]"
                    : "text-[#033631] hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Transition
            show={true}
            enter="transition-opacity duration-800"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-800"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {Object.values(categories).map((content, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                {content()}
              </Tab.Panel>
            ))}
          </Transition>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
