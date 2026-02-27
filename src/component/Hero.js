import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <>
        <div className="main-banner">
            <img src="./images/main-banner.jpg" alt="" style={{width:"100%"}} />
            <div className="offer-box">
                <h1>70% <span>OFF</span></h1>
                <h3>FOR WOMEN CLOTHES</h3> 
                <p className="desc">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link to="/" className="btn">CLICK HERE</Link>
                </div>
            </div>
             
        </>
    )
}

export default Hero;