import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserDropdown() {
  const [user, setUser] = useState(null); // null = not logged in
  const [open, setOpen] = useState(false);

  // Load user info from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
  };

  

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 p-2 border rounded"
      >
        {user ? (
          <>
            <FaUserCircle className="text-xl" />
            <span>{user.name}</span>
          </>
        ) : (
          "Login"
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
          {user ? (
            <>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Profile
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Booking
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => window.dispatchEvent(new Event("openLogin"))}>
                Login
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Signup
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Booking
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
