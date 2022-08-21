import './App.css';
import { BrowserRouter } from "react-router-dom";
import SignUp from './starting/SignUp';
import Landing from './starting/Landing';
import Layout from './components/Layout';
import Dashboard from './layout/Dashboard';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
