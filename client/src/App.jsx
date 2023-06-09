import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Utils/PrivateRoute";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import History from "./pages/History";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/reset-password/:accessToken/:userId"
          element={<ResetPassword />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/itinerary/new/:id" element={<Itinerary type="new" />} />
          <Route
            path="/itinerary/history/:id"
            element={<Itinerary type="history" />}
          />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
