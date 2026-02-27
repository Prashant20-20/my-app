import { Link } from "react-router-dom";
const Nav = () => {
 
    return(
        <>
        <div className="nav-box">
            <div className="logo"><img src="../images/logo.jpg" alt="" /></div>
            <ul>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/student-list">Student List</Link>
                <Link to="/product">Product</Link>
                <Link to="/contactus">Contac Us</Link>
            </ul>
            <button>Login</button>
        </div>
        </>
    )
}
 

export default Nav;