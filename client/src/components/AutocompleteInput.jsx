import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const icons = {
  mapLocationDot: faMapLocationDot,
};

const AutocompleteInput = ({ placeholder, leftIcon }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (inputValue !== "") {
      axios
        .get(
          `https://us1.locationiq.com/v1/autocomplete.php?key=${
            import.meta.env.VITE_LOCATIONIQ_KEY
          }&q=${inputValue}&format=json&limit=5&accept-language=es`,
        )
        .then(response => {
          const options = response.data.map(item => item.display_name);
          setOptions(options);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [inputValue]);

  const handleOptionClick = option => {
    setInputValue(option);
    setFocused(false);
  };

  return (
    <div
      className={`flex w-full items-center gap-2.5 rounded border-2 border-neutral-200 bg-white p-2 ${
        isFocused ? "border-green-400" : ""
      } relative`}
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
        type="text"
        className="w-full flex-grow text-neutral-800 outline-none placeholder:font-semibold placeholder:text-neutral-300"
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {isFocused && inputValue !== "" && (
        <div className="absolute left-0 top-full z-10 mt-2 w-full rounded border border-neutral-200 bg-white shadow-lg">
          {options.map(option => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer p-2 text-neutral-800 hover:bg-neutral-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
