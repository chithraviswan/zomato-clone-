import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link to="/">🍽️ Zomato Clone</Link>
      </h1>
    </nav>
  );
}
