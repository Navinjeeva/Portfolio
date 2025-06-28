import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./navButton";

const Navigation = () => {
  const angleDegree = 360 / BtnList.length;

  return (
    <div className="w-full h-screen fixed flex items-center justify-center">
      <div className="flex items-center justify-center relative hover:pause animate-spin-slow group">
        {BtnList.map((btn, index) => {
          const angleRadian = (index * angleDegree * Math.PI) / 180; //sin and cos expects radian
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRadian)})`;
          const y = `calc(${radius} * ${Math.sin(angleRadian)})`;

          return (
            <NavButton
              key={index}
              x={x}
              y={y}
              label={btn.label}
              link={btn.link}
              icon={btn.icon}
              newTab={btn.newTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
