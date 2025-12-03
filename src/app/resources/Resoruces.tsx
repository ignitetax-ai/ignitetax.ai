"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Resources: React.FC = () => {
  const title1 = "How AI is Transforming Tax Preparation";
  const title2 = "Understanding Philippine Tax Laws";

  const [displayed1, setDisplayed1] = useState("");
  const [displayed2, setDisplayed2] = useState("");
  const [charIndex1, setCharIndex1] = useState(0);
  const [charIndex2, setCharIndex2] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (charIndex1 < title1.length) {
      timeout = setTimeout(() => {
        setDisplayed1((prev) => prev + title1[charIndex1]);
        setCharIndex1((prev) => prev + 1);
      }, 50);
    } else if (charIndex2 < title2.length) {
      // Delay before starting the second line
      timeout = setTimeout(
        () => {
          setDisplayed2((prev) => prev + title2[charIndex2]);
          setCharIndex2((prev) => prev + 1);
        },
        charIndex2 === 0 ? 700 : 50,
      ); // 700ms delay before second line starts
    } else {
      // Reset after a pause
      timeout = setTimeout(() => {
        setDisplayed1("");
        setDisplayed2("");
        setCharIndex1(0);
        setCharIndex2(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex1, charIndex2, title1, title2]);

  return (
    <section
      id="resources"
      className="bg-white flex flex-col items-center py-0 relative overflow-hidden"
    >
      {/* Top Torn Image */}
      <div className="w-full">
        <Image
          src="/backgrounds/Top.png"
          alt="Resources Top"
          width={1920}
          height={20}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center px-4 pb-24 relative ">
        <h2 className="text-4xl md:text-5xl text-gray-900 font-normal mb-5 pt-0">
          Resources
        </h2>
        <p className="italic text-gray-700 text-center mb-8 text-lg">
          Stay ahead in the world of taxation with IgniteTaxAI's rich resource
          library:
        </p>

        {/* Tax Updates */}
        <div className="mb-10 flex flex-col items-center">
          <span className="text-blue-600 font-medium text-lg">
            Tax Updates:
          </span>
          <span className="text-gray-700 text-base ml-2">
            Stay current with the latest BIR rulings, tax circulars, and
            regulatory changes.
          </span>
        </div>

        {/* Blog Highlight */}
        <div className="w-full max-w-4xl flex flex-col items-center ">
          <div className="w-full bg-blue-50 bg-opacity-60 border-8 border-blue-200 flex items-center px-8 py-6 mb-2">
            <span className="text-gray-900 text-5xl font-normal mr-6">
              Blog&nbsp;&nbsp;|
            </span>
            <span className="text-blue-600 text-base font-normal text-left">
              Insightful articles and expert analyses on Philippine tax trends,
              best practices, and AI applications in tax management.
            </span>
          </div>
        </div>

        {/* Blog Titles */}
        <div className="flex flex-col items-center gap-2 w-full pt-20 px-4 min-h-[7.5rem]">
          <h3 className="text-gray-900 text-3xl md:text-4xl text-center font-normal">
            {displayed1}
            <span className="animate-pulse">|</span>
          </h3>
          <h3
            className={`text-gray-900 text-3xl md:text-4xl text-center font-normal transition-opacity duration-300 ${
              displayed1.length === title1.length ? "opacity-100" : "opacity-0"
            }`}
            style={{ minHeight: "2.5rem" }} // ensures space is reserved
          >
            {displayed2}
            {displayed1.length === title1.length && (
              <span className="animate-pulse">|</span>
            )}
          </h3>
        </div>
      </div>

      {/* Bottom Torn Image */}
      <div className="w-full mt-0">
        <Image
          src="/backgrounds/bottom.png"
          alt="Resources Bottom"
          width={1920}
          height={50}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Resources;
