
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import leftImage from "../../public/content/rightImage.png";
const CondentRight = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
          setNumber1((prevNumber) => {
            const newNumber = prevNumber + 0.1;
            if (newNumber >= 1.8) {
              clearInterval(interval1);
              return 1.8;
            }
            return parseFloat(newNumber.toFixed(1)); // Ensure only 1 digit after decimal
          });
        }, 50); // Interval duration in milliseconds

        const interval2 = setInterval(() => {
          setNumber2((prevNumber) => {
            const newNumber = prevNumber + 1;
            if (newNumber >= 55) {
              clearInterval(interval2);
              return 55;
            }
            return newNumber;
          });
        }, 20); // Interval duration in milliseconds

        return () => {
          clearInterval(interval1);
          clearInterval(interval2);
        };
      }, []);
  return (
    <div className="flex  lg:w-[90%] ml-auto  lg:rounded-tl-[200px] lg:rounded-bl-[200px] bg-gradient-to-r from-[#F2E3C6] via-[#9C9D7C] to-[#1F473E]">

      <div className="lg:w-[65%] lg:ml-[90px] ml-[35px] md:w-[50%] w-[100%] justify-center  flex md:justify-end mx-auto py-[30px]">
        <div>
        <h2 className="lg:text-[36px] md:text-[28px] text-[24px] font-[700]">
          Best Investment Ever <br /> 90% of college students
        </h2>
        <p className="font-[400] text-[16px]">
          who complete this course get jobs in tech roles
        </p>
        <div className="lg:flex pt-[36px] justify-around  lg:ml-[0px]">
            <div className="border-[1px] border-[white] min-w-[310px] max-w-[205px]  items-center rounded-[80px] flex justify-around bg-gradient-to-r lg:py-[18px] py-[12px] lg:px-[30px] px-[18px] from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.04)]">
              <h5 className="text-[48px]  font-[800]">
                ₹{Math.round(number1 * 10) / 10}
              </h5>
              <div className="px-2">
                <p className="md:text-[24px] text-[12px] font-[600]">LPA</p>
                <p className="text-[#666666] text-[14px] font-[400]">
                  Average Salary
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[white] min-w-[310px] max-w-[205px]  lg:mx-3 mt-6 lg:mt-0 items-center rounded-[80px] flex justify-around bg-gradient-to-r lg:py-[24px] py-[16px] lg:px-[36px] px-[18px] from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.04)]">
              <h5 className="text-[48px] font-[800]">
                {number2}x
              </h5>
              <div className="px-2">
                <p className="text-[#666666] md:text-[14px] text-[12px] font-[400]">
                  Fees Recovered <br />
                  Quickly
                </p>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="md:w-[40%] lg:w-[50%] hidden md:flex items-end mx-auto">
        <Image src={leftImage} alt="img" className="pl-[55px] mt-[60px] hidden md:flex" />
      </div>
    </div>
  )
}

export default CondentRight