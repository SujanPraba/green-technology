import Image from "next/image";
import { useState } from "react";
import quotes from "../../public/quotes.svg";

const SlidingContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    <div key="image1">
      <li className="p-8 border rounded-xl w-[75%] mx-auto">
        <div className="flex w-full items-start justify-between">
          <Image src={quotes} alt="img" />
          <div className="pl-12">
            <p className="font-[400] text-[14px]">
            &quot;Exceptional sessions with meticulous planning. They instill the
              confidence needed to advance in one&apos;s career. Thank you, Vijay,
              I&apos;ll be reaching out soon with my inquiries
            </p>
            <p className="pt-2">
              Narendar <br />{" "}
              <span className="font-light text-[14px]">Professor</span>
            </p>
          </div>
        </div>
      </li>
    </div>,
    <div className="" key="image2">
      <li className="p-8 border rounded-xl w-[75%] mx-auto">
        <div className="flex w-full items-start justify-between">
          <Image src={quotes} alt="img" />
          <div className="pl-12">
            <p className="font-[400] text-[14px]">
              I was once your student during your early training days. Now, I&apos;ve
              had the pleasure of attending your Informatic session again. I
              must say, I&apos;m thoroughly impressed by the training program. I&apos;ve
              gained invaluable knowledge on numerous new topics through this
              course. Thank you immensely
            </p>
            <p className="pt-2">
              Robert <br />{" "}
              <span className="font-light text-[14px]">Recruiter</span>
            </p>
          </div>
        </div>
      </li>
    </div>,
    <div className="" key="image3">
      <li className="p-8 border rounded-xl w-[75%] mx-auto">
        <div className="flex w-full items-start justify-between">
          <Image src={quotes} alt="img" />
          <div className="pl-12">
            <p className="font-[400] text-[14px]">
              Hello, my name is Prakash. I recently completed training in
              Informatic they conducted the classes in a friendly manner and
              promptly addressed my doubts. The provided materials were of high
              quality. I highly recommend Greens Technologies to anyone
              interested in learning Informatic.
            </p>
            <p className="pt-2">
              Mahal Roy <br />{" "}
              <span className="font-light text-[14px]">Manager</span>
            </p>
          </div>
        </div>
      </li>
    </div>,
    <div className="" key="image4">
      <li className="p-8 border rounded-xl w-[75%] mx-auto">
        <div className="flex w-full items-start justify-between">
          <Image src={quotes} alt="img" />
          <div className="pl-12">
            <p className="font-[400] text-[14px]">
            &quot;Every session is phenomenal and incredibly valuable... it&apos;s like
              discovering hidden treasures! I cannot emphasize enough how
              fortunate we all are to have you as our mentor for the Digital
              Marketing course. your expertise in SEO and SEM has been
              incredibly enlightening. Thank you. I express my sincere gratitude
              to you for being an exceptional mentor!!
            </p>
            <p className="pt-2">
              Divakar <br />{" "}
              <span className="font-light text-[14px]">Auditor</span>
            </p>
          </div>
        </div>
      </li>
    </div>,
  ];

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex justify-center lg:w-[60%] lg:items-center  w-[100%] mx-auto min-h-[350px]">
      <button
        className="absolute left-1 top-1/2 transform -translate-y-1/2 focus:outline-none bg-[white] shadow-lg rounded-3xl p-2"
        onClick={goToPrevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m276.846-460 231.693 231.692L480-200 200-480l280-280 28.539 28.308L276.846-500H760v40H276.846Z" />
        </svg>
      </button>
      <div className="overflow-hidden flex transition-transform duration-500 ease-in-out transform translate-x-[calc(-100%*{currentImageIndex})]">
        <div className="flex items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index === currentImageIndex ? "block" : "hidden"
              }`}
            >
              {image}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-1 top-1/2 transform -translate-y-1/2 focus:outline-none bg-[white] shadow-lg rounded-3xl p-2"
        onClick={goToNextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M683.154-460H200v-40h483.154L451.461-731.692 480-760l280 280-280 280-28.539-28.308L683.154-460Z" />
        </svg>
      </button>
    </div>
  );
};

export default SlidingContent;
