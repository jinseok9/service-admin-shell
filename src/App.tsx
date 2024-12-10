import { lazy } from "react";
import { NavLink, Route, Routes } from "react-router";

const Main = lazy(() => import("./pages/Main"));
const IIT = lazy(() => import("service-admin-iit/IIT"));

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "32px" }}>
        <NavLink to="/" end>
          Main
        </NavLink>
        <NavLink to="/iit" end>
          IIT
        </NavLink>
      </nav>

      <Routes>
        <Route index element={<Main />} />
        <Route path="/iit" element={<IIT />} />
      </Routes>
    </div>
  );
}

export default App;
