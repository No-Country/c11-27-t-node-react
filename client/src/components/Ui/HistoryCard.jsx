import React from "react";
import Button from "../Ui/Button";
import { Link } from "react-router-dom";

const HistoryCard = ({ itinerary: { location, dateRange, itineraryLink } }) => {
  return (
    <div className="gap-1 rounded bg-neutral-200 p-2 shadow-lg">
      <div>
        <div className="text-lg font-medium text-neutral-800">{location}</div>
        <div className="text-sm font-normal text-neutral-600">{dateRange}</div>
      </div>
      <div className="flex items-center justify-end">
        <Link to={itineraryLink}>
          <Button
            label="Ver itinerario"
            variant="text"
            iconPosition="right"
            iconName="arrowRight"
          />
        </Link>
      </div>
    </div>
  );
};

export default HistoryCard;
