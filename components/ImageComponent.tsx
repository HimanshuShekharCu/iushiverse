import * as React from "react";
import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import InstagramEmbed from "./InstagramEmbed";

export interface ImageComponentProps {
  open: Function;
  url: string;
  label: string;
  type?: string;
  description: string;
}

const firebaseLoader = (props: any) => {
  return props.src.toString();
};

export const ImageComponent: React.SFC<ImageComponentProps> = (
  ImageComponentProps
) => {
  return (
    <>
      <div
        className="group relative m-0 p-0"
        onClick={() => {
          ImageComponentProps.open();
        }}
      >
        {ImageComponentProps.type === "image" ? (
          <Image
            loader={firebaseLoader}
            src={ImageComponentProps.url}
            alt={ImageComponentProps.label}
            width={600}
            height={600}
            priority={true}
            className="cursor-pointer object-cover w-full filter brightness-90 hover:brightness-110 transition-all duration-200"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/NXOmzdpgwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
          />
        ) : ImageComponentProps.type === "instagram" ? (
          <div className="cursor-pointer w-full h-full min-h-[400px]">
            <InstagramEmbed url={ImageComponentProps.url} />
          </div>
        ) : (
          <YoutubeEmbed embedId={ImageComponentProps.url} />
        )}
      </div>
    </>
  );
};
