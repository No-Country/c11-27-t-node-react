import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import Login from "../components/Containers/Auth/Login";
import Register from "../components/Containers/Auth/Register";
import RecoverPassword from "../components/Containers/Auth/RecoverPassword";
import CheckEmail from "../components/Containers/Auth/CheckEmail";

const Auth = () => {
  const [authState, setAuthState] = useState("login");
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

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
