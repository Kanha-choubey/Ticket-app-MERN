import React from "react";

function Home() {
  return (
    <section className="text-center flex flex-col justify-center content-center mt-24 ">
      <div>
        <h1 className=" text-6xl font-extrabold dark:text-black">
          What do you need help with?
        </h1>
        <h3 className=" text-4xl mt-2 font-extrabold dark:text-black">
          Please choose from an option below
        </h3>
        <button className="py-2.5 px-5 mt-9 w-4/5 mr-2 mb-2 text-l  font-bold text-black focus:outline-none bg-white rounded border border-gray-200 hover:bg-cyan-900 hover:text-blue-700 focus:z-10 focus:ring focus:ring-gray-200 dark:focus:ring-gray-700   dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Create New Ticket
        </button>
        <button className="py-2.5 px-5 mt-3 w-4/5 mr-2 mb-2 text-l  font-bold text-white focus:outline-none bg-cyan-900 rounded border border-gray-200 hover:bg-gray-500 hover:text-blue-700 focus:z-10 focus:ring focus:ring-gray-200 dark:focus:ring-gray-700   dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          View My Tickets
        </button>
      </div>
    </section>
  );
}

export default Home;
