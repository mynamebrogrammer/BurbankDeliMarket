import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import PromotionsPage from "./pages/PromotionsPage";
import ContactPage from "./pages/ContactPage";
import BeerPage from "./pages/BeerPage";
import "./App.css";
import { ThemeProvider } from "./utils/ThemeContext";
function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Router>
        <ThemeProvider>
          <Header isDarkMode={isDarkMode} onModeToggle={handleModeToggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/beer" element={<BeerPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
