import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">
            MyLogo
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/">
              <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
              Home
            </div>
            </Link>

            <Link to="/about">
              <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
              About
            </div>
            </Link>

            <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
              Services
            </div>

            <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
              Contact
            </div>
          </div>

          {/* Login Button */}
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar