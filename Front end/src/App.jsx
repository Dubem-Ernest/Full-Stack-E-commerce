import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import { Toaster, toast } from 'sonner';

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
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
