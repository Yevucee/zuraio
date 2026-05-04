import { createHashRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import HomeRevised from "./pages/HomeRevised";
import HomeProductLed from "./pages/HomeProductLed";
import HomeV4 from "./pages/HomeV4";
import HowItHelps from "./pages/HowItHelps";
import DataControl from "./pages/DataControl";
import Platform from "./pages/Platform";
import TechnicalArchitecture from "./pages/TechnicalArchitecture";
import StarterPartners from "./pages/StarterPartners";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomeProductLed },
      { path: "home-original", Component: Home },
      { path: "home-revised", Component: HomeRevised },
      { path: "home-product-led", Component: HomeProductLed },
      { path: "home-v4", Component: HomeV4 },
      { path: "how-it-helps", Component: HowItHelps },
      { path: "data-control", Component: DataControl },
      { path: "platform", Component: Platform },
      { path: "technical-architecture", Component: TechnicalArchitecture },
      { path: "starter-partners", Component: StarterPartners },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
