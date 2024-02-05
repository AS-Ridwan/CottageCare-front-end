import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Service from "../pages/Service/Service";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  // { path: "/service", name: "Services", Component: Service },
  // { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact us", Component: Contact },
  { path: "/signup", name: "Signup", Component: Signup },
];
