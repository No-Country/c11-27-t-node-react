import React, { useEffect } from "react";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import HistoryCard from "../components/Ui/HistoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistory } from "../redux/slices/historySlice";

const History = () => {
  const dispatch = useDispatch();
  const userid = localStorage.getItem("iduser");
  const history = useSelector(state => state.history.history);

  useEffect(() => {
    dispatch(getUserHistory(userid));
  }, [dispatch]);

  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="loggedin" />
      <div className="flex grow flex-col gap-4 px-4 pb-4">
        {history.map((itinerary, index) => (
          <div key={index}>
            <HistoryCard {...itinerary} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default History;
