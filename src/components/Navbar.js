import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../public/gtlogo.svg";

const Navbar = () => {
  const [clickedFeild, setClickedFeild] = useState("Home");
  const currentRoute = usePathname().split("#")[0];
  const [menuopen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuopen);
  };

  const handleClick = (section) => {
    setClickedFeild(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // window.location.reload();
    }
  };

  return (
    <nav className="w-full h-20 bg-[#F4FAFA]">
      <div className="flex justify-between items-center h-full  xl:w-[97%] w-full mx-auto">
        <div className="lg:px-8">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className={`${
                currentRoute === "/" ? "cursor-wait" : ""
              } cursor-pointer`}
            />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="hidden lg:flex justify-center items-center">
            <Link href="#">
              <li
                onClick={() => handleClick("Home")}
                className={`${
                  clickedFeild === "Home"
                    ? "text-[#033631] border-b-[2px] border-[#033631]"
                    : "text-[#666666]"
                } mx-6`}
              >
                Home
              </li>
            </Link>
            <Link href="#courses">
              <li
                onClick={() => handleClick("courses")}
                className={`${
                  clickedFeild === "courses"
                    ? "text-[#033631] border-b-[2px] border-[#033631]"
                    : "text-[#666666]"
                } mx-6`}
              >
                Courses
              </li>
            </Link>
            {/* <Link href="#training">

            <li
              onClick={() => handleClick("training")}
              className={`${
                clickedFeild === "training"
                  ? "text-[#033631] border-b-[2px] border-[#033631]"
                  : "text-[#666666]"
              } mx-6`}
            >
              Training Process
            </li>
            </Link> */}
            <Link href="#placement">
            <li
              onClick={() => handleClick("placement")}
              className={`${
                clickedFeild === "placement"
                  ? "text-[#033631] border-b-[2px] border-[#033631]"
                  : "text-[#666666]"
              } mx-6`}
            >
              Placement
            </li>
            </Link>
            <Link href="#testimonial">

            <li
              onClick={() => handleClick("testimonial")}
              className={`${
                clickedFeild === "testimonial"
                  ? "text-[#033631] border-b-[2px] border-[#033631]"
                  : "text-[#666666]"
              } mx-6`}
            >
              Testimonial
            </li>
            </Link>
            <Link href="#enquirenow" className="ml-2">
              <li className="bg-[#333333] text-[white] px-[10px] font-normal py-[8px] rounded-[21px]">
                Enquire Now
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden cursor-pointer pl-20 lg:pr-0 pr-4" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuopen
            ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-out duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="">
            <Link href="/">
              <li className="py-4 hover:border-b">Home</li>
            </Link>
            <Link href="#courses">
              <li
              onClick={() => handleClick("courses")}
              className={`${
                clickedFeild === "courses"
                  ? "text-[#033631] border-b-[2px] border-[#033631]"
                  : "text-[#666666]"
              }  py-4`}
              // className="py-4 hover:border-b"
              >Courses</li>
            </Link>
            {/* <Link href="#training">
              <li
              onClick={() => handleClick("training")}
              className={`${
                clickedFeild === "training"
                  ? "text-[#033631] border-b-[2px] border-[#033631]"
                  : "text-[#666666]"
              }  py-4`}
              >Training Process</li>
            </Link> */}
            <Link href="#placement">
              <li
               onClick={() => handleClick("placement")}
               className={`${
                 clickedFeild === "placement"
                   ? "text-[#033631] border-b-[2px] border-[#033631]"
                   : "text-[#666666]"
               }  py-4`}
              >Placement</li>
            </Link>
            <Link href="#testimonial">
              <li
              onClick={() => handleClick("testimonial")}
              className={`${
                clickedFeild === "testimonial"
                  ? "text-[#033631] border-b-[2px] border-[#033631]"
                  : "text-[#666666]"
              }  py-4`}
              >Testimonial</li>
            </Link>
            {/* <Link href="/">
              <li className="py-4 hover:border-b">Blogs</li>
            </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
