import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);
  return <div className="text-blue-500">Home</div>;
};

export default Home;
