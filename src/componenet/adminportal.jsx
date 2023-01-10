import AdminNavbar from "./adminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashBoard from "./adminDashboard";
import BookList from "./bookList";
import UserList from "./userList";
import AddBooks from "./addbooks";
import AddUsers from "./addusers";
import ReadBook from "./readbbook";


const AdminPortal = () =>{
    return(
        <div className="adminportal">
                <AdminNavbar/>
                <Routes>
                    <Route path="/" element={<AdminDashBoard/>}/>
                    <Route path="/book-list" element={<BookList/>} />
                    <Route path="/user-list" element={<UserList/>} />
                    <Route path="/add-books" element={<AddBooks/>} />
                    <Route path="/add-users" element={<AddUsers/>} />
                    <Route path='/book-List/:id' element={<ReadBook/>} />
                </Routes>
        </div>
    )
}
export default AdminPortal;