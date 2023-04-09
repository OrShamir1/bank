import { Link } from "react-router-dom";
function Navbar() {

    return (
        <ul className="navbar">
            <li className="nav">
            <Link to="/" style={{ textDecoration: "none"}}>Home</Link>
            </li>
            <li className="nav">
                <Link to="/addTransaction" style={{ textDecoration: "none"}}>Add Transaction</Link>
            </li>
            <li className="nav">
                <Link to="/BrakeDown" style={{ textDecoration: "none"}}>Brakedown</Link>
            </li>
        </ul>
    )
    
}   
export default Navbar;