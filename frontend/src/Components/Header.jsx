import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className=" bg-cyan-700 body-font">
        <ul className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <li>
            <Link
              to="/"
              className="flex title-font font-medium items-center text-black mb-4 md:mb-0"
            >
              <span className="ml-3 text-2xl">Support Desk</span>
            </Link>
          </li>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <li>
              <button className=" mr-5 cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Logout
              </button>
            </li>
            <li>
              <Link
                to="/login"
                className="mr-5  cursor-pointer hover:text-white"
              >
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="mr-5  cursor-pointer  hover:text-white"
              >
                <FaUser />
                Register
              </Link>
            </li>
          </nav>
        </ul>
      </header>
    </>
  );
}

export default Header;
