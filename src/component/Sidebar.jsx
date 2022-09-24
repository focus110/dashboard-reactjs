import React from "react";
import { Menu } from "./Data/Data";
import { Link } from "react-router-dom";
import rectem_logo from "../images/logo.png";

const Sidebar = () => {
  const links = Menu.map((item, i) => {
    return (
      <li key={i}>
        <Link className="flex items-center space-x-4" to="#">
          <span>{item.icon}</span>
          <h2>{item.title}</h2>
        </Link>
      </li>
    );
  });

  return (
    <div className="wrap__box hidden sm:block w-full sm:w-[20%] space-y-12 text-lg font-normal">
      <Link to="/">
        <img className="w-36" src={rectem_logo} alt="rectem_logo" />
      </Link>
      <ul className="space-y-16">{links}</ul>
    </div>
  );
};

export default Sidebar;
