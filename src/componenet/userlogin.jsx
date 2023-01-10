import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/userlogin.css"

const UserLogin = ()=>
{
    let navigate = useNavigate()
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let Login=()=>{
        navigate('/user/')
    }
    return(
        <section className="login">
        <div className="userlogin">
               <div className="form">
                <form action="" onSubmit={Login}>
                    <h1>Login</h1>
                    <div className="form_input">
                        <form action="">
                            <div className="email">
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required className="form"/>
                            </div>
                            <div className="password">
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required className="form" />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
                </form>
            </div>
        </div>
        </section>
    )
}
export default UserLogin;