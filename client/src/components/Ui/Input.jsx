import React, { useState } from "react";
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
};

const Input = ({
  placeholder,
  leftIcon,
  rightIcon,
  type = "text",
  value,
  setValue,
  disabled = false,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  const handleEyeClick = () => {
    if (!disabled) {
      setPasswordVisible(!isPasswordVisible);
    }
  };

  const disabledStyle =
    "cursor-not-allowed bg-neutral-200 border-neutral-300 text-neutral-300";
  const enabledStyle = isFocused
    ? "border-2 border-green-400 text-neutral-800 bg-white"
    : "border-2 border-neutral-200 text-neutral-800 bg-white";

  const iconColor = disabled
    ? "text-neutral-300"
    : isFocused
    ? "text-green-500"
    : "text-neutral-300";

  return (
    <div
      className={`flex w-full items-center gap-2.5 rounded p-2 ${
        disabled ? disabledStyle : enabledStyle
      }`}
    >
      {leftIcon && (
        <FontAwesomeIcon
          icon={icons[leftIcon]}
          className={`text-base ${iconColor}`}
        />
      )}
      <input
        type={inputType}
        className={`w-full flex-grow outline-none placeholder:font-semibold ${
          disabled
            ? "cursor-not-allowed bg-neutral-200 text-neutral-400"
            : "bg-white text-neutral-800"
        }`}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={event => {
          if (!disabled) {
            setValue(event.target.value);
          }
        }}
        disabled={disabled}
        required
      />
      {rightIcon && (
        <FontAwesomeIcon
          icon={
            type === "password"
              ? isPasswordVisible
                ? icons["eyeSlash"]
                : icons["eye"]
              : icons[rightIcon]
          }
          onClick={type === "password" ? handleEyeClick : null}
          className={`cursor-pointer text-base ${iconColor}`}
        />
      )}
    </div>
  );
};

export default Input;
