import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import Login from "../components/Containers/Auth/Login";
import Register from "../components/Containers/Auth/Register";
import RecoverPassword from "../components/Containers/Auth/RecoverPassword";
import CheckEmail from "../components/Containers/Auth/CheckEmail";

const Auth = () => {
  const [authState, setAuthState] = useState("login");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken && location.pathname !== "/home") {
      navigate("/home");
    }
  }, [navigate, location]);

  let authComponent;
  switch (authState) {
    case "register":
      authComponent = <Register setAuthState={setAuthState} />;
      break;
    case "recover-password":
      authComponent = <RecoverPassword setAuthState={setAuthState} />;
      break;
    case "check-email":
      authComponent = <CheckEmail setAuthState={setAuthState} />;
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
