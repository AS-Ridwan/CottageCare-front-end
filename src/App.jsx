import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import { publicRoute } from "./routes/publicRoute";
import { privateRoutes } from "./routes/privateRoutes";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map((route) => (
            <Route path={route.path} element={<route.Component />}></Route>
          ))}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map((route) => (
              <Route path={route.path} element={<route.Component />}></Route>
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
