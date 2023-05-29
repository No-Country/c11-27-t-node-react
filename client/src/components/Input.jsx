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
};

const Input = ({
  placeholder,
  leftIcon,
  rightIcon,
  type = "text",
  value,
  setValue,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  const handleEyeClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      className={`flex w-full items-center gap-2.5 rounded p-2 ${
        isFocused ? "border-2 border-green-400" : "border-2 border-neutral-200"
      } bg-white`}
    >
      {leftIcon && (
        <FontAwesomeIcon
          icon={icons[leftIcon]}
          className={`text-base ${
            isFocused ? "text-green-500" : "text-neutral-300"
          }`}
        />
      )}
      <input
        type={inputType}
        className="w-full flex-grow text-neutral-800 outline-none placeholder:font-semibold placeholder:text-neutral-300"
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
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
          className={`cursor-pointer text-base ${
            isFocused ? "text-green-500" : "text-neutral-300"
          }`}
        />
      )}
    </div>
  );
};

export default Input;
