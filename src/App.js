import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./component/main body/home/home";
import Footer from "./component/footer/Footer";
import Contact from "./component/main body/contact/contact";
import Weare from "./component/main body/weare/Weare";
import News from "./component/main body/news/News";
import Image from "./component/image/Image";
import ContactButton from "./component/main body/contact/ContactButton";
import WhatWeDo from "./component/We do/Whatwedo";
import Navbar from "./component/navbar/Navbar";
import Error from "./component/Error/Error";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Gallery from "./component/news gallary/Gallery"
import Scroll from "./component/Scroll";



// import Gallery from "./component/news gallary/Gallery";
// import WeDo from "./component/We do/WeDo";
// import Login from "./component/login/Login";
// import Feedus from "./component/main body/feedus/Feedus";






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
        <Route component={Error} />
        
      </Switch>

      

      

      {/* <WhatWeDo />
      <Weare />
      <ContactButton />
      <News />
      <Image />
      <Image />*/}

       <Footer />  
       <Scroll /> 



      {/* <WeDo /> */}
      {/* <Gallery /> */}
      {/* <Login /> */}
      {/* <Feedus /> */}


    </>
  );
}

export default App;
