import React from "react";
import "../news/news.css";
import BBC from "../../../assect/bbc.mp4";

const News = () => {
    return (
        <>

            <div className="news-section">

                <div className="news-text">
                    <h2 > SUCCESS STORIES</h2>
                    <h1>BBC News</h1>
                    <p>BBC News Hindi covered Daanpatra in their episode. The video received great
                    response and garnered appreciation from all over the world. This led to people from all over the world
                    inquiring about daanpatra and wanting to adapt it in their respective places..</p>
                </div>

                <div className="img-div">

                    <video controls>
                        <source src={BBC} />
                    </video>

                </div>

            </div>
        </>
    )
}
export default News;