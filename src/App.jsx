// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SubmitPitch from "./pages/SubmitPitch";
import MyPitches from "./pages/MyPitches";
import Review from "./pages/Review";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PitchCreation  from "./pages/PitchCreation";
function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/create-pitch' element={<PitchCreation />} />
          <Route path="/submit-pitch" element={<SubmitPitch />} />
          <Route path="/my-pitches" element={<MyPitches />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
