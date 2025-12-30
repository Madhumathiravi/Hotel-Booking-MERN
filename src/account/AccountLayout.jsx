// import { Outlet } from "react-router-dom";

// export default function AccountLayout() {
//   return (
//     <div className="min-h-screen">
//       <Outlet />
//     </div>
//   );
// }

import { Navigate, Outlet } from "react-router-dom";

export default function AccountLayout() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
