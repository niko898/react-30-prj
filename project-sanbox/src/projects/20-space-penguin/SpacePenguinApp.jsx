import React, { useState, useEffect } from "react";
import "./ship.css";
import Button from "../components/Button";
import SpaceShipObj from "./objects/SpaceShipObj";
import MoonObj from "./objects/MoonObj";
import PlanetObj from "./objects/PlanetObj";

import Ship from "./svg/space-ship-rocket-svgrepo-com.svg";
import Moon from "./svg/moon-svgrepo-com.svg";
import Planet from "./svg/planet-earth-svgrepo-com.svg";
import Penguin from "./svg/penguin-svgrepo-com.svg";

export default function SpacePenguinApp() {
  // const [shipAction, setShipAction] = useState();
  // const [transformScale, setTransformScale] = useState(200);

  const [shipProps, setShipProps] = useState({
    action: "",
    scale: 200,
  });

  const [shipType, setShipType] = useState(Ship);

  const startShip = () => {
    // setShipAction("fly");
    // setTransformScale(50);
    setShipProps({
      action: "fly",
      scale: 50,
    });
  };
  const landShip = () => {
    // setShipAction("land");
    // setTransformScale(200);
    setShipProps({
      action: "land",
      scale: 200,
    });
  };

  useEffect(() => {
    if(shipProps.action === "land"){
      setShipType(Penguin);
      setTimeout(() => {
        setShipType(Ship);
      }, 5000);
    }else{
      setShipType(Ship);
    }
  }, [shipProps.action]);

  return (
    <div className="space">
      <Button text="Lunch" btnClass={"btn-danger"} onClick={startShip} />
      <section className="env">
        <SpaceShipObj changeShip={shipType} scale={shipProps.scale} start={shipProps.action}/>
        <MoonObj Moon={Moon} />
        <PlanetObj Planet={Planet} />
      </section>
      <Button text="Land" btnClass={"btn-info"} onClick={landShip} />
    </div>
  );
}
