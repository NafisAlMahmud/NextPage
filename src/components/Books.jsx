import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 rounded ">
        {books.map((book) => (
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-3 shadow-2xl">
            <img
              src={book.image}
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />
            <div className="bg-black bg-opacity-75 text-gray-50 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity divide-purple-200 px-6 py-6 flex flex-col">
              <p>{book.title}</p>
              <br />
              <p>{book.subtitle.substring(0, 45)}...</p>
              <br />
              <p className="mt-auto">Price: {book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
