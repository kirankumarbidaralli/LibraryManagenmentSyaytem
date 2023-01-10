import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUsers =()=>{

        let [name,setName] = useState("")
        let [age,setAge]=useState("")
        let [email,setEmail] = useState("")
        let [phoneNumber,setphoneNumber]=useState("")

        let navigate = useNavigate()

        let handleSubmit=(e)=>{
            e.preventDefault();

            let userData={name,age,email,phoneNumber}

            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(userData)
            })
            alert('user added succesfully')
            navigate('/admin/user-list')
        }

    return(
        <div className="addusers">
            <h1>Add a new users</h1>
                <div className="form" onSubmit={handleSubmit}>
                    <form action="">
                        <div className="name">
                            <input type="text" placeholder="Enter  name" value={name} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="age">
                            <input type="number" min='1' placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <div className="email">
                            <input type="text" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="phonenumber" >
                            <input type="tel" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} minLength='10' maxLength='10' placeholder="enter phno number"/>
                        </div>
                        <button>Add user</button>
                    </form>
                </div>
        </div>
    )
}
export default AddUsers;