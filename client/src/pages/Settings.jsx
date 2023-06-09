import React from "react";
import Header from "../components/Ui/Header";
import AccountInformation from "../components/Containers/AccountInformation";
import Footer from "../components/Ui/Footer";

const Settings = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="loggedin" />
      <AccountInformation />
      <Footer />
    </div>
  );
};
export default Settings;
