import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/ui/Navbar";
import Models from "./pages/Models";
import ModelDetails from "./pages/ModelDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* router */}
      <Routes>
        <Route path="/" element={<Navigate to="/modelos" replace />} />
        <Route path="/modelos" element={<Models />} />
        <Route path="/model/:id" element={<ModelDetails />} />
      </Routes>
      <footer className="mt-auto bg-black h-[50px]"></footer>
    </div>
  );
}

export default App;
