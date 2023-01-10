import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminlogin.css"

const AdminLogin = () =>
{
    let Login = (e)=>{
        e.preventDefault();
        let data={email,password}

        if(email=="admin@gmail.com" && password==4444){
            navigate('/admin/')
        }else {
            alert("Invalid credentials")
        }
        // console.log(data);
    }

    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()

    return(
        <div className="adminlogin">
            <div className="form">
            <h1>Login</h1>
                   
                    <div className="form_input">
                        <form action="" onSubmit={Login}>
                            <div className="email">
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required className="form"/>
                            </div>
                            
                            <div className="password">
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required className="form" />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}
export default AdminLogin;
