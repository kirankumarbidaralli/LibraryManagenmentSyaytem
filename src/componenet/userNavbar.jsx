import { Link } from "react-router-dom";

const UserNavbar=()=>{
    return(
        <div className="userbar">
            <div className="logo">
                <h1>Admin Portal</h1>
            </div>

            <div className="nav_links">
                <ul>
                    <li><Link to="/user/">DashBoard</Link></li>
                    <li><Link to="/user/book-list">Books List</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
                   </div>
    )
}
export default UserNavbar;