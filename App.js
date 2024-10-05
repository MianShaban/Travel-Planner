// Init
import React from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Files
import Index from "./routes/index";
import "./css/index.css";
import ScrollToTop from "./components/ScrollToTop";

// Component
function App() {
  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />

      {/* Routes */}
      <ScrollToTop/>
      <Index />
    </div>
  );
}

// Export
export default App;
