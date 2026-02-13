import React, { useEffect, useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // useEffect runs whenver component render
  useEffect(() => {
    console.log("Form component rendered");
  }, []);
  // useEffect runs whenver component render
  useEffect(() => {
    console.log("form data updated");
  }, [formData]);

  // useEffect runs whenver component render
  useEffect(() => {
    document.title = `Welcome ${formData.username}`
  }, [formData.username]);


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  }

  return (
    <div className="min-h-screen flex items-start mt-6 justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">User Form</h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            placeholder="Enter your username"
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
