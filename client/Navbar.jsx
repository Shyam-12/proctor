// import { Link } from "react-router-dom";
/**
 * Creates the navbar that sticks to the top and is present on
 * all pages
 */

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <h1 className="h-8 text-5xl font-semibold tracking-wide">Proctor</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
