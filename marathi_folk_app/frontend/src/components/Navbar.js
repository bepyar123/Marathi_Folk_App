
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="font-bold text-lg">Marathi Folk Songs</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-600 transition">Home</Link>
        <Link to="/predict" className="hover:text-orange-600 transition">Folk Songs</Link>
        <Link to="/timeline" className="hover:text-orange-600 transition">Timeline</Link>
        <Link to="/contribution" className="hover:text-orange-600 transition">Contribution</Link>
        <Link to="/cultureexplorer" className="hover:text-orange-600 transition">Culture Explorer</Link>
      </div>
    </nav>
  );
}



