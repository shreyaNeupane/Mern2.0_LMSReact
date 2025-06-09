import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
    // to store data jun  api le data leuxa ya hit hanxa
    const [books , setBooks] = useState([])
    const fetchBooks = async() => {
        const response = await axios.get("http://localhost:3000/book");
      //  if api hit the data stored in backend setBook stores books in api
        if(response.status === 200){
          // .data is  varaiable in backend where book is stored
        setBooks(response.data.data)
       }
    }
    // to fetch books whwn page mounts
    useEffect(()=>{
        fetchBooks()
    },[])
    console.log(books)
  return (
    <>
      
        <Navbar />
        <div className="flex flex-wrap justify-evenly">
         {
          books.length > 0 && books.map((book)=>{
            return(
              // book is passes as prop to card component to show actual data of book in forntend
              <Card book={book}/>
            )
          })
         }
        </div>
      
    </>
  );
}

export default Home
