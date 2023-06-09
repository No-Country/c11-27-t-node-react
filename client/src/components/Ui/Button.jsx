import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faKey,
  faTrashCan,
  faMapLocationDot,
  faCalendarDays,
  faHeart,
  faPlus,
  faXmark,
  faCalendarDay,
  faLocationDot,
  faAngleDown,
  faAngleUp,
  faArrowRight,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  envelope: faEnvelope,
  key: faKey,
  eye: faEye,
  eyeSlash: faEyeSlash,
  user: faUser,
  circleUser: faCircleUser,
  trashCan: faTrashCan,
  mapLocationDot: faMapLocationDot,
  calendarDays: faCalendarDays,
  heart: faHeart,
  plus: faPlus,
  xmark: faXmark,
  calendarDay: faCalendarDay,
  locationDot: faLocationDot,
  angleDown: faAngleDown,
  angleUp: faAngleUp,
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
  bars: faBars,
};

const Button = ({
  label,
  type = "button",
  onClick,
  iconName,
  iconPosition = "left",
  variant = "default",
  color = "default",
  disabled = false,
  fullWidth = false,
  iconOnly = false,
}) => {
  const baseStyle =
    "flex items-center justify-center gap-2 rounded text-sm font-semibold transition-colors duration-200 ease-in-out focus:outline-none";

  let buttonColor;
  let textStyle;

  switch (color) {
    case "red":
      buttonColor =
        "bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 disabled:bg-gray-200 disabled:text-gray-400";
      textStyle =
        "text-red-500 hover:text-red-600 focus:text-red-700 disabled:text-gray-400";
      break;
    case "gray":
      buttonColor =
        "bg-gray-600 text-white hover:bg-gray-700 focus:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400";
      textStyle =
        "text-gray-600 hover:text-gray-700 focus:text-gray-800 disabled:text-gray-400";
      break;
    case "blue":
      buttonColor =
        "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400";
      textStyle =
        "text-blue-500 hover:text-blue-600 focus:text-blue-700 disabled:text-gray-400";
      break;
    case "white":
      buttonColor =
        "bg-white text-neutral-900 hover:bg-gray-200 focus:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-400";
      textStyle =
        "text-neutral-900 hover:text-gray-800 focus:text-gray-800 disabled:text-gray-400";
      break;
    default:
      buttonColor =
        "bg-green-400 text-white hover:bg-green-500 focus:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400";
      textStyle =
        "text-green-400 hover:text-green-500 focus:text-green-600 disabled:text-gray-400";
  }

  const disabledStyle = "cursor-not-allowed";
  const iconOnlyStyle = "p-1";
  const noPaddingStyle = variant === "text" ? "" : "px-4 py-2";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${iconOnly ? iconOnlyStyle : noPaddingStyle} ${
        variant === "text" ? textStyle : buttonColor
      } ${disabled ? disabledStyle : ""} ${fullWidth ? "w-full" : ""}`}
    >
      {iconName && (iconPosition === "left" || iconOnly) && (
        <FontAwesomeIcon icon={icons[iconName]} className="text-lg" />
      )}
      {!iconOnly && label}
      {iconName && iconPosition === "right" && !iconOnly && (
        <FontAwesomeIcon icon={icons[iconName]} className="text-lg" />
      )}
    </button>
  );
};

export default Button;
