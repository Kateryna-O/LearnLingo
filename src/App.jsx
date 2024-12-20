import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { TeachersPage } from "./pages/TeachersPage/TeachersPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/teachers" element={<TeachersPage />}></Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
