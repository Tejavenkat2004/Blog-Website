import { Outlet } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="outlet">
      <Outlet />
      </div>
      
    </>
  );
}

export default App;
