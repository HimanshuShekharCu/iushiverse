import React, { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed = ({ url }: InstagramEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract shortcode from Instagram URL
  // Supports both /reel/ and /p/ formats, with or without username
  const extractShortcode = (url: string): string | null => {
    // Pattern 1: instagram.com/{username}/reel/{shortcode}/
    const reelMatchWithUser = url.match(
      /instagram\.com\/[^/]+\/reel\/([^/?]+)/
    );
    if (reelMatchWithUser) return reelMatchWithUser[1];

    // Pattern 2: instagram.com/reel/{shortcode}/
    const reelMatch = url.match(/instagram\.com\/reel\/([^/?]+)/);
    if (reelMatch) return reelMatch[1];

    // Pattern 3: instagram.com/{username}/p/{shortcode}/
    const postMatchWithUser = url.match(/instagram\.com\/[^/]+\/p\/([^/?]+)/);
    if (postMatchWithUser) return postMatchWithUser[1];

    // Pattern 4: instagram.com/p/{shortcode}/
    const postMatch = url.match(/instagram\.com\/p\/([^/?]+)/);
    if (postMatch) return postMatch[1];

    return null;
  };

  const shortcode = extractShortcode(url);

  useEffect(() => {
    if (!shortcode || !containerRef.current) return;

    // Load Instagram embed script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Create blockquote element for Instagram embed
    const blockquote = document.createElement("blockquote");
    blockquote.className = "instagram-media";
    blockquote.setAttribute(
      "data-instgrm-permalink",
      `https://www.instagram.com/reel/${shortcode}/`
    );
    blockquote.setAttribute("data-instgrm-version", "14");
    blockquote.style.background = "#FFF";
    blockquote.style.border = "0";
    blockquote.style.borderRadius = "3px";
    blockquote.style.margin = "1px";
    blockquote.style.maxWidth = "100%";
    blockquote.style.minWidth = "326px";
    blockquote.style.padding = "0";
    blockquote.style.width = "99.375%";

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(blockquote);

    // Process Instagram embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const checkInstgrm = setInterval(() => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          clearInterval(checkInstgrm);
        }
      }, 100);
    }
  }, [shortcode]);

  if (!shortcode) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded">
        <p className="text-gray-500">Invalid Instagram URL</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[400px] flex items-center justify-center bg-gray-100 rounded overflow-hidden"
    />
  );
};

// Extend Window interface for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default InstagramEmbed;
