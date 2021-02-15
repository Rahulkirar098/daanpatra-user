import React,{useState} from "react";
import './app.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./component/main body/home/home";
import Footer from "./component/footer/Footer";
import Contact from "./component/main body/contact/contact";
import Weare from "./component/main body/weare/Weare";
import News from "./component/main body/news/News";
import Image from "./component/image/Image";
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



function App() {

  return (
    <>

      <Navbar />
      
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/whatwedo' component={WhatWeDo} />
        <Route exact path='/Weare' component={Weare} />
        <Route exact path='/News' component={News} />
        <Route exact path='/Image' component={Image} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/galleryhome' component={GalleryHome} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/volunteer' component={Volunteer} />
        <Route component={Error} />

      </Switch>

      <Footer />

      <Scroll />

      <Social />

      <Whatsapp /> 
      






    </>
  );
}

export default App;
