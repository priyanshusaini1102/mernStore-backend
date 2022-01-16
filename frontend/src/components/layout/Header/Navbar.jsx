import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-5 bg-white sticky top-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              My Store
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:m-auto ">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md capitaliize  leading-snug text-black opacity-75 hover:opacity-100"
                  href="#pablo"
                >
                  <span className="mx-auto">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md capitaliize  leading-snug text-black opacity-75 hover:opacity-100"
                  href="#pablo"
                >
                  <span className={"mx-auto "}>Product</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md capitaliize  leading-snug text-black opacity-75 hover:opacity-100"
                  href="#pablo"
                >
                 <span className={"mx-auto "}>Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md capitaliize  leading-snug text-black opacity-75 hover:opacity-100"
                  href="#pablo"
                >
                 <span className={"mx-auto "}>About</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              "lg:flex  items-center  " +
              (navbarOpen ? " flex " : " hidden ")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mr-0 ">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md capitaliize  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon icon={faSearch} size="lg"  /><span className={"ml-2 lg:hidden"}>Search</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md capitaliize  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon icon={ faUser } size="lg" /><span className={"ml-2 lg:hidden"}>Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md capitaliize  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon icon={faShoppingBag } size="lg"/><span className={"ml-2 lg:hidden"}>Shopping Bag</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}