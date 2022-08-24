import './App.css';
import { BrowserRouter } from "react-router-dom";
import SignUp from './starting/SignUp';
import Landing from './starting/Landing';
import ManDashboard from './layout/ManDashboard';
// import MatDashboard from './layout/MatDashboard';
// import ProDashboard from './layout/ProDashboard';
// import ConDashboard from './layout/ConDashboard';
// import LogDashboard from './layout/LogDashboard';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landing/>} />
          <Route path="/man/dashboard/*" element={<ManDashboard/>} />{/*
          <Route path="/mat/dashboard/*" element={<MatDashboard/>} />
          <Route path="/pro/dashboard/*" element={<ProDashboard/>} />
          <Route path="/con/dashboard/*" element={<ConDashboard/>} />
          <Route path="/log/dashboard/*" element={<LogDashboard/>} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
