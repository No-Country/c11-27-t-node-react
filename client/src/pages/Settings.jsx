import React from "react";
import Header from "../components/Ui/Header";
import AccountInformation from "../components/Containers/AccountInformation";
import Footer from "../components/Ui/Footer";

const Settings = () => {
  return (
    <>
      <Header pageType="loggedin" />
      <AccountInformation />
      <Footer />
    </>
  );
};
export default Settings;
