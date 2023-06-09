import React, { useState } from "react";
import Button from "../Ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";

const icons = {
  heart: faHeart,
  xmark: faXmark,
};

const tagColors = ["bg-cyan-500", "bg-red-500", "bg-amber-500"];

const InputTags = ({ placeholder, leftIcon, tags, setTags }) => {
  const [isFocused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleAddTag = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputValue("");
  };

  const handleDeleteTag = tagToRemove => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleAddTag();
    }
  };

  return (
    <div className="flex w-full flex-col gap-y-4">
      <div className="flex flex-col gap-y-1">
        <div
          className={`relative flex items-center gap-2.5 rounded p-2 ${
            isFocused
              ? "border-2 border-green-400"
              : "border-2 border-neutral-200"
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
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full flex-grow text-neutral-800 outline-none placeholder:font-semibold placeholder:text-neutral-300"
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 transform">
            <Button iconName="plus" iconOnly onClick={handleAddTag} />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Ej: gastronomía, arte, naturaleza.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 rounded-md px-2 py-1 text-sm font-semibold text-white ${
              tagColors[index % tagColors.length]
            }`}
          >
            <span>{tag}</span>
            <FontAwesomeIcon
              icon={icons.xmark}
              className="cursor-pointer text-lg"
              onClick={() => handleDeleteTag(tag)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputTags;
