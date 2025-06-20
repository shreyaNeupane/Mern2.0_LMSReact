import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const EditBook = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [data, setData] = useState({
      bookName: "",
      bookPrice: "",
      isbnNumber: "",
      authorName: "",
      publishedAt: "",
      publication: "",
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("image", image);

      const response = await axios.patch("http://localhost:3000/book/" + id, formData);
      if (response.status === 200) {
        navigate("/book/"+ id);
      } else {
        alert("Something went wrong");
      }
    };

    const fetchBook = async() => {
      const response = await axios.get("http://localhost:3000/book/" + id)
      if(response.status === 200){
        console.log(response.data.data)
        setData(response.data.data)
      }
    }
    useEffect(()=>{
      fetchBook()
    },[])
    
  return (
    <>
      <Navbar />
      <div className="mt-24 flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Add Book
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="bookName" className="block text-gray-700 mb-1">
                Book Name:
              </label>
              <input
                type="text"
                value={data.bookName}
                id="bookName"
                name="bookName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter book name"
                onChange={handleChange}
              />
            </div>

            {/* Two-column row: Book Price & ISBN */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bookPrice" className="block text-gray-700 mb-1">
                  Book Price:
                </label>
                <input
                  type="number"
                  value={data.bookPrice}
                  id="bookPrice"
                  name="bookPrice"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter price"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="isbnNumber"
                  className="block text-gray-700 mb-1"
                >
                  ISBN Number:
                </label>
                <input
                  type="number"
                  value={data.isbnNumber}
                  id="isbnNumber"
                  name="isbnNumber"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter ISBN"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="authorName" className="block text-gray-700 mb-1">
                Author Name:
              </label>
              <input
                type="text"
                id="authorName"
                value={data.authorName}
                name="authorName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter author name"
                onChange={handleChange}
              />
            </div>

            {/* Two-column row: Publication & Published At */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="publication"
                  className="block text-gray-700 mb-1"
                >
                  Publication:
                </label>
                <input
                  type="text"
                  id="publication"
                  value={data.publication}
                  name="publication"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter publication"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="publishedAt"
                  className="block text-gray-700 mb-1"
                >
                  Published At:
                </label>
                <input
                  type="date"
                  id="publishedAt"
                  name="publishedAt"
                  value={data.publishedAt}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="image" className="block text-gray-700 mb-1">
                Book Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                // file is stored in array because it is single and only store once at zero index
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Edit book
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditBook
