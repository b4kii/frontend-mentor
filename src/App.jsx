import { createBrowserRouter, createHashRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';

import Home from "./pages/Home";
import FaqAccordion from "./pages/FaqAccordion";
import IntroComponent from "./pages/IntroComponent";
import PricingComponent from "./pages/PricingComponent";
import SocialProofSection from "./pages/SocialProofSection";
import TipCalculator from "./pages/TipCalculator";

// const router = createHashRouter([
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/faq-accordion",
        element: <FaqAccordion />,
      },
      {
        path: "/intro-component",
        element: <IntroComponent />,
      },
      {
        path: "/pricing-component",
        element: <PricingComponent />,
      },
      {
        path: "/social-proof-section",
        element: <SocialProofSection />,
      },
      {
        path: "/tip-calculator",
        element: <TipCalculator />,
      },
    ]
  }
]);

function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}


export default function App() {
  return <RouterProvider router={router} />
}

