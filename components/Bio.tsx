import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export const Bio = ({ bioData }: { bioData: any }) => {
  const defaultBio = {
    para1:
      "I'm Ayushi, a social media creator focused on aesthetic, lifestyle, and trend-based content.",
    para2:
      "I've collaborated with lifestyle, fitness, and jewelry brands, delivering reels that consistently reach 25k+ organic views.",
    para3:
      "I love turning simple ideas into engaging visuals through thoughtful editing, trend research, and strategic posting. My goal is to help brands grow their online presence with content that feels real, creative, and visually appealing.",
  };

  const bioContent = bioData?.data || defaultBio;
  const bioImage = bioData?.media?.url || "/icons/iushi.jpeg";

  return (
    <section
      className="
        mb-16 md:mb-24          // extra space above bottom viewport
        col-span-10 col-start-2 col-end-12
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Side-by-side layout: Image on left, Content on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section - Left Side */}
          <div className="order-2 md:order-1 w-full">
            <div className="w-full rounded-2xl overflow-hidden block">
              <Image
                src={bioImage}
                alt="Ayushi - Social Media Creator"
                width={500}
                height={667}
                className="w-full h-auto object-cover block"
                priority
              />
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <Fade cascade>
              <h1
                className="
                  text-3xl md:text-4xl lg:text-5xl
                  font-light text-gray-800 mb-6 leading-tight
                  break-normal                 // don't break words
                  max-w-xl md:max-w-2xl        // control line length
                  mx-auto md:mx-0
                "
              >
                {bioContent.para1}
              </h1>

              <p
                className="
                  text-lg md:text-xl text-gray-600 font-light mb-6 leading-relaxed
                  break-normal
                  max-w-xl md:max-w-2xl
                  mx-auto md:mx-0
                "
              >
                {bioContent.para2}
              </p>

              <p
                className="
                  text-base md:text-lg text-gray-600 font-light mb-8 leading-relaxed
                  break-normal
                  max-w-xl md:max-w-2xl
                  mx-auto md:mx-0
                "
              >
                {bioContent.para3}
              </p>
            </Fade>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2">
                  25k+
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Organic Views
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2">
                  Multiple
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Brand Collaborations
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2">
                  Creative
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Content Strategy
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center md:text-left">
              <Link href="/contact" passHref>
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-10 py-4 rounded-lg text-base md:text-lg font-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
