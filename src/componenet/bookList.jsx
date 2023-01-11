import '../styles/bookList.css'
import { useState, useEffect } from "react";

import { useNavigate,useLocation } from 'react-router-dom';

const BookList = () => {

    let handleRead =(id)=>{
      if(location.pathname == '/admin/book-list'){
        navigate(`/admin/book-List/${id}`)
      }else{
        navigate(`/user/book-list/${id}`)
      }
    }
  let [book, setbook] = useState([])
  let location = useLocation()
  let navigate = useNavigate()

  useEffect(() => {

    let fetchdata = async () => {
      let responce = await fetch('http://localhost:5000/books')
      let data = await responce.json()
      setbook(data)
    }
    fetchdata()
  }, [])

  let handleremove = (id, title) => {
    fetch(` http://localhost:5000/books/${id}`,{
        method:'DELETE'
    })
    alert(`${title} will be removed`)
  }


  return (
    <div className="booklist">
      <h1>Book List:{book.length}</h1>
      <div className="books_section">
        {
          book.map((data) => (

            <div className="book_card">

              <div className="img">
                <img style={{ height: "250px" }} src={data.thumbnailUrl} alt="" />
              </div>

              <div className="info">
                <h3>Title:{data.title}</h3>
                <h5>Auther:{data.authors.toString()}</h5>
                <h5>PageCt:{data.pageCount}</h5>
                <h5>Category:{data.categories}</h5>
               <button onClick={()=>handleRead(data.id)}>Read more</button>
                { location.pathname == '/admin/book-list' && <button onClick={() => handleremove(data.id,data.title)}>Delete</button>}
                
              </div>
              
            </div>
          ))
        }
        
      </div>
          
    </div>
  );
}

export default BookList;