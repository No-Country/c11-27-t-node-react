import React, { useState } from "react";
import Logo from "./icons/Logo";
import itinerary from "../assets/itinerary.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

const PlanificarViaje = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="align-center sw-full border-color:#a0aec0 mx-auto flex min-h-full max-w-sm  flex-col content-center items-center  justify-center  p-5">
      <div className="h-15 flex w-80 flex-row justify-start gap-2">
        <Logo />
        <h1 className="mt-2 font-sans text-2xl font-bold">Tourist Route</h1>
      </div>
      <main className="align-center flex w-80 flex-col content-center items-center justify-center self-center">
        <img src={itinerary} alt="itinerary.png" className="mx-12 my-10 w-52" />

        <div className="align-center flex flex-col content-center items-center justify-center self-center">
          <h2 className="text-center font-sans text-base font-bold">
            Planifica tu proximo viaje
          </h2>
          <p className="my-3 text-center font-sans text-xs font-medium">
            Crea un itinerario y planifica tus proximos viajes
          </p>
        </div>
        <div>
          <form className="mt-5 flex w-72 gap-5 rounded border-2 border-[#E5E5E5] text-center font-sans text-xs font-medium">
            <i
              className="fa-solid fa-map-location-dot relative top-[10px] ml-1 h-4 w-5 text-[#D4D4D4]
             hover:text-[#4ADE80]"
            ></i>
            <input
              type="text"
              placeholder="Introduce tu destino"
              className="my-2 outline-none"
            />
          </form>
          <form className="mt-3 flex w-72 gap-5 rounded border-2 border-[#E5E5E5] text-center font-sans text-xs font-medium">
            <i className="fa-solid fa-calendar-days relative top-[10px] ml-1 h-4 w-5 text-[#D4D4D4] hover:text-[#4ADE80]"></i>
            <DatePicker
              locale="es"
              className="my-2 flex outline-none"
              placeholderText="Desde - Hasta"
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={update => {
                setDateRange(update);
              }}
              isClearable={true}
            />
          </form>
        </div>
        <button className="mt-8 h-9 w-72 rounded border-2 border-[#4ADE80] bg-[#4ADE80] hover:border-[#16A34A] hover:bg-[#16A34A]">
          <p className="text-center font-sans text-base font-semibold text-[#FFFFFF] ">
            ¡Vamos, a personalizar!
          </p>
        </button>
      </main>
    </div>
  );
};

export default PlanificarViaje;
