import Image from 'next/image'
import c1 from "../../public/company/1.svg"
import c8 from "../../public/company/10.svg"
import c2 from "../../public/company/2.svg"
import c3 from "../../public/company/3.svg"
import c4 from "../../public/company/4.svg"
import c5 from "../../public/company/5.svg"
import c6 from "../../public/company/6.svg"
import c7 from "../../public/company/9.svg"
const ComapnyScroll = () => {
  return (
    <>
    <div className="flex overflow-hidden space-x-14 w-[92%] mx-auto">
          <div className="flex space-x-14 animate-loop-scroll">
            <Image
              loading="lazy"
              src={c1}
              className="max-w-none  "
              alt="Image 1"
            />
            <Image
              loading="lazy"
              src={c2}
              className="max-w-none"
              alt="Image 2"
            />
            <Image
              loading="lazy"
              src={c3}
              className="max-w-none"
              alt="Image 3"
            />
            <Image
              loading="lazy"
              src={c4}
              className="max-w-none"
              alt="Image 4"
            />
            <Image
              loading="lazy"
              src={c5}
              className="max-w-none"
              alt="Image 5"
            />
            <Image
              loading="lazy"
              src={c6}
              className="max-w-none"
              alt="Image 6"
            />
            <Image
              loading="lazy"
              src={c7}
              className="max-w-none"
              alt="Image 7"
            />
            <Image
              loading="lazy"
              src={c8}
              className="max-w-none"
              alt="Image 8"
            />
          </div>
          <div
            className="flex space-x-14 animate-loop-scroll"
            aria-hidden="true"
          >
            <Image
              loading="lazy"
              src={c1}
              className="max-w-none"
              alt="Image 1"
            />
            <Image
              loading="lazy"
              src={c2}
              className="max-w-none"
              alt="Image 2"
            />
            <Image
              loading="lazy"
              src={c3}
              className="max-w-none"
              alt="Image 3"
            />
            <Image
              loading="lazy"
              src={c4}
              className="max-w-none"
              alt="Image 4"
            />
            <Image
              loading="lazy"
              src={c5}
              className="max-w-none"
              alt="Image 5"
            />
            <Image
              loading="lazy"
              src={c6}
              className="max-w-none"
              alt="Image 6"
            />
            <Image
              loading="lazy"
              src={c7}
              className="max-w-none"
              alt="Image 7"
            />
            <Image
              loading="lazy"
              src={c8}
              className="max-w-none"
              alt="Image 8"
            />
          </div>
        </div>
    </>
  )
}

export default ComapnyScroll