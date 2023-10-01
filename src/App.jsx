import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from './pages/Resume'
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";
import Header from "./pages/Header";

function App() {
  return (
    
    <>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signUp" element={<SignUP />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
