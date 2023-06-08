import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import PlanTrip from "../components/Containers/PlanTrip";
import CustomizeTrip from "../components/Containers/CustomizeTrip";

const Home = () => {
  const userId = useSelector(state => state.auth.userId);

  const [tripData, setTripData] = useState({
    destino: "",
    fechainicio: "",
    fechafinal: "",
    userid: userId,
  });

  const [itineraryState, setItineraryState] = useState("plan");

  let itineraryComponent;
  switch (itineraryState) {
    case "customize-trip":
      itineraryComponent = (
        <CustomizeTrip
          setItineraryState={setItineraryState}
          tripData={tripData}
        />
      );
      break;
    default:
      itineraryComponent = (
        <PlanTrip
          setItineraryState={setItineraryState}
          setTripData={setTripData}
        />
      );
  }

  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="loggedin" />
      {itineraryComponent}
      <Footer />
    </div>
  );
};

export default Home;
