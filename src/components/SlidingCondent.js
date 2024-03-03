"use client"
import Image from 'next/image';
import { useState } from 'react';
import quotes from '../../public/quotes.svg';

const SlidingContent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };

  return (
    <div className="flex w-full">
      <div className="w-2/12 flex items-center">
        <div className="w-full text-right">
          <button
            className="bg-[white] shadow-lg rounded-3xl p-2"
            onClick={handlePrevious}
            disabled={currentPage === 0}
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
        </div>
      </div>

      <div id="sliderContainer" className="w-full">
        <ul
          id="slider"
          className="flex justify-between w-[1100px] p-8 overflow-x-auto"
          style={{ transform: `translateX(-${currentPage * 1100}px)` }}
        >
          <li className="p-8 border rounded-xl w-[450px]">
            <div className="flex w-full items-start justify-between">
              <Image src={quotes} alt="img" />
              <div className="pl-12">
                <p className="font-[400] text-[14px]">
                  Every session is phenomenal and incredibly valuable... it's
                  like discovering hidden treasures! I cannot emphasize enough
                  how fortunate we all are to have you as our mentor for the
                  Digital Marketing course. your expertise in SEO and SEM has
                  been incredibly enlightening. Thank you. I express my sincere
                  gratitude to you for being an exceptional mentor!!
                </p>
                <p className="pt-2">
                  Divkar <br />{' '}
                  <span className="font-light text-[14px]">Auditor</span>
                </p>
              </div>
            </div>
          </li>
          <li className="p-8 border rounded-xl w-[450px]">
            <div className="flex w-full items-start justify-between">
              <Image src={quotes} alt="img" />
              <div className="pl-12">
                <p className="font-[400] text-[14px]">
                  Every session is phenomenal and incredibly valuable... it's
                  like discovering hidden treasures! I cannot emphasize enough
                  how fortunate we all are
                </p>
                <p className="pt-2">
                  Divkar <br />{' '}
                  <span className="font-light text-[14px]">Auditor</span>
                </p>
              </div>
            </div>
          </li>

          {/* Add more list items as needed */}
        </ul>
      </div>

      <div className="w-2/12 flex items-center">
        <div className="w-full text-left">
          <button
            className="bg-[white] shadow-lg rounded-3xl p-2"
            onClick={handleNext}
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
      </div>
    </div>
  );
};

export default SlidingContent;
