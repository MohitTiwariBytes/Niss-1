// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
// import "./Navbar.css";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const closeMenuOnMobile = () => {
//     if (window.innerWidth <= 1150) {
//       setShowMenu(false);
//     }
//   };
//   return (
//     <header className="header">
//       <nav className="nav container">
//         <NavLink to="/" className="nav__logo">
//           New India Software solutions Pvt Ltd...
//         </NavLink>

//         <div
//           className={`nav__menu ${showMenu ? "show-menu" : ""}`}
//           id="nav-menu"
//         >
//           <ul className="nav__list">
//             <li className="nav__item">
//               <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
//                 About
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/product"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 Product
//               </NavLink>
//             </li>

//             <li className="nav__item">
//               <NavLink
//                 to="/contact-us"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 ContactUs
//               </NavLink>
//             </li>
//  <li className="nav__item dropdown">
// <span className="nav__link dropdown-toggle">
//   More
// </span>
// <ul className="dropdown-menu">
//   <li className="dropdown-item">
//     <NavLink
//       to="/data-entry"
//       className="nav__link"
//       onClick={closeMenuOnMobile}
//     >
//       Data Entry
//     </NavLink>
//   </li>
//   <li className="dropdown-item">
//     <NavLink
//       to="/dashboard"
//       className="nav__link"
//       onClick={closeMenuOnMobile}
//     >
//       Dashboard
//     </NavLink>
//   </li>
// </ul>
// </li> 
//              <li className="nav__item">
//                <NavLink to="/get-started" className="nav__link nav__cta">
//                  Login
//                </NavLink>
//              </li>
//            </ul>
//           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//              <IoClose />
//            </div>
//          </div>

//          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//            <IoMenu />
//          </div>
//        </nav>
//      </header>
//   );
// };

// export default Navbar;



// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import { IoClose, IoMenu } from "react-icons/io5";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const [showMenu, setShowMenu] = useState(false);

// //   const toggleMenu = () => {
// //     setShowMenu(!showMenu);
// //   };

// //   const closeMenuOnMobile = () => {
// //     if (window.innerWidth <= 1150) {
// //       setShowMenu(false);
// //     }
// //   };

// //   return (
// //     <header className="header">
// //       <nav className="nav container">
// //         <NavLink to="/" className="nav__logo">
// //           New India Software Solutions Pvt Ltd
// //         </NavLink>

// //         <div
// //           className={`nav__menu ${showMenu ? "show-menu" : ""}`}
// //           id="nav-menu"
// //         >
// //           <ul className="nav__list">
// //             <li className="nav__item">
// //               <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
// //                 About
// //               </NavLink>
// //             </li>
// //             <li className="nav__item">
// //               <NavLink
// //                 to="/product"
// //                 className="nav__link"
// //                 onClick={closeMenuOnMobile}
// //               >
// //                 Product
// //               </NavLink>
// //             </li>
// //             <li className="nav__item">
// //               <NavLink
// //                 to="/contact-us"
// //                 className="nav__link"
// //                 onClick={closeMenuOnMobile}
// //               >
// //                 Contact Us
// //               </NavLink>
// //             </li>
// //             <li className="nav__item dropdown">
// //               <span className="nav__link dropdown-toggle">
// //                 More
// //               </span>
// //               <ul className="dropdown-menu">
// //                 <li className="dropdown-item">
// //                   <NavLink
// //                     to="/data-entry"
// //                     className="nav__link"
// //                     onClick={closeMenuOnMobile}
// //                   >
// //                     Data Entry
// //                   </NavLink>
// //                 </li>
// //                 <li className="dropdown-item">
// //                   <NavLink
// //                     to="/dashboard"
// //                     className="nav__link"
// //                     onClick={closeMenuOnMobile}
// //                   >
// //                     Dashboard
// //                   </NavLink>
// //                 </li>
// //               </ul>
// //             </li>
// //             <li className="nav__item">
// //               <NavLink
// //                 to="/get-started"
// //                 className="nav__link nav__cta"
// //               >
// //                 Login
// //               </NavLink>
// //             </li>
// //           </ul>
// //           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
// //             <IoClose />
// //           </div>
// //         </div>

// //         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
// //           <IoMenu />
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import logo1 from "../logo1.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // Close menu when resizing
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
        <img src={logo1}  className="nav__logo-img" />
          New India Software Solutions Pvt Ltd
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/product"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Product
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav__item dropdown">
              <span className="nav__link dropdown-toggle">
                More
              </span>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <NavLink
                    to="/data-entry"
                    className="nav__link"
                    onClick={closeMenuOnMobile}
                  >
                    Data Entry
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink
                    to="/login"
                    className="nav__link"
                    onClick={closeMenuOnMobile}
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <NavLink
                to="/get-started"
                className="nav__link nav__cta"
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

