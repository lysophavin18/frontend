import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/footer";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <div>
      <Login />
      <Dashboard />
      <Register />
      <AddStudent />
      <Footer />
    </div>
  );
}

export default App;
