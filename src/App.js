import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import ExploreJobs from './components/ExploreJobs/ExploreJobs'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/explore-jobs' element={<ExploreJobs />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
