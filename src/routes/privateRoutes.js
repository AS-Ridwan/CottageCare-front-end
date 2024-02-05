import Service from "../pages/Service/Service";
import About from "../pages/About/About";

export const privateRoutes = [
  { path: "/service", name: "Services", Component: Service },
  { path: "/about", name: "About", Component: About },
];
