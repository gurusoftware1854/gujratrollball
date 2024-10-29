// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [nestedDropdown, setNestedDropdown] = useState(null);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { pathname } = useRouter(); // Get the current pathname from useRouter

//   const toggleDropdown = (dropdown) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//     if (dropdown !== "tracebeat") {
//       setNestedDropdown(null);
//     }
//   };

//   const toggleNestedDropdown = (nested) => {
//     setNestedDropdown(nestedDropdown === nested ? null : nested);
//   };

//   const handleNestedDropdownClick = (e) => {
//     e.stopPropagation();
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [pathname]); // Use pathname from useRouter

//   const isActiveLink = (path) => pathname === path;

//   return (
//     <div className="navbar-area">
//       {/* Mobile Navigation */}
//       <div className="mobile-nav mean-container monav">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Logo Section */}
//             <div className="col-6 d-flex align-items-center">
 
//               <Link className="navbar-brand" href="/">
//               <img
//                 src="/assets/img/logo.webp"
//                 style={{ width: "130px", height: "auto" }}
//                 className="logo-one"
//                 alt="Logo"
//               />
//             </Link>

//             </div>
//             <div className="col-6 d-flex justify-content-end">
//               <button
//                 className={`meanmenu-reveal ${
//                   isMobileMenuOpen ? "meanclose" : ""
//                 }`}
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? "X" : "☰"}
//               </button>
//             </div>
         
//           </div>

//           {isMobileMenuOpen && (
//             <nav className="mean-nav">
//               <ul className="navbar-nav m-auto">
//                 <li className="nav-item">
//                   <Link
//                     href="/"
//                     className={`nav-link ${isActiveLink("/") ? "active" : ""}`}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="/about"
//                     className={`nav-link ${
//                       isActiveLink("/about") ? "active" : ""
//                     }`}
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="#"
//                     className={`nav-link ${
//                       openDropdown === "products" ? "" : ""
//                     }`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       toggleDropdown("products");
//                     }}
//                   >
//                     Products
//                     <span className="mean-expand" style={{ fontSize: 18 }}>
//                       +
//                     </span>
//                   </Link>
//                   {openDropdown === "products" && (
//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/countbeat"
//                           className={`nav-link ${
//                             isActiveLink("/countbeat") ? "active" : ""
//                           }`}
//                         >
//                           Countbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/blisbeat"
//                           className={`nav-link ${
//                             isActiveLink("/blisbeat") ? "active" : ""
//                           }`}
//                         >
//                           Blisbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/blisbeat-b"
//                           className={`nav-link ${
//                             isActiveLink("/blisbeat-b") ? "active" : ""
//                           }`}
//                         >
//                           Blisbeat-B
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/microbeat"
//                           className={`nav-link ${
//                             isActiveLink("/microbeat") ? "active" : ""
//                           }`}
//                         >
//                           Microbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/codebeat"
//                           className={`nav-link ${
//                             isActiveLink("/codebeat") ? "active" : ""
//                           }`}
//                         >
//                           Codebeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/traybeat"
//                           className={`nav-link ${
//                             isActiveLink("/traybeat") ? "active" : ""
//                           }`}
//                         >
//                           Traybeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/punchbeat"
//                           className={`nav-link ${
//                             isActiveLink("/punchbeat") ? "active" : ""
//                           }`}
//                         >
//                           Punchbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="#"
//                           className={`nav-link ${
//                             nestedDropdown === "tracebeat" ? "active" : ""
//                           }`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             toggleNestedDropdown("tracebeat");
//                           }}
//                         >
//                           Tracebeat
//                           <span
//                             className="mean-expand"
//                             style={{ fontSize: 18 }}
//                           >
//                             +
//                           </span>
//                         </Link>
//                         {nestedDropdown === "tracebeat" && (
//                           <ul className="dropdown-menu nested-dropdown">
//                             <li className="nav-item">
//                               <Link
//                                 href="/yanno"
//                                 className={`nav-link ${
//                                   isActiveLink("/yanno") ? "active" : ""
//                                 }`}
//                                 onClick={handleNestedDropdownClick}
//                               >
//                                 Yanno
//                               </Link>
//                             </li>
//                             <li className="nav-item">
//                               <Link
//                                 href="/mozarto"
//                                 className={`nav-link ${
//                                   isActiveLink("/mozarto") ? "active" : ""
//                                 }`}
//                                 onClick={handleNestedDropdownClick}
//                               >
//                                 Mozarto
//                               </Link>
//                             </li>
//                           </ul>
//                         )}
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="/services"
//                     className={`nav-link ${
//                       isActiveLink("/services") ? "active" : ""
//                     }`}
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="#"
//                     className={`nav-link ${
//                       openDropdown === "insights" ? "" : ""
//                     }`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       toggleDropdown("insights");
//                     }}
//                   >
//                     Insights
//                     <span className="mean-expand" style={{ fontSize: 18 }}>
//                       +
//                     </span>
//                   </Link>
//                   {openDropdown === "insights" && (
//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/blogs"
//                           className={`nav-link ${
//                             isActiveLink("/blogs") ? "active" : ""
//                           }`}
//                         >
//                           Blogs
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/news-updates"
//                           className={`nav-link ${
//                             isActiveLink("/news-updates") ? "active" : ""
//                           }`}
//                         >
//                           News & Updates
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/events"
//                           className={`nav-link ${
//                             isActiveLink("/events") ? "active" : ""
//                           }`}
//                         >
//                           Events
//                         </Link>
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="/career"
//                     className={`nav-link ${
//                       isActiveLink("/career") ? "active" : ""
//                     }`}
//                   >
//                     Career
//                   </Link>
//                 </li>
//                 <li className="nav-item mean-last">
//                   <Link
//                     href="/contact"
//                     className={`nav-link ${
//                       isActiveLink("/contact") ? "active" : ""
//                     }`}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           )}
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="main-nav" style={{ backgroundColor: "#fff" }}>
//         <div className="container-fluid">
//           <nav className="container-max-2 navbar navbar-expand-md navbar-light">
//             <Link className="navbar-brand" href="/">
//               <img
//                 src="assets/img/logo.webp"
//                 style={{ width: "130px", height: "auto" }}
//                 className="logo-one"
//                 alt="Logo"
//               />
//             </Link>

