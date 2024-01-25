import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";
import { publicRoute } from "./routes/publicRoute";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map((route) => (
            <Route path={route.path} element={<route.Component />}></Route>
          ))}
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
