import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import RecoverPassword from "./components/Auth/RecoverPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import AccountInformation from "./components/Auth/AccountInformation";
import Register from "./components/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
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
