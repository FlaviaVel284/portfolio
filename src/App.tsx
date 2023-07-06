import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Home />
    </div>
  );
}

export default App;
