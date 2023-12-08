"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function HowTo() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className='relative'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0 bg-gray-100 pointer-events-none mb-16'
        aria-hidden='true'
      ></div>
      <div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-12 md:pt-20'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h1 className='h2 mb-4'>How to use?</h1>
            <p className='text-xl text-gray-600'>
              You can make your assets available in 3 easy steps
            </p>
          </div>

          {/* Section content */}
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            {/* Content */}
            <div
              className=' md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
              data-aos='fade-right'
            >
              {/* Tabs buttons */}
              <div className='mb-3 md:mb-0 flex flex-col md:flex-row'>
                <a
                  className={`flex-1 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 md:mb-0 md:mr-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      1. Login to dashboard
                    </div>
                    <div className='text-gray-600'>
                      Depoist your funds in 1 chain on the dashboard. your funds
                      will always stay here. It won't be bridged when you are
                      making the transaction
                    </div>
                  </div>
                </a>
                <a
                  className={`flex-1 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 md:mb-0 md:mr-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      2. Install the extension
                    </div>
                    <div className='text-gray-600'>
                      Extension will modify the RPC calls and tell the the dapp
                      that you have funds
                    </div>
                  </div>
                </a>
                <a
                  className={`flex-1 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 md:mb-0 md:mr-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      3. Use the dapp as usual
                    </div>
                    <div className='text-gray-600'>
                      When you are making a transaction, funds(ERC20) for the
                      transaction will be sponsored by us and at the end of the
                      month you need to settle the bill for all the transactions
                      on different chain
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
