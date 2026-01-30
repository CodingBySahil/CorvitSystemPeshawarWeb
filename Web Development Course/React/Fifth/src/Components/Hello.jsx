import { useEffect, useState } from "react";

function Hello() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  async function bringData() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setUsers(data.users);
    console.log(users);
    
  }

  useEffect(() => {
    bringData();
  },[]);

  useEffect(() => {
    document.title = "Notification : " + count;
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        👥 Users Information
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5"
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-16 h-16 rounded-full border"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>

            {/* Basic Info */}
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p><span className="font-medium">Age:</span> {user.age}</p>
              <p><span className="font-medium">Gender:</span> {user.gender}</p>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              <p><span className="font-medium">Phone:</span> {user.phone}</p>
              <p><span className="font-medium">Blood Group:</span> {user.bloodGroup}</p>
            </div>

            {/* Address */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-1">📍 Address</h3>
              <p className="text-sm text-gray-600">
                {user.address.address}, {user.address.city},{" "}
                {user.address.state}
              </p>
            </div>

            {/* Company */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-1">🏢 Company</h3>
              <p className="text-sm text-gray-600">
                {user.company.name}
              </p>
              <p className="text-sm text-gray-500">
                {user.company.title} - {user.company.department}
              </p>
            </div>

            {/* Action */}
            <button
              onClick={() => setCount(count + 1)}
              className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Notify
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hello;
