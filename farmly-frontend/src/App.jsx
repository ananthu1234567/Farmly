// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FarmerDashboard from "./pages/FarmerDashboard";
import Auth from "./pages/Auth";
import ChatPage from "./pages/ChatPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<ChatPage />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
