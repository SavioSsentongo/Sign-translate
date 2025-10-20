import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Convert from "./Pages/Convert";
import Home from "./Pages/Home";
import LearnSign from "./Pages/LearnSign";
import Video from "./Pages/Video";
import Navbar from "./Components/Navbar";
import CreateVideo from "./Pages/CreateVideo";
import Footer from "./Components/Footer";
import Videos from "./Pages/Videos";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import { useUser } from "./context/UserContext";
import VideoSignTranslator from "./Pages/Video_to_sign_Translator";
import LevelWrapper from "./Components/LevelWrapper";
import Certificate from "./Components/Certificate";

function ProtectedRoutes() {
  const { user, loading } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [bootstrapped, setBootstrapped] = React.useState(false);

  React.useEffect(() => {
    if (!loading) {
      const progress = JSON.parse(localStorage.getItem("aslProgress") || "{}");
      const isDefaultPath =
        location.pathname === "/" || location.pathname === "/equilearn";
      if (user && isDefaultPath && progress?.level) {
        navigate(`/equilearn/level/${progress.level}`, { replace: true });
      }
      setBootstrapped(true);
    }
  }, [loading, user, location.pathname, navigate]);

  if (loading || !bootstrapped) {
    return <div>Loading...</div>; // or use a Spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/equilearn/convert" element={<Convert />} />
      <Route path="/equilearn/learn-sign" element={<LearnSign />} />
      <Route path="/equilearn/all-videos" element={<Videos />} />
      <Route path="/equilearn/video/:videoId" element={<Video />} />
      <Route path="/equilearn/create-video" element={<CreateVideo />} />
      <Route path="/equilearn/pose-model" element={<VideoSignTranslator />} />
      <Route path="/equilearn/level/:levelId" element={<LevelWrapper />} />
      <Route path="/equilearn/certificate" element={<Certificate />} />
      <Route path="/equilearn/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/equilearn/home" />} />
    </Routes>
  );
}

function App() {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={user ? <Navigate to="/equilearn/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/equilearn/home" /> : <Signup />}
          />
          <Route path="/equilearn/home" element={<Home />} />

          {/* Protected Routes */}
          <Route path="/*" element={<ProtectedRoutes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
