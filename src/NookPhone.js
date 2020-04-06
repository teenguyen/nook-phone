import React, { Fragment, useState, useEffect } from "react";
import { ReactComponent as Wifi } from "./svgs/details/wifi.svg";
import { ReactComponent as Location } from "./svgs/details/location.svg";
import { ReactComponent as Camera } from "./svgs/app-icons/camera-app.svg";
import { ReactComponent as NookMiles } from "./svgs/app-icons/nook-miles-app.svg";
import { ReactComponent as Critterpedia } from "./svgs/app-icons/critterpedia-app.svg";
import { ReactComponent as DIYRecipes } from "./svgs/app-icons/diy-recipes-app.svg";
import { ReactComponent as CustomDesigns } from "./svgs/app-icons/custom-designs-app.svg";
import { ReactComponent as Map } from "./svgs/app-icons/map-app.svg";
import { ReactComponent as ChatLog } from "./svgs/app-icons/chat-log-app.svg";
import { ReactComponent as Passport } from "./svgs/app-icons/passport-app.svg";
import { ReactComponent as BestFriendsList } from "./svgs/app-icons/best-friends-list-app.svg";
import "./icon-css/Camera.scss";
import "./icon-css/NookMiles.scss";
import "./icon-css/Critterpedia.scss";
import "./icon-css/DIYRecipes.scss";
import "./icon-css/CustomDesigns.scss";
import "./icon-css/Map.scss";
import "./icon-css/ChatLog.scss";
import "./icon-css/Passport.scss";
import "./icon-css/BestFriendsList.scss";
import "./NookPhone.scss";
import screenshot from "./screenshot.png";

export default function App() {
  let [time, setTime] = useState("12:00AM");
  let [title, setTitle] = useState("Welcome!");

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Fragment>
      <div id="details">
        <Wifi />
        <span id="time">{time}</span>
        <Location />
      </div>
      <div id="title">{title}</div>
      <div id="apps">
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
      <div id="pages"></div>
      <img id="screenshot" src={screenshot} alt={"nook phone screenshot"} />
    </Fragment>
  );
}
