import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
    // to store data jun  api le data leuxa ya hit hanxa
    const [books , setBooks] = useState([])
    const fetchBooks = async() => {
        const response = await axios.get("http://localhost:3000/book");
        console.log(response)
    }
    // to fetch books whwn page mounts
    useEffect(()=>{
        fetchBooks()
    },[])
  return (
    <>
      <div className="bg-red-400">
        <Navbar />
        http://localhost:3000/book
        <div className="flex flex-wrap justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home
