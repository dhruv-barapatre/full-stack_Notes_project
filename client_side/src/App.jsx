import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Allroutes from "./Allroutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Allroutes />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
