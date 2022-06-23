import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/NewUser/Navbar/Navbar'
import ClientNavbar from './components/Client/Navbar/ClientNavbar'
import Footer from './components/NewUser/Footer/Footer';
import Home from './components/NewUser/Home/Home'
import ExploreJobs from './components/NewUser/ExploreJobs/ExploreJobs'
import ExploreTalents from './components/shared/ExploreTalents/ExploreTalents';
import About from './components/NewUser/About/About';
import ClientFooter from './components/Client/Footer/ClientFooter'
import FindJob from './components/NewUser/FindJob/FindJob';
import JobDetail from './components/NewUser/JobDetail/JobDetail'
import ScrollToTop from './ScrollToTop'
import FreelancerProfile from './components/NewUser/FreelancerProfile/FreelancerProfile';
import ClientProfile from './components/Client/ClientProfile/ClientProfile';
import NearbyFreelancer from './components/shared/NearbyFreelancer/NearbyFreelancer';
import ChangeUser from './components/shared/ChangeUser/ChangeUser'
import PostJob from './components/Client/PostJob/PostJob';
import ClientHome from './components/Client/ClientHome/ClientHome';
import ReviewJob from './components/Client/ReviewJob/ReviewJob';
import FreelancerNavbar from './components/Freelancer/Navbar/FreelancerNavbar'
import FreelancerFooter from './components/Freelancer/Footer/FreelancerFooter'
import Profile from './components/Freelancer/Profile/Profile'
import Earnings from './components/Freelancer/Earnings/Earnings';
import Page404 from './components/Page404/Page404'
import FreelancerHome from './components/Freelancer/FreelacerHome/FreelancerHome';
import WorkDetail from './components/Freelancer/WorkDetail/WorkDetail';
import PostBid from './components/Freelancer/PostBid/PostBid'
import YourJob from './components/Freelancer/YourJob/YourJob';
import { useSelector } from 'react-redux'


function App() {
  const { user } = useSelector(state => state.user_type)
  return (
    <>
      {
        user === "freelancer" ?
          <>
            <Router>
              <ScrollToTop>
                <FreelancerNavbar />
                <Routes>
                  <Route path="/" exact element={<FreelancerHome/>}/>
                  <Route path="/your-jobs" exact element={<YourJob/>}/>
                  <Route path='/about-us' exact element={<About />} />
                  <Route path='/change-user' exact element={<ChangeUser />} />
                  <Route path="/me" exact element={<Profile />} />
                  <Route path="/earnings" exact element={<Earnings/>} />
                  <Route path='/explore-jobs/job-detail/:id' exact element={<WorkDetail />} />
                  <Route path='/job/:id/submit-application' exact element={<PostBid/>}/>
                  <Route path="*" exact element={<Page404/>} />
                </Routes>
                <FreelancerFooter />
              </ScrollToTop>
            </Router>
          </>
          :
          user === "client" ?
            <>
              <Router>
                <ScrollToTop>
                  <ClientNavbar />
                  <Routes>
                    <Route path="/" exact element={<ClientHome />} />
                    <Route path='/explore-talents' element={<ExploreTalents />} />
                    <Route path='/change-user' exact element={<ChangeUser />} />
                    <Route path='/explore-talents/profile/:id' exact element={<FreelancerProfile />} />
                    <Route path='explore-talents/nearby-freelancer' exact element={<NearbyFreelancer />} />
                    <Route path="/me" exact element={<ClientProfile />} />
                    <Route path="/post-job" exact element={<PostJob />} />
                    <Route path="/post-job/review" exact element={<ReviewJob />} />
                    <Route path='/about-us' exact element={<About />} />
                    <Route path="*" exact element={<Page404/>} />
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
                  <Route path='explore-talents/nearby-freelancer' exact element={<NearbyFreelancer />} />
                  <Route path='/about-us' exact element={<About />} />
                  <Route path='change-user' exact element={<ChangeUser />} />
                  <Route path="*" exact element={<Page404/>} />
                </Routes>
                <Footer />
              </ScrollToTop>
            </Router>
      }
    </>
  );
}

export default App;
