import React from 'react'
import {Link} from 'react-router-dom'
import Gallery from "../../assect/good.jpeg";
import Press from '../../assect/wheet.jpg'
import './gallery.css'

const GalleryHome = () =>{

    return(

        <div className="GalleryHome">

            <div className="GH-left">
                       <img src={Gallery}></img>
                       <Link to="/gallery"> <h1 className="h1">Gallery</h1></Link>
            </div>

            <div className="GH-right">
                      <img src={Press}></img>
                      <Link to="/gallery"><h1 className="h1">Press Media</h1></Link>
            </div>
        </div>
    )

}
export default GalleryHome;