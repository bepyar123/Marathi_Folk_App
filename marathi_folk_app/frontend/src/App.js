import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FolkSongPrediction from "./pages/FolkSongPrediction";
import Timeline from "./pages/Timeline";
import CommunityForm from "./pages/CommunityForm";
import CultureExplorer from "./pages/CultureExplorer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import StoryTeller from "./pages/StoryTeller";
 import Contribution from "./pages/Contribution"; 
function App() {
  return (
    <AuthProvider>
      <Router>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/predict" element={<FolkSongPrediction />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/cultureexplorer" element={<CultureExplorer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/communityform"element={<PrivateRoute><CommunityForm /></PrivateRoute>  }/>
          <Route path="/storytelling" element={<StoryTeller />} />
          <Route path="/contribution" element={<Contribution />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
