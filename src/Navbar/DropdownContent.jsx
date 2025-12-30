import {
  IoPersonSharp
} from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuTickets } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";

export default function DropdownContent({
  user,
  navigate,
  onLogin,
  onSignup,
  onLogout
}) {
  return (
    <>
      {!user ? (
        <>
          <div
            onClick={onLogin}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
          >
            <IoPersonSharp className="text-blue-600 text-lg" />
            <div>
              <p className="text-sm font-semibold">Customer Login</p>
              <p className="text-xs text-gray-500">Login & check bookings</p>
            </div>
          </div>

          <hr />

          <div
            onClick={onSignup}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
          >
            <MdPersonAddAlt1 className="text-blue-600 text-lg" />
            <div>
              <p className="text-sm font-semibold">Sign Up</p>
              <p className="text-xs text-gray-500">Create your account</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => navigate("/account/profile")}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
          >
            <FaRegCircleUser className="text-blue-600 text-lg" />
            <div>
              <p className="text-sm font-semibold">My Profile</p>
              <p>Manage your profile</p>
            </div>
          </div>

          <hr />

          <div
            onClick={() => navigate("/account/bookings")}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
          >
            <LuTickets className="text-blue-600 text-lg" />
            <div>
              <p className="text-sm font-semibold">My Bookings</p>
              <p>Manage bookings</p>
            </div>
          </div>

          <hr />

          <div
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-blue-600"
          >
            <TbLogout className="text-lg" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        </>
      )}
    </>
  );
}
