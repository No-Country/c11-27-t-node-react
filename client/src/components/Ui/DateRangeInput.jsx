import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangeInput.css";
import { format, addDays } from "date-fns";
import es from "date-fns/locale/es";

const icons = {
  calendarDays: faCalendarDays,
};

const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={`flex w-full items-center gap-2.5 rounded border-2 ${
        isFocused ? "border-green-400" : "border-neutral-200"
      } bg-white p-2`}
      onClick={onClick}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <FontAwesomeIcon
        icon={icons.calendarDays}
        className={`text-base ${
          isFocused ? "text-green-500" : "text-neutral-300"
        }`}
      />
      <input
        type="text"
        className="w-full flex-grow text-neutral-800 outline-none placeholder:font-semibold placeholder:text-neutral-300"
        value={value}
        placeholder={placeholder}
        ref={ref}
        readOnly
      />
    </div>
  );
});

const DateRangeInput = ({
  placeholder,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const dateToString = date => {
    return date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: es }) : "";
  };

  let inputVal = "";

  if (startDate && endDate) {
    inputVal = `${dateToString(startDate)} - ${dateToString(endDate)}`;
  } else if (!startDate && !endDate) {
    inputVal = "";
  }

  const maxEndDate = startDate ? addDays(startDate, 4) : null;

  return (
    <DatePicker
      selected={startDate}
      onChange={dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      placeholderText={placeholder}
      customInput={<CustomInput value={inputVal} placeholder={placeholder} />}
      dateFormat="d 'de' MMMM 'de' yyyy"
      minDate={startDate}
      maxDate={maxEndDate}
    />
  );
};

export default DateRangeInput;
