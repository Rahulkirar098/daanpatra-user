import React from 'react'
import {Link} from 'react-router-dom'
import Gallery from "../../assect/gallery.png";
import Press from '../../assect/Press.jpg'
import './gallery.css'

const GalleryHome = () =>{

    return(

        <div className="GalleryHome">

            <div className="GH-left">
                       
                       <Link to="/gallery"> <h1 className="h1"><img src={Gallery} alt="img"></img></h1></Link>
            </div>

            <div className="GH-right">
                      
                      <Link to="/gallery"><h1 className="h1"><img src={Press} alt="img"></img></h1></Link>
            </div>
        </div>
    )

}
export default GalleryHome;