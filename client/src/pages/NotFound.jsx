import React from "react";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import PageNotFoundImage from "../assets/page-not-found.svg";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50">
      <Header pageType="auth" />
      <div className="flex flex-col items-center justify-center p-4 lg:px-8">
        <img
          src={PageNotFoundImage}
          alt="Reset Password Image"
          className="h-max"
        />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
