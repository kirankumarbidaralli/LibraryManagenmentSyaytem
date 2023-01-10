import { useState } from "react";
import "../styles/addbooks.css"
import { useNavigate } from "react-router-dom";

const AddBooks =()=>{

    //title,categories,authors,pageCount,thumbnailUrl,shortDescription,longDescription

    let [title,setTitle] = useState([])
    let [categories,setCategories] = useState("")
    let [authors,setAuthors]=useState("")
    let [pageCount,setpageCount] =useState("")
    let [thumbnailUrl,setThumbnailUrl] = useState("")
    let [shortDescription,setShortDescription] = useState("")
    let [longDescription,setLongDescription] =useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();

        //data to be posted
        let bookData={title,categories,authors,pageCount,thumbnailUrl,shortDescription,longDescription}

        //posting to server
        fetch('http://localhost:5000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added succesfully')
        navigate('/admin/book-list')
    }

    return(
      <div className="aadbook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" placeholder="Title of the book" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="authors">
                        <input type="text" placeholder="Author of the book" required value={categories} onChange={(e)=>setCategories(e.target.value)} />
                    </div>
                    <div className="categories">
                        <input type="text" placeholder="category book" required value={authors} onChange={(e)=>setAuthors(e.target.value)} />
                    </div>
                    <div className="pageCount">
                        <input type="number" placeholder="NUmber of pages" required value={pageCount} onChange={(e)=>setpageCount(e.target.value)} />
                    </div>
                    <div className="shortDescription">
                        <textarea onChange={(e)=>setShortDescription(e.target.value)} value={shortDescription} placeholder="shortdescription of book" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea onChange={(e)=>setLongDescription(e.target.value)} value={longDescription} placeholder="longdescription of book" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" placeholder=" enter book url" value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
      </div>
    )
}
export default AddBooks;

