import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import ExploreJobs from './components/ExploreJobs/ExploreJobs'
import ExploreTalents from './components/ExploreTalents/ExploreTalents';
import About from './components/About/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/explore-jobs' element={<ExploreJobs />} />
          <Route path='/explore-talents' element={<ExploreTalents />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
