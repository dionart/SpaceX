import "./App.css";
import { Route, Routes } from "react-router-dom";
import LaunchList from "./screens/LaunchList";
import LaunchDetails from "./screens/LaunchDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="/:id" element={<LaunchDetails />} />
      </Routes>
    </div>
  );
}

export default App;
