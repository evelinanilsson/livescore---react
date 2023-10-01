import { Link } from "react-router-dom";

function Navbar({}) {
    return (
    <nav className="navbar bg-neutral text-white content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox='0 0 24 24' stroke="currentColor">
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 z-100">
                <li>
                  <Link to="/" className="btn btn-ghost normal-case text-xl">Live matches</Link>
                </li>
                <li>
                  <Link to="/fixtures" className="btn btn-ghost normal-case text-xl">Fixtures</Link>
                </li>
                <li>
                  <Link to="/results" className="btn btn-ghost normal-case text-xl">Results</Link>
                </li>
                <li>
                  <Link to="/table" className="btn btn-ghost normal-case text-xl">Table</Link>
                </li>
            </ul>
          </div>
          <div className="navbar-center invisible md:visible">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Live matches</Link>
            <Link to="/fixtures" className="btn btn-ghost normal-case text-xl">Fixtures</Link>
            <Link to="/results" className="btn btn-ghost normal-case text-xl">Results</Link>
            <Link to="/table" className="btn btn-ghost normal-case text-xl">Table</Link>
          </div>
        </div>
    </nav>
    );
  }

  export default Navbar;