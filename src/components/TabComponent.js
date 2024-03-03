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
      <div className="w-[90%] mx-auto flex justify-between items-center pt-[75px]">
        <div className="w-[60%]">
          <h3 className="text-[22px] font-[600] text-[white]">
            What you'll learn
          </h3>
          <p className="font-[400] text-[13px] text-[white] py-3">
            Immerse yourself in a rich tapestry of both fundamental and advanced
            concepts, honing your skills in key areas such as Social Media
            Marketing, Search Engine Optimization, and Content Marketing. But
            wait, there’s more! Explore the latest trends in digital marketing,
            from Affiliate Marketing to Email Marketing, and beyond.
          </p>
          <p className="font-[400] text-[13px] text-[white] py-3">
            Each module of our course is designed to ignite your creativity and
            provide hands-on experience, offering practical insights that
            seamlessly blend theory with real-world application. Our mission? To
            equip you with the prowess needed to craft compelling digital
            marketing campaigns that resonate across various social media
            platforms. Get ready to unleash your potential and make your mark in
            the digital landscape with Green Technologies!
          </p>
          <div className="pt-[24px] flex justify-between">
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
        <div className="w-[40%] flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
    ),
    "Course Eligibility": () => (
      <>
        <div className="w-[90%] mx-auto flex justify-between items-center pt-[75px]">
        <div className="w-[60%]">
          <h3 className="text-[22px] font-[600] text-[white]">
            What you'll learn
          </h3>
          <p className="font-[400] text-[13px] text-[white] py-3">
            Immerse yourself in a rich tapestry of both fundamental and advanced
            concepts, honing your skills in key areas such as Social Media
            Marketing, Search Engine Optimization, and Content Marketing. But
            wait, there’s more! Explore the latest trends in digital marketing,
            from Affiliate Marketing to Email Marketing, and beyond.
          </p>
          <p className="font-[400] text-[13px] text-[white] py-3">
            Each module of our course is designed to ignite your creativity and
            provide hands-on experience, offering practical insights that
            seamlessly blend theory with real-world application. Our mission? To
            equip you with the prowess needed to craft compelling digital
            marketing campaigns that resonate across various social media
            platforms. Get ready to unleash your potential and make your mark in
            the digital landscape with Green Technologies!
          </p>
          <div className="pt-[24px] flex justify-between">
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
        <div className="w-[40%] flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
      </>
    ),
    "Course Certification": () => (
      <div className="w-[90%] mx-auto flex justify-between items-center pt-[75px]">
        <div className="w-[60%]">
          <h3 className="text-[22px] font-[600] text-[white]">
            What you'll learn
          </h3>
          <p className="font-[400] text-[13px] text-[white] py-3">
            Immerse yourself in a rich tapestry of both fundamental and advanced
            concepts, honing your skills in key areas such as Social Media
            Marketing, Search Engine Optimization, and Content Marketing. But
            wait, there’s more! Explore the latest trends in digital marketing,
            from Affiliate Marketing to Email Marketing, and beyond.
          </p>
          <p className="font-[400] text-[13px] text-[white] py-3">
            Each module of our course is designed to ignite your creativity and
            provide hands-on experience, offering practical insights that
            seamlessly blend theory with real-world application. Our mission? To
            equip you with the prowess needed to craft compelling digital
            marketing campaigns that resonate across various social media
            platforms. Get ready to unleash your potential and make your mark in
            the digital landscape with Green Technologies!
          </p>
          <div className="pt-[24px] flex justify-between">
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
            <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
        <div className="w-[40%] flex justify-end">
          <Image src={socialMedia} alt="image" />
        </div>
      </div>
    ),
    "Mock Interviews": () => (
      <div className="w-[90%] mx-auto flex justify-between items-center pt-[75px]">
      <div className="w-[60%]">
        <h3 className="text-[22px] font-[600] text-[white]">
          What you'll learn
        </h3>
        <p className="font-[400] text-[13px] text-[white] py-3">
          Immerse yourself in a rich tapestry of both fundamental and advanced
          concepts, honing your skills in key areas such as Social Media
          Marketing, Search Engine Optimization, and Content Marketing. But
          wait, there’s more! Explore the latest trends in digital marketing,
          from Affiliate Marketing to Email Marketing, and beyond.
        </p>
        <p className="font-[400] text-[13px] text-[white] py-3">
          Each module of our course is designed to ignite your creativity and
          provide hands-on experience, offering practical insights that
          seamlessly blend theory with real-world application. Our mission? To
          equip you with the prowess needed to craft compelling digital
          marketing campaigns that resonate across various social media
          platforms. Get ready to unleash your potential and make your mark in
          the digital landscape with Green Technologies!
        </p>
        <div className="pt-[24px] flex justify-between">
          <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
          <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
          <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
      <div className="w-[40%] flex justify-end">
        <Image src={socialMedia} alt="image" />
      </div>
    </div>
    ),
    "Industry Experts": () => (
      <div className="w-[90%] mx-auto flex justify-between items-center pt-[75px]">
      <div className="w-[60%]">
        <h3 className="text-[22px] font-[600] text-[white]">
          What you'll learn
        </h3>
        <p className="font-[400] text-[13px] text-[white] py-3">
          Immerse yourself in a rich tapestry of both fundamental and advanced
          concepts, honing your skills in key areas such as Social Media
          Marketing, Search Engine Optimization, and Content Marketing. But
          wait, there’s more! Explore the latest trends in digital marketing,
          from Affiliate Marketing to Email Marketing, and beyond.
        </p>
        <p className="font-[400] text-[13px] text-[white] py-3">
          Each module of our course is designed to ignite your creativity and
          provide hands-on experience, offering practical insights that
          seamlessly blend theory with real-world application. Our mission? To
          equip you with the prowess needed to craft compelling digital
          marketing campaigns that resonate across various social media
          platforms. Get ready to unleash your potential and make your mark in
          the digital landscape with Green Technologies!
        </p>
        <div className="pt-[24px] flex justify-between">
          <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
          <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
          <div className="flex justify-between items-center border-[1px] border-[#FFFFFF] rounded-[12px] p-3">
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
      <div className="w-[40%] flex justify-end">
        <Image src={socialMedia} alt="image" />
      </div>
    </div>
    ),
  });

  return (
    <div className="w-full min-h-[650px] px-2 py-16 sm:px-0 bg-gradient-to-l from-[#103D33] via-[#5C6337] to-[#A4873D]">
      <Tab.Group>
        <Tab.List className="flex w-[65%] mx-auto rounded-[50px] bg-[white] p-[6px]">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-3xl py-2.5 text-sm font-[400] leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-[#033631] focus:outline-none",
                  selected
                    ? "bg-[#033631] text-[white] shadow"
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
