import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link className='text-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='text-link' to='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
