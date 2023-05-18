import "./App.css";
import Landing from "./components/Landing/Landing";
import LoginForm from "./components/LoginForm/LoginForm";
import Videogames from "./components/Videogames/Videogames";
import { Routes, Route, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import SearchBar from "./components/SearchBar/SearchBar";
import VideogameForm from "./components/VideogameForm/VideogameForm";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div>
        {location.pathname !== "/" && location.pathname !== "/login" && (
          <SearchBar />
        )}
      </div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/home" element={<Videogames />}></Route>
        <Route path="/home/:id" element={<Detail />}></Route>
        <Route path="/home/create" element={<VideogameForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
