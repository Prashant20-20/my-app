import img from "../images/Hair-Care.jpg";
import Hero from "./Hero";

const Home = () => {
    return(
        <>
        <Hero/>
         <div className="main-container">
        <div className="three-box-sec">
            <h1>Best Products</h1>
            <div className="grid-box">
            <div className="box">
                <img src={img} alt="images" style={{width:"200px",height:"200px"}}/>
                <h3>Hair care</h3>
            </div>
            <div className="box">
                <img src={img} alt="images" style={{width:"200px",height:"200px"}}/>
                <h3>Hair care 2</h3>
            </div>
            <div className="box">
                <img src={img} alt="images" style={{width:"200px",height:"200px"}}/>
                <h3>Hair care 3</h3>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Home;