//             <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
//               <ul className="navbar-nav m-auto">
//                 <li className="nav-item">
//                   <Link
//                     href="/"
//                     className={`nav-link ${isActiveLink("/") ? "active" : ""}`}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="/about"
//                     className={`nav-link ${isActiveLink("/about") ? "active" : ""}`}
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="#"
//                     className={`nav-link ${openDropdown === "products" ? "" : ""}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       toggleDropdown("products");
//                     }}
//                   >
//                     Products
//                     <span className="mean-expand" style={{ fontSize: 18 }}>+</span>
//                   </Link>
//                   {openDropdown === "products" && (
//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/countbeat"
//                           className={`nav-link ${isActiveLink("/countbeat") ? "active" : ""}`}
//                         >
//                           Countbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/blisbeat"
//                           className={`nav-link ${isActiveLink("/blisbeat") ? "active" : ""}`}
//                         >
//                           Blisbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/blisbeat-b"
//                           className={`nav-link ${isActiveLink("/blisbeat-b") ? "active" : ""}`}
//                         >
//                           Blisbeat-B
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/microbeat"
//                           className={`nav-link ${isActiveLink("/microbeat") ? "active" : ""}`}
//                         >
//                           Microbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/codebeat"
//                           className={`nav-link ${isActiveLink("/codebeat") ? "active" : ""}`}
//                         >
//                           Codebeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/traybeat"
//                           className={`nav-link ${isActiveLink("/traybeat") ? "active" : ""}`}
//                         >
//                           Traybeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/punchbeat"
//                           className={`nav-link ${isActiveLink("/punchbeat") ? "active" : ""}`}
//                         >
//                           Punchbeat
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="#"
//                           className={`nav-link ${nestedDropdown === "tracebeat" ? "active" : ""}`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             toggleNestedDropdown("tracebeat");
//                           }}
//                         >
//                           Tracebeat
//                           <span className="mean-expand" style={{ fontSize: 18 }}>+</span>
//                         </Link>
//                         {nestedDropdown === "tracebeat" && (
//                           <ul className="dropdown-menu nested-dropdown">
//                             <li className="nav-item">
//                               <Link
//                                 href="/yanno"
//                                 className={`nav-link ${isActiveLink("/yanno") ? "active" : ""}`}
//                                 onClick={handleNestedDropdownClick}
//                               >
//                                 Yanno
//                               </Link>
//                             </li>
//                             <li className="nav-item">
//                               <Link
//                                 href="/mozarto"
//                                 className={`nav-link ${isActiveLink("/mozarto") ? "active" : ""}`}
//                                 onClick={handleNestedDropdownClick}
//                               >
//                                 Mozarto
//                               </Link>
//                             </li>
//                           </ul>
//                         )}
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="/services"
//                     className={`nav-link ${isActiveLink("/services") ? "active" : ""}`}
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="#"
//                     className={`nav-link ${openDropdown === "insights" ? "" : ""}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       toggleDropdown("insights");
//                     }}
//                   >
//                     Insights
//                     <span className="mean-expand" style={{ fontSize: 18 }}>+</span>
//                   </Link>
//                   {openDropdown === "insights" && (
//                     <ul className="dropdown-menu">
//                       <li className="nav-item">
//                         <Link
//                           href="/blogs"
//                           className={`nav-link ${isActiveLink("/blogs") ? "active" : ""}`}
//                         >
//                           Blogs
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/news-updates"
//                           className={`nav-link ${isActiveLink("/news-updates") ? "active" : ""}`}
//                         >
//                           News & Updates
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           href="/events"
//                           className={`nav-link ${isActiveLink("/events") ? "active" : ""}`}
//                         >
//                           Events
//                         </Link>
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="/career"
//                     className={`nav-link ${isActiveLink("/career") ? "active" : ""}`}
//                   >
//                     Career
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     href="/contact"
//                     className={`nav-link ${isActiveLink("/contact") ? "active" : ""}`}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//               <div class=" mainhide"></div>

//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
