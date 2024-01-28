import { Route,Routes } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import MainComp from './components/MainComponent'
import Overview from './components/Nav-Overview'
import Dashboard from './components/Nav-Dashboard'
// import Analytics from './components/Nav-Analytics'


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
        <Route path="/" element={<MainComp/>} />
          <Route path="overview" element={<Overview />} /> 
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Analytics" element={<Overview />} /> 
    </Routes>
  </div>
  );
}

export default App;
