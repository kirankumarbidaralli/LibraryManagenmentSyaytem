import { useState,useEffect } from "react";
import "../styles/userlist.css"

const UserList = ()=>{

    let [users,setUsers] =useState([])

     useEffect (()=>{
        let fetchdata= async ()=>{
            let responce= await fetch('http://localhost:5000/users')
            let data = await responce.json()
            setUsers(data)
        }
        fetchdata()
    },[])

    let handleDelete=(id,name)=>{
        setUsers(users.filter(x => x.id!=id))
        alert(`${name} has been removed`)
    }
      
    return (
        <div className="userList">
            <h1>User List:{users.length}</h1>
            <div className="user_section">
                {
                    users.map(data=>(
                        <div className="user_card">
                            <h2>Name:{data.name}</h2>
                            <h3>Age :{data.age}</h3>
                            <h3>Email:{data.email}</h3>
                            <h3>NUmber :{data.phoneNumber}</h3>
                            <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                            

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default UserList;