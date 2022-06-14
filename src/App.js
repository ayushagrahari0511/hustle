import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/NewUser/Navbar/Navbar'
import ClientNavbar from './components/Client/Navbar/ClientNavbar'
import Footer from './components/NewUser/Footer/Footer';
import Home from './components/NewUser/Home/Home'
import ExploreJobs from './components/NewUser/ExploreJobs/ExploreJobs'
import ExploreTalents from './components/NewUser/ExploreTalents/ExploreTalents';
import About from './components/NewUser/About/About';
import ClientFooter from './components/Client/Footer/ClientFooter'
import FindJob from './components/NewUser/FindJob/FindJob';
import JobDetail from './components/NewUser/JobDetail/JobDetail'
import ScrollToTop from './ScrollToTop'
import FreelancerProfile from './components/NewUser/FreelancerProfile/FreelancerProfile';

let user
// user = "client"

function App() {
  return (
    <>
      {
        user === "client" ?
          <>
            <Router>
              <ScrollToTop>
                <ClientNavbar />
                <Routes>
                  <Route path='/explore-talents' element={<ExploreTalents />} />
                </Routes>
                <ClientFooter />
              </ScrollToTop>
            </Router>
          </>
          :
          <Router>
            <ScrollToTop>
              <Navbar />
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/explore-jobs' exact element={<ExploreJobs />} />
                <Route path='/explore-jobs/:jobTitle' exact element={<FindJob />} />
                <Route path='/explore-jobs/job-detail/:id' exact element={<JobDetail />} />
                <Route path='/explore-talents' exact element={<ExploreTalents />} />
                <Route path='/explore-talents/profile/:id' exact element={<FreelancerProfile />} />
                <Route path='/about-us' exact element={<About />} />
              </Routes>
              <Footer />
              </ScrollToTop>
          </Router>

      }
    </>
  );
}

export default App;
