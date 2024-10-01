import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SpecificMovie from "./pages/SpecificMovie";

function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:id" Component={SpecificMovie} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
