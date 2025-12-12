import { initializeApp, getApp } from "firebase/app";
import {
  RemoteConfig,
  getRemoteConfig,
  getString,
  isSupported as isRemoteConfigSupproted,
} from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";
import { useEffect, useState } from "react";
import { data as mockData } from "../mock/mock";

// Helper function to get default data with Instagram reels
const getDefaultData = () => [
  {
    type: "userData",
    petname: mockData.name,
    profession: mockData.job,
    media: {
      type: "image",
      url:
        mockData.heroImage ||
        "https://res.cloudinary.com/doxkfuxtg/image/upload/v1707411138/Web_2_yme4yu.png",
    },
  },
  {
    type: "media",
    data: mockData.instagramReels || [],
  },
  {
    type: "bio",
    media: {
      type: "image",
      url: mockData.bioImage || "/icons/iushi.jpeg",
    },
    data: mockData.bioData || {
      para1:
        "I'm Ayushi, a social media creator focused on aesthetic, lifestyle, and trend-based content.",
      para2:
        "I've collaborated with lifestyle, fitness, and jewelry brands, delivering reels that consistently reach 25k+ organic views.",
      para3:
        "I love turning simple ideas into engaging visuals through thoughtful editing, trend research, and strategic posting. My goal is to help brands grow their online presence with content that feels real, creative, and visually appealing.",
    },
  },
];

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCtuGHH7W7-QLGpoXk4fiKI8B3PRCBLaiI",
    authDomain: "mycall-portfolio.firebaseapp.com",
    projectId: "mycall-portfolio",
    storageBucket: "mycall-portfolio.appspot.com",
    messagingSenderId: "426221604667",
    appId: "1:426221604667:web:45f8d52e1cc44de108f11e",
    measurementId: "G-3BL6XQTSTL",
  };

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Initialize Firebase app (or get existing instance)
    let app;
    try {
      app = initializeApp(firebaseConfig);
    } catch (error: any) {
      // App might already be initialized, try to get it
      if (error.code === "app/duplicate-app") {
        app = getApp();
      } else {
        console.log("Firebase initialization error, using mock data:", error);
        // Fall back to mock data if Firebase initialization fails
        setData(getDefaultData());
        return;
      }
    }

    // Try to use Remote Config, but fall back to mock data if it fails
    isRemoteConfigSupproted()
      .then((supported) => {
        if (supported) {
          try {
            const remoteConfig = getRemoteConfig(app);
            remoteConfig.settings.minimumFetchIntervalMillis = 10000;

            remoteConfig.defaultConfig = {
              configData: JSON.stringify(getDefaultData()),
            };

            fetchAndActivate(remoteConfig)
              .then(() => {
                try {
                  const titleData = JSON.parse(
                    getString(remoteConfig, "configData")
                  );
                  setData(titleData);
                } catch (parseError) {
                  console.log("Error parsing remote config data");
                  // Fall back to mock data
                  setData(getDefaultData());
                }
              })
              .catch((err) => {
                console.log("Error fetching remote config, using mock data");
                // Fall back to mock data
                setData(getDefaultData());
              });
          } catch (error) {
            console.log("Remote Config not available, using mock data");
            // Fall back to mock data
            setData(getDefaultData());
          }
        } else {
          // Remote Config not supported, use mock data
          setData(getDefaultData());
        }
      })
      .catch((error) => {
        console.log("Error checking Remote Config support, using mock data");
        // Fall back to mock data
        setData(getDefaultData());
      });
  }, []);

  return { data };
};
