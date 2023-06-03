import React from "react";
import DayCard from "../Ui/DayCard";

const Itinerary = ({ location, dateRange, itinerary }) => {
  return (
    <div className="flex grow flex-col gap-4 px-4 pb-4">
      <div className="flex flex-col gap-1">
        <div className="text-xl font-semibold text-neutral-800">{location}</div>
        <div className="text-base font-normal text-neutral-700">
          {dateRange}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {itinerary.map((day, index) => (
          <div key={index}>
            <DayCard key={index} day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
