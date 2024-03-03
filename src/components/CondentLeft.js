"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import leftImage from "../../public/content/leftImage.png";

const CondentLeft = () => {
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
    <div className="flex  w-[85%] rounded-tr-[200px] rounded-br-[200px] bg-gradient-to-r from-[#D5A142] via-[#A59F78] to-[#C0CDCB]">
      <div className="w-[30%]">
        <Image src={leftImage} alt="img" className="pl-[55px] mt-[25px]" />
      </div>
      <div className="w-[63%] mx-auto py-[30px]">
        <h2 className="text-[36px] font-[700]">
          Best Investment Ever <br /> 90% of college students
        </h2>
        <p className="font-[400] text-[16px]">
          who complete this course get jobs in tech roles
        </p>
        <div className="flex pt-[36px]">
          <div className="border-[1px] border-[white] min-w-[310px] items-center rounded-[80px] flex bg-gradient-to-r py-[24px] px-[36px] from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.04)]">
            <h5 className="text-[48px] font-[800]">₹{Math.round(number1 * 10) / 10}</h5>
            <div className="px-2">
                <p className="text-[24px] font-[600]">LPA</p>
                <p className="text-[#666666] text-[14px] font-[400]">Average Salary</p>
            </div>
          </div>
          <div className="border-[1px] border-[white] min-w-[310px]  mx-3 items-center rounded-[80px] flex bg-gradient-to-r py-[24px] px-[36px] from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.04)]">
            <h5 className="text-[48px] font-[800]">{number2}x</h5>
            <div className="px-2">
                <p className="text-[#666666] text-[14px] font-[400]">Fees Recovered <br/>Quickly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CondentLeft;
