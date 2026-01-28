import React, { useState } from "react";

function TasbeehCounter() {
  let [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-emerald-300 to-teal-400">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-80 text-center">
        <h1 className="text-3xl font-bold mb-6 text-emerald-700">
          Tasbeeh Counter
        </h1>

        <div className="text-5xl font-extrabold text-gray-800 mb-6">
          {count}
        </div>

        <button
          onClick={clickHandler}
          className="w-full bg-emerald-600 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:bg-emerald-700 active:scale-95 transition-all duration-300"
        >
          Count
        </button>
      </div>
    </div>
  );
}

export default TasbeehCounter;
