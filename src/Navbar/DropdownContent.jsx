// // import { NavLink } from "react-router-dom";
// // import { IoPersonSharp } from "react-icons/io5";
// // import { MdPersonAddAlt1 } from "react-icons/md";
// // import { FaRegCircleUser } from "react-icons/fa6";
// // import { LuTickets } from "react-icons/lu";
// // import { TbLogout } from "react-icons/tb";

// // export default function DropdownContent({
// //   user,
// //   onLogin,
// //   onSignup,
// //   onLogout
// // }) {
// //   return (
// //     <>
// //       {!user ? (
// //         <>
// //           {/* <div
// //             onClick={onLogin}
// //             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
// //           > */}
// //           <div
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               navigate("/account/profile");
// //             }}
// //             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
// //           >

// //             <IoPersonSharp className="text-blue-600 text-lg" />
// //             <div>
// //               <p className="text-sm font-semibold">Customer Login</p>
// //               <p className="text-xs text-gray-500">Login & check bookings</p>
// //             </div>
// //           </div>

// //           <hr />

// //           <div
// //             onClick={onSignup}
// //             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
// //           >
// //             <MdPersonAddAlt1 className="text-blue-600 text-lg" />
// //             <div>
// //               <p className="text-sm font-semibold">Sign Up</p>
// //               <p className="text-xs text-gray-500">Create your account</p>
// //             </div>
// //           </div>
// //         </>
// //       ) : (
// //         <>
// //           <NavLink
// //             to="/account/profile"
// //             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
// //           >
// //             <FaRegCircleUser className="text-blue-600 text-lg" />
// //             <div>
// //               <p className="text-sm font-semibold">My Profile</p>
// //               <p className="text-xs">Manage your profile</p>
// //             </div>
// //           </NavLink>

// //           <hr />

// //           <NavLink
// //             to="/account/bookings"
// //             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
// //           >
// //             <LuTickets className="text-blue-600 text-lg" />
// //             <div>
// //               <p className="text-sm font-semibold">My Bookings</p>
// //               <p className="text-xs">Manage bookings</p>
// //             </div>
// //           </NavLink>

// //           <hr />

// //           <button
// //             onClick={onLogout}
// //             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-blue-600 w-full text-left"
// //           >
// //             <TbLogout className="text-lg" />
// //             <p className="text-sm font-semibold">Logout</p>
// //           </button>
// //         </>
// //       )}
// //     </>
// //   );
// // }


// import { NavLink } from "react-router-dom";
// import { IoPersonSharp } from "react-icons/io5";
// import { MdPersonAddAlt1 } from "react-icons/md";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { LuTickets } from "react-icons/lu";
// import { TbLogout } from "react-icons/tb";

// export default function DropdownContent({
//   user,
//   onLogin,
//   onSignup,
//   onLogout
// }) {
//   return (
//     <>
//       {!user ? (
//         <>
//           <div
//             onClick={onLogin}
//             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
//           >
//             <IoPersonSharp className="text-blue-600 text-lg" />
//             <div>
//               <p className="text-sm font-semibold">Customer Login</p>
//               <p className="text-xs text-gray-500">Login & check bookings</p>
//             </div>
//           </div>

//           <hr />

//           <div
//             onClick={onSignup}
//             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
//           >
//             <MdPersonAddAlt1 className="text-blue-600 text-lg" />
//             <div>
//               <p className="text-sm font-semibold">Sign Up</p>
//               <p className="text-xs text-gray-500">Create your account</p>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <NavLink
//             to="/account/profile"
//             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
//           >
//             <FaRegCircleUser className="text-blue-600 text-lg" />
//             <div>
//               <p className="text-sm font-semibold">My Profile</p>
//               <p className="text-xs">Manage your profile</p>
//             </div>
//           </NavLink>

//           <hr />

//           <NavLink
//             to="/account/bookings"
//             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
//           >
//             <LuTickets className="text-blue-600 text-lg" />
//             <div>
//               <p className="text-sm font-semibold">My Bookings</p>
//               <p className="text-xs">Manage bookings</p>
//             </div>
//           </NavLink>

//           <hr />

//           <button
//             onClick={onLogout}
//             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-blue-600 w-full text-left"
//           >
//             <TbLogout className="text-lg" />
//             <p className="text-sm font-semibold">Logout</p>
//           </button>
//         </>
//       )}
//     </>
//   );
// }

import { NavLink } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuTickets } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";

export default function DropdownContent({
  user,
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
          <NavLink
            to="/account/profile"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
          >
            <FaRegCircleUser className="text-blue-600 text-lg" />
            <div>
              <p className="text-sm font-semibold">My Profile</p>
              <p className="text-xs">Manage your profile</p>
            </div>
          </NavLink>

          <hr />

          <NavLink
            to="/account/bookings"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
          >
            <LuTickets className="text-blue-600 text-lg" />
            <div>
              <p className="text-sm font-semibold">My Bookings</p>
              <p className="text-xs">Manage bookings</p>
            </div>
          </NavLink>

          <hr />

          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-blue-600 w-full text-left"
          >
            <TbLogout className="text-lg" />
            <p className="text-sm font-semibold">Logout</p>
          </button>
        </>
      )}
    </>
  );
}
