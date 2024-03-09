import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const FaqComponent = () => {
  return (
    <div className="lg:px-[60px] px-[20px] lg:flex w-full justify-between">
      <div className="lg:w-[25%]">
        <h2 className="lg:text-[36px] text-[20px] font-[700]">
          Still Have Doubts?
        </h2>
        <p className="font-[400] text-[15px] py-3">
          We have answered some of the Frequent Questions for you
        </p>
      </div>
      <div className="lg:w-[70%]">
        <div className="w-full">
          <div className="lg:mx-auto lg:w-[70%] rounded-2xl bg-white lg:p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="font-[500] lg:text-[18px] text-[13px]">
                      Q1. What are examples of digital learning solutions ?
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-4 lg:text-sm text-[11px] text-gray-500">
                      Examples of digital marketing solutions include social
                      media marketing, search engine optimization (SEO),
                      pay-per-click advertising (PPC), email marketing, content
                      marketing, influencer marketing, and mobile marketing.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="font-[500] lg:text-[18px] text-[13px] pt-2">
                      Q2. What is The Best Course in Digital Marketing ?
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-4 lg:text-sm text-[11px] text-gray-500">
                      The course offered by Green Technologies has been widely
                      recognized as the premier choice in the field of digital
                      marketing. It has consistently earned acclaim and
                      accolades for its comprehensive curriculum, expert
                      guidance, and outstanding results, making it the top-rated
                      option among all available digital marketing courses.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="font-[500] lg:text-[18px] text-[13px] pt-2">
                      Q3. What Qualification do we need for Digital Marketing ?
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-4 lg:text-sm text-[11px] text-gray-500">
                      Qualifications for digital marketing typically include a
                      bachelor&apos;s degree in marketing, communications, or a
                      related field. However, practical experience,
                      certifications, and a strong understanding of digital
                      platforms are also valued.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="font-[500] lg:text-[18px] text-[13px] pt-2">
                      Q4. Is Digital Marketing Easy ?
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-4 lg:text-sm text-[11px] text-gray-500">
                      Digital marketing can be challenging due to its dynamic
                      nature and the need for constant learning. However, with
                      dedication, relevant skills, and staying updated with
                      industry trends, success is achievable.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="font-[500] lg:text-[18px] text-[13px] pt-2">
                      Q5. What is The Salary of the Digitral Marketer ?
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-4 lg:text-sm text-[11px] text-gray-500">
                      Digital marketing salaries vary based on location,
                      experience, and specific roles. Entry-level positions may
                      start around 10,000 annually, while senior roles can earn
                      More than a Lakh, with the potential for higher earnings
                      based on performance and expertise.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
