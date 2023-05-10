import { Link } from "react-router-dom";
import './navbar.css';
/**
 * Creates the navbar that sticks to the top and is present on
 * all pages
 */
export default function Navbar() {
  return (
    <div className="navbar-fixed">
    <nav className="z-depth-0">
      <div>
        <Link to="/" className="logo">
          PROCTOR
        </Link>
      </div>
    </nav>
  </div>
  );
}
