import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import YoutubeEmbed from "./YoutubeEmbed";

export const Hero = ({ userData }: any) => {
  const heroImage = userData?.media?.url || "/icons/iushi.jpeg";
  const petname = userData?.petname || "IUshi";
  const profession =
    userData?.profession || "Independent Content Creator & Brand Promoter";

  return (
    <section className=" col-span-10 col-start-2 col-end-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 max-w-md mx-auto md:mx-0 leading-tight">
              Meet {petname}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-3 font-light">
              {profession}
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              I create aesthetic, lifestyle and trend-based reels that help
              brands grow with real, organic reach. From fitness clubs to
              jewellery brands, my content consistently crosses 25k+ views.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
              <Link href="/portfolio" passHref>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm md:text-base font-light shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300">
                  View Portfolio
                </button>
              </Link>
              <Link href="/contacts" passHref>
                <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg text-sm md:text-base font-light hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Work With Me
                </button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-700 justify-center md:justify-start">
              <div>
                <div className="font-semibold text-lg md:text-xl">25k+</div>
                <div className="text-xs md:text-sm">Organic Views</div>
              </div>
              <div>
                <div className="font-semibold text-lg md:text-xl">1400+</div>
                <div className="text-xs md:text-sm">Instagram Followers</div>
              </div>
              <div>
                <div className="font-semibold text-lg md:text-xl">Multiple</div>
                <div className="text-xs md:text-sm">Brand Collaborations</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full max-w-md order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-sm rounded-2xl overflow-hidden mr-0 md:mr-8">
              {userData?.media?.type === "image" ? (
                <Image
                  src={heroImage}
                  alt={`${petname} - ${profession}`}
                  width={500}
                  height={667}
                  objectFit="cover"
                  priority
                  className="rounded-2xl w-full h-auto"
                />
              ) : (
                <YoutubeEmbed embedId={userData?.media?.url} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
