import * as React from "react";
import { useState } from "react";

import { ImageComponent } from "./ImageComponent";

import { Gallery } from "./Gallery";
import { images } from "./constants";
import YoutubeEmbed from "./YoutubeEmbed";
import { useFirebase } from "../hooks/useFirebase";

export const Showcase = ({
  mediaData,
  limit,
}: {
  mediaData: any;
  limit: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12">
        {limit && (
          <div className="flex flex-row items-center my-4">
            <span className="w-full h-0.5 bg-gray-400 mr-4"></span>
            <h1 className="text-4xl font-light text-gray-700">Showcase</h1>
            <span className="w-full h-0.5 bg-gray-400 ml-4"></span>
          </div>
        )}
        <main className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          {mediaData?.data?.map((img: any, index: number) => {
            return (
              <ImageComponent
                open={() => {
                  setIsGalleryOpen(true);
                  setCurrentIndex(index);
                }}
                type={img.type}
                key={index}
                url={img.url}
                label={img.label}
                description={img.description}
              />
            );
          })}
        </main>
      </section>
      {isGalleryOpen && (
        <Gallery
          currentIndex={currentIndex}
          close={() => {
            setIsGalleryOpen(false);
          }}
          list={mediaData.data}
        />
      )}
    </>
  );
};
