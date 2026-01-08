import "./App.css";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* router */}
      <footer className="mt-auto bg-black h-[50px]"></footer>
    </div>
  );
}

export default App;
