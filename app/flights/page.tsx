"use client";

import Banner from "@/components/banner";
import MultipleCity from "@/components/multiple-city";
import OneWay from "@/components/one-way";
import RoundTrip from "@/components/round-trip";
import Tabs from "@/components/tabs";
import Image from "next/image";

import { useState } from "react";

export default function Page() {
  const [currentType, setCurrentType] = useState("round");

  return (
    <div className="w-full">
      {/* <h1 className="text-3xl font-bold">Search flights</h1> */}
      <Banner />
      <Tabs
        currentTab={currentType}
        onChangeTab={(changeType: string) => setCurrentType(changeType)}
      />

      <section className="flex items-center gap-4">
        {currentType === "round" && <RoundTrip />}
        {currentType === "one" && <OneWay />}
        {currentType === "multiple" && <MultipleCity />}

        <div className="info items-center w-1/2"></div>
      </section>

      <section className="bg-white dark:bg-gray-900 border-2 rounded-md mt-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Get Great Flight Prices from Our Travel Experts 24x7x365
          </h1>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Call 1-213-225-9867
          </button>
        </div>
      </section>

      <h2 className="text-4xl font-bold dark:text-white mt-8 mb-8">
        Visit Popular Destinations
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <Image
            src="https://cdn.airfuture.com/img/bg/BOS_1.jpg"
            alt=""
            className="h-auto w-full rounded-lg"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="https://cdn.airfuture.com/img/bg/MIA_2.jpg"
            alt=""
            className="h-auto w-full rounded-lg"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="https://cdn.airfuture.com/img/bg/SEA_2.jpg"
            alt=""
            className="h-auto w-full rounded-lg"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="https://cdn.airfuture.com/img/bg/LAS_2.jpg"
            alt=""
            className="h-auto w-full rounded-lg"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="https://cdn.airfuture.com/img/bg/ATL_2.jpg"
            alt=""
            className="h-auto w-full rounded-lg"
            width={100}
            height={100}
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold dark:text-white mt-8 mb-8">
        Customer Reviews (Last Updated on Feb 4, 2025)
      </h2>

      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <blockquote className="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
              <p>
                &ldquo;Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.&rdquo;
              </p>
            </blockquote>
          </div>
          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <blockquote className="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
              <p>
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <blockquote className="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
              <p>
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <blockquote className="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
              <p>
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <blockquote className="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
              <p>
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
