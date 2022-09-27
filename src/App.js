import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Me from './componets/Me';
import Img from './componets/Img';
import Myself from './componets/Myself';
import Work from './componets/Work';
import Resume from './componets/Resume';
import MyRecent from './componets/MyRecent';
import Footer from './componets/Footer';
import Home from './componets/Home';
import{BrowserRouter,Route, Routes, Outlet,Link} from 'react-router-dom'
import AboutUs from './componets/pages/AboutUs';
import DostiDetails from './componets/pages/DostiDetails';
import FastanceDetails from './componets/pages/FastanceDetails';
import PortfolioDetails from './componets/pages/PortfolioDetails';
function App() {
  return (
    <div className='App'>
      {/* 
      <Link to="">Home</Link>
      <Link to="/pages/AboutUs">AboutUs</Link>
      
      <Route path="/pages/AboutUs" component={AboutUs} /> */}
       <BrowserRouter>
        <Routes path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="dostimart" element={<DostiDetails />} />
          <Route path="fastance" element={<FastanceDetails />} />
          <Route path="port" element={<PortfolioDetails />} />
        </Routes>
      </BrowserRouter>
      {/* </BrowserRouter> */}
      {/* <Header />
      <Me />
      <Img />
      <Myself />
      <Resume />
      <Work />
      <MyRecent />
      <Footer /> */}
    </div>
  );
}

export default App;
