import React, { useState } from "react";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import Login from "../components/Containers/Auth/Login";
import Register from "../components/Containers/Auth/Register";
import RecoverPassword from "../components/Containers/Auth/RecoverPassword";
import CheckEmail from "../components/Containers/Auth/CheckEmail";

const Auth = () => {
  const [authState, setAuthState] = useState("login");

  let authComponent;
  switch (authState) {
    case "register":
      authComponent = <Register setAuthState={setAuthState} />;
      break;
    case "recover-password":
      authComponent = <RecoverPassword setAuthState={setAuthState} />;
      break;
    default:
      authComponent = <Login setAuthState={setAuthState} />;
  }

  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="auth" />
      {authComponent}
      <Footer />
    </div>
  );
};

export default Auth;
