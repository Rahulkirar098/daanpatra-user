import React, {useState ,useContext,useEffect} from "react";
import './app.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from "./component/main body/home/home";
import Footer from "./component/footer/Footer";
import Contact from "./component/main body/contact/contact";
import Weare from "./component/main body/weare/Weare";
import News from "./component/main body/news/News";
import WhatWeDo from "./component/We do/Whatwedo";
import Navbar from "./component/navbar/Navbar";
import Error from "./component/Error/Error";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Gallery from "./component/news gallary/Gallery"
import GalleryHome from "./component/news gallary/topart";
import Scroll from "./component/Scroll";
import Social from './component/social';
import Whatsapp from './component/Whatsaap';
import Volunteer from "./component/volunteer/Volunteer";
import FAQ from "./component/FAQ/FAQ";
import Donate from "./dashbord/Pages/Donate";
import Dashbord from './Dashbord'
import Certificate from "./dashbord/Pages/Certificate";
import Profile from "./dashbord/Pages/Profile";
import Sidebar from "./dashbord/Sidebar";
import { AuthenticationCtxt, AuthenticationCtxtProvider } from "./context/authenticationCtxt";



function App() {
  const location = useLocation();
  const page = location.pathname.split("/");
  const [isNavOpen, setIsNavOpen] = useState(true)
  const authCtxt = useContext(AuthenticationCtxt);

  useEffect(() => {
    
  console.log(authCtxt.authData)
  }, [authCtxt.authData])


  return (
    <>

      {Boolean(authCtxt.authData)? '' : <Navbar />}

      {Boolean(authCtxt.authData) ? <Sidebar /> :'' }

      <Switch>

        <Route exact="true" path='/' component={Home} />
        <Route exact="true" path='/whatwedo' component={WhatWeDo} />
        <Route exact="true" path='/Weare' component={Weare} />
        <Route exact="true" path='/News' component={News} />
        <Route exact="true" path='/contact' component={Contact} />
        <Route exact="true" path='/login' component={Login} />
        <Route exact="true" path='/signup' component={Signup} />
        <Route exact="true" path='/gallery' component={Gallery} />
        <Route exact="true" path='/galleryhome' component={GalleryHome} />
        <Route exact="true" path='/volunteer' component={Volunteer} />
        <Route exact="true" path='/dashbord' ><Dashbord setIsNavOpen={setIsNavOpen} /></Route>
        <Route exact="true" path='/certificate' component={Certificate} />
        <Route exact="true" path='/profile' component={Profile} />
        <Route exact="true" path='/donate' component={Donate} />
        <Route exact="true" path='/faq' component={FAQ} />
        <Route exact="true" component={Error} />

      </Switch>

      {Boolean(authCtxt.authData)? '' : <Footer />}
      {Boolean(authCtxt.authData)? '' : <Social />}
      {Boolean(authCtxt.authData)? '' : <Scroll />}
      {Boolean(authCtxt.authData)? '' : <Whatsapp />}







    </>
  );
}

export default App;
