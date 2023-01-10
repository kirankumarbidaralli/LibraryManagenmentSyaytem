import "../styles/adminNavbar.css"
import { Link } from "react-router-dom";

const AdminNavbar =()=>{
    return(
        <div className="adminbar">
            <div className="logo">
                <h1>Admin Portal</h1>
            </div>

            <div className="nav_links">
                <ul>
                    <li><Link to="/admin/">DashBoard</Link></li>
                    <li><Link to="/admin/add-books">Add Books</Link></li>
                    <li><Link to="/admin/add-users">Add User</Link></li>
                    <li><Link to="/admin/book-list">Books List</Link></li>
                    <li><Link to="/admin/user-list">User List</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
                   </div>
    )
}
export default AdminNavbar;