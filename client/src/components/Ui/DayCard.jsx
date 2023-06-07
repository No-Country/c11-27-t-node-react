import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const DayCard = ({ day }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="gap-4 rounded bg-neutral-200 p-2 shadow-lg">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon
          icon={faCalendarDay}
          className="pb-1 text-base text-sky-500"
        />
        <div className="text-lg font-semibold text-neutral-800">
          {day.title}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {day.activities.map((activity, index) => (
          <div key={index}>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="pt-1 text-base text-red-500"
              />
              <div className="flex flex-col">
                <div className="text-base font-semibold text-neutral-800">
                  {activity.title}
                </div>
                <div
                  className={`text-sm font-normal text-neutral-700 ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {activity.description}
                </div>
              </div>
            </div>
            {isExpanded && (
              <div className="mt-2">
                <Button
                  label="Ver en Google Maps"
                  variant="text"
                  iconPosition="right"
                  iconName="mapLocationDot"
                  color="blue"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <Button
          label={isExpanded ? "Ver menos detalles" : "Ver más detalles"}
          variant="text"
          color="gray"
          iconPosition="right"
          iconName={isExpanded ? "angleUp" : "angleDown"}
          onClick={toggleExpanded}
        />
      </div>
    </div>
  );
};

export default DayCard;
