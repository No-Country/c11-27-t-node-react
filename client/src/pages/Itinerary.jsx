import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import DayCard from "../components/Ui/DayCard";

const Itinerary = ({ type }) => {
  const { id } = useParams();

  let itineraryData;
  if (type === "new") {
    const itineraryDataString = useSelector(state => state.itinerary.data);
    itineraryData = JSON.parse(itineraryDataString);
    console.log(itineraryData);
  } else if (type === "history") {
    const historyData = useSelector(state => state.history);
    const foundHistory = historyData.history.find(
      item => item.ID_itinerario === id,
    );
    if (foundHistory) {
      itineraryData = JSON.parse(historyData.itinerary.search);
    }
  }

  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="loggedin" />
      <div className="flex grow flex-col gap-4 px-4 pb-4">
        <div className="flex flex-col gap-1">
          <div className="text-xl font-semibold text-neutral-800">
            {itineraryData.destino}
          </div>
          <div className="text-base font-normal text-neutral-700">
            {`${itineraryData.fechainicio} - ${itineraryData.fechafinal}`}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {itineraryData.Itinerario.map((day, index) => (
            <div key={index}>
              <DayCard key={index} day={day} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Itinerary;
