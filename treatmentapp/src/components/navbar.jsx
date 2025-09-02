import { useDispatch } from "react-redux";

import { cleartreatments } from "../featuers/treatments/treatmentSlice";
export  const Navbar=()=> {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(cleartreatments());
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="font-bold">Treatment Manager</h1>
      <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </nav>
  );
}
