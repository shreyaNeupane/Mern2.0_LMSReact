import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import EditBook from './../editBook/EditBook';
import { backendUrl } from './../config';

const SingleBook = () => {

  const navigate = useNavigate();
  const {id} = useParams()
  const [book , setBook] = useState({})
  console.log(id)
  const fetchBook = async () =>{
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    if(response.status === 200){
      setBook(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBook()
  },[])

  const DeleteBook = async () =>{
    const response = await axios.delete(`${backendUrl}/book/${id}`)
    if(response.status === 200){
       navigate("/");
    } else {
      alert("Something went wrong");
    
    }
  }


  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen p-4">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {/* Image container - set fixed width for md+ screens */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-48  md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              src={
                book.imageUrl ||
                "https://media.istockphoto.com/id/944631208/photo/education-concept-with-book-in-library.jpg?s=612x612&w=0&k=20&c=uJF-uOU5MRR-iwXqJEPAdXeaH-VJ-nqt6TdKUpEdEkk="
              }
              alt="Book cover"
            />
          </div>

          {/* Content container - takes remaining space */}
          <div className="w-full md:w-2/3 p-4 bg-blue-700 text-white">
            <div className="font-bold text-xl mb-2">{book.bookName}</div>
            <p className="mb-1">Price: ${book.bookPrice}</p>
            <p className="mb-1">Author: {book.authorName}</p>
            <p className="mb-1">Published: {book.publishedAt}</p>
            <p className="mb-4">ISBN: {book.isbnNumber}</p>
            <button
              type="button"
              onClick={DeleteBook}
              className="w-full md:w-auto focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Delete
            </button>
            <Link to={`/editBook/${book._id}`}>
            <button
              type="button"
              className="w-full md:w-auto  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ml-3.5" 
            >
              Edit
            </button>
            </Link>
           
          </div>
        </a>
      </div>
    </>
  );
};

export default SingleBook;
