import React from "react";
import HistoryCard from "../Ui/HistoryCard";

const History = ({ userHistory }) => {
  return (
    <div className="flex grow flex-col gap-4 px-4 pb-4">
      <div className="flex flex-col gap-1">
        <div className="text-xl font-semibold text-neutral-800">
          Historial de itinerario
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {userHistory.map((itinerary, index) => (
          <div key={index}>
            <HistoryCard key={index} itinerary={itinerary} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
