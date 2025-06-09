import React from "react";
import { Link } from "react-router-dom";
// book props is used here
const Card = ({book}) => {
  return (
    <>
      {/* here we should provide unique key because data is iterated if one bookname gets removed other name also gets removed automatically */}
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg my-25 bg-blue-100"
        key={book._id}
      >
        <img
          class="w-full"
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://media.istockphoto.com/id/944631208/photo/education-concept-with-book-in-library.jpg?s=612x612&w=0&k=20&c=uJF-uOU5MRR-iwXqJEPAdXeaH-VJ-nqt6TdKUpEdEkk="
          }
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{book.bookName}</div>
          <p class="text-gray-700 text-base">Rs. {book.bookPrice}</p>
          <p class="text-gray-700 text-base">{book.isbnNumber}</p>
          <p class="text-gray-700 text-base">{book.authorName}</p>
          <p class="text-gray-700 text-base">{book.publishedAt}</p>
          <button
            type="button"
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          > <Link to = {`book/${book._id}`}>
          See More
          </Link>
            
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
