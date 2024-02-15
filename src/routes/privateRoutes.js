import Service from "../pages/Service/Service";
import About from "../pages/About/About";
import EmploymentOpportunities from "../pages/EmploymentOpportunities/EmploymentOpportunities";

export const privateRoutes = [
  { path: "/service", name: "Services", Component: Service },
  {
    path: "/employment-opportunities",
    name: "EmploymentOpportunities",
    Component: EmploymentOpportunities,
  },
  { path: "/about", name: "About", Component: About },
];
