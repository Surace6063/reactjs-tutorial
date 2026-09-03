import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuantity } from "../context/QuantityContext";
import useQuantityStore from "../zustand/QuantityStore";
import useAuthStore from "../zustand/AuthStore";
import Button from "./ui/button";

const Navbar = () => {
  // accessing quantity state from QuantityContext
  // const {quantity} = useQuantity()

  // accessing quantity value from zustand
  const { quantity } = useQuantityStore();

  const {isLoggedIn,user,logout} = useAuthStore()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">MyLogo</div>

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

            <Link to="/products">
              <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
                Products
              </div>
            </Link>

            <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
              Contact
            </div>

            <Link to="/admin/dashboard">
              <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
                Dashbaord
              </div>
            </Link>

            <Link to="/useEffect">
              <div className="text-gray-700 hover:text-indigo-600 cursor-pointer font-medium">
                UseEffect
              </div>
            </Link>
          </div>

          {/* Login Button */}

          {!isLoggedIn ? (
            <Link to="/login">
              <Button variant="secondary">
                Login 
              </Button>
            </Link>
          ) : (
            <div className="space-x-2">
              <span>{user?.email}</span>
              <button onClick={() => logout()} className="btn">logout</button>
            </div>
          )}

          <div className="flex gap-1 items-center">
            <ShoppingCart />
            <span>({quantity})</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
