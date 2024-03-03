import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const FaqComponent = () => {
  return (
    <div className="px-[60px] flex w-full justify-between">
      <div className="w-[25%]">
        <h2 className="text-[36px] font-[700]">Still Have Doubts?</h2>
        <p className="font-[400] text-[15px] py-3">
          We have answered some of the Frequent Questions for you
        </p>
      </div>
      <div className="w-[70%]">
        <div className="w-full">
          <div className="mx-auto w-[70%] rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="font-[500] text-[18px]">
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
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="font-[500] text-[18px] pt-2">
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
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
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
