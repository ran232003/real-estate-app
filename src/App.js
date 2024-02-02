import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./global/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import PrivateRoutes from "./global/PrivateRoutes";
import ToastMessage from "./global/ToastMessage";
import Loading from "./global/Loading";
import NotFound from "./pages/NotFound";
import Profile from "./pages/profile/Profile";
import HomePage from "./pages/HomePage.js/HomePage";
import About from "./pages/about/About";
import CreateEstate from "./pages/createEstate/CreateEstate";
import CreateEstateIndex from "./pages/createEstate/CreateEstateIndex";
import SearchPage from "./pages/search/SearchPage";
import EstateDetails from "./pages/estate-details/EstateDetails";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/create-estate/:status"
            element={<CreateEstateIndex />}
          />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/estate-details/:id" element={<EstateDetails />} />

        <Route path="/auth/:status" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Loading />
      <ToastMessage />
    </div>
  );
}

export default App;
