
import {
  CgLogIn,
  CgHome,
  CgInfo,
  CgPhone,
  CgFileDocument,
  CgBriefcase,
} from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", link: "Home", icon: <CgHome /> },
    { path: "/about", link: "About", icon: <CgInfo /> },
    { path: "/contact", link: "Contact", icon: <CgPhone /> },
    { path: "/blogs", link: "Blog", icon: <CgFileDocument /> },
    { path: "/services", link: "Services", icon: <CgBriefcase /> },
  ];

  return (
    <header className="bg-black p-1">
      <nav className="px-2 py-2 flex justify-between">
        <a href="/" className="text-xl font-bold text-white">
          Blog<span className="text-orange-400">Website</span>
        </a>
        <ul className="md:flex gap-12 text-lg">
          {navItems.map(({ path, link, icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="text-white hover:underline flex items-center gap-1"
              >
                {icon}
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/sign_in" className="hover:text-orange-500 flex items-center gap-1">
            <span>Login</span>
            <CgLogIn />
          </a>
          {/* sign_up */}
          <a href="/#" className="hover:text-orange-500 flex items-center gap-1"> 
            <span>SignUp</span>
            <CgLogIn />
          </a>
        </div>
      </nav>
      
    </header>
  );
};

export default Navbar;
