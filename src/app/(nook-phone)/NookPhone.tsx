"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Camera from "@/components/Camera";
import NookMiles from "@/components/NookMiles";
import Critterpedia from "@/components/Critterpedia";
import DIYRecipes from "@/components/DIYRecipes";
import CustomDesigns from "@/components/CustomDesigns";
import Map from "@/components/Map";
import ChatLog from "@/components/ChatLog";
import Passport from "@/components/Passport";
import BestFriendsList from "@/components/BestFriends";
import styles from "./NookPhone.module.css";

export default function NookPhone() {
  const [time, setTime] = useState("12:00AM");
  const [title, setTitle] = useState("Welcome!");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.nookShell} id="nookphone">
      <div className={styles.details}>
        <Image src="/svgs/wifi.svg" alt="wifi" width={79} height={27} />
        <span id="time">{time}</span>
        <Image src="/svgs/location.svg" alt="location" width={36} height={36} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.apps}>
        <div
          className="appContainer"
          data-active={title === "Camera"}
          onMouseEnter={() => setTitle("Camera")}
        >
          <Camera />
        </div>
        <div
          className="appContainer"
          data-active={title === "Nook Miles+"}
          onMouseEnter={() => setTitle("Nook Miles+")}
        >
          <NookMiles />
        </div>
        <div
          className="appContainer"
          data-active={title === "Critterpedia"}
          onMouseEnter={() => setTitle("Critterpedia")}
        >
          <Critterpedia />
        </div>
        <div
          className="appContainer"
          data-active={title === "DIY Recipes"}
          onMouseEnter={() => setTitle("DIY Recipes")}
        >
          <DIYRecipes />
        </div>
        <div
          className="appContainer"
          data-active={title === "Custom Designs"}
          onMouseEnter={() => setTitle("Custom Designs")}
        >
          <CustomDesigns />
        </div>
        <div
          className="appContainer"
          data-active={title === "Map"}
          onMouseEnter={() => setTitle("Map")}
        >
          <Map />
        </div>
        <div
          className="appContainer"
          data-active={title === "Chat Log"}
          onMouseEnter={() => setTitle("Chat Log")}
        >
          <ChatLog />
        </div>
        <div
          className="appContainer"
          data-active={title === "Passport"}
          onMouseEnter={() => setTitle("Passport")}
        >
          <Passport />
        </div>
        <div
          className="appContainer"
          data-active={title === "Best Friends List"}
          onMouseEnter={() => setTitle("Best Friends List")}
        >
          <BestFriendsList />
        </div>
      </div>
      <div className={styles.pages} />
      {/* eslint-disable-next-line @next/next/no-img-element -- hidden reference overlay; sizing from CSS */}
      <img
        className={styles.screenshot}
        src="/screenshot.png"
        alt="nook phone screenshot"
      />
    </div>
  );
}
