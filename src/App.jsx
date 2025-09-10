import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <Router>
      <div>
        <SignUp />
      </div>
    </Router>
  );
}

export default App;
