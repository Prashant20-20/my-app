//import img from "../images/Hair-Care.jpg"; 
import Hero from "./Hero";

const Home = () => {
    return(
        <>
        <Hero/>
         <div className="main-container">
        <div className="three-box-sec">
            <h1>Best Products</h1>
           
              <div className="grid-box">
                <div className="single-banner">
                    <img src="../images/banner-1.jpg" alt="" style={{width:"570px",height:"320px"}} />
                    <div className="inner-text">
                    <h4>Men’s</h4>
                    </div>
                </div>
                <div className="single-banner">
                <img src="../images/banner-2.jpg" alt="" style={{width:"570px",height:"320px"}} />
                <div className="inner-text"> 
                <h4>Women’s</h4>
                </div>
                </div>
                <div className="single-banner">
                <img src="../images/banner-3.jpg" alt="" style={{width:"570px",height:"320px"}} />
                <div className="inner-text">
                <h4>Kid’s</h4>
                </div>
                </div>
             </div>  
             
           
        </div>
        </div>
         
        </>
    );
}

export default Home;