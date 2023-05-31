import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Utils/PrivateRoute";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import History from "./pages/History";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import RecoverPassword from "./components/Auth/RecoverPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import AccountInformation from "./components/Auth/AccountInformation";
import Register from "./components/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/accountinformation" element={<AccountInformation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
