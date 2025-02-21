import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* <Route path="/admin" element={<UserLayout />}>
          <Route path="index" element={<Home />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
