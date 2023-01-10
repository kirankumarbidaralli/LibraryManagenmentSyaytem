import { Link } from "react-router-dom";
import '../styles/landingPage.css'

const LandingPage = () =>
{
    return (
        <div className="landingpage">
            <div className="selectLoginType">
                <h1 style={{color:"whitesmoke", fontSize:"50px"}}>Libraray Management System</h1>
                <div className="home">

                    <div className="home2">
                        <h1>ADMIN LOGIN</h1>
                        <Link to="/admin-login">Admin Login</Link>
                    </div>

                <div className="home2"> 
                <h1 >USER LOGIN</h1>
                <Link to="/user-login">User Login</Link>
                </div>
               
                </div>
                
            </div>
        </div>
    );
}
export default LandingPage;

