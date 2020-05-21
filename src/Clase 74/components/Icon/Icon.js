import React from "react";
import { FaHome, FaHeart, FaArrowLeft, FaReact } from "react-icons/fa";
import styles from "./icon.module.scss";

const ICONS = {
  home: FaHome,
  heart: FaHeart,
  arrow: FaArrowLeft,
  react: FaReact,
};

const Icon = ({ name, color = "primary", size = "md", ...props }) => {
  const SelectedIcon = ICONS[name];
  return (
    <SelectedIcon
      className={`${styles[`size-${size}`]} ${styles[`color-${color}`]}`}
      {...props}
    />
  );
};

export default Icon;
