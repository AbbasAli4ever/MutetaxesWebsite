import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
 
} from "react-router-dom";

// Screens
import { HomePage } from "./screens/HomePage";
import { Secretary } from "./screens/Secretary";
import { Incorporation } from "./screens/Incorporation";
import { AccountingServices } from "./screens/AccountingServices";
import { AuditSupport } from "./screens/AuditSupport";

// Components
import { Navbar } from "./UIComponents/Navbar";
import { Footer } from "./UIComponents/Footer";

// ✅ Layout that includes Navbar + dynamic content
const AppLayout = () => {

  return (
    <div className="relative bg-[#efefef]">
      <Navbar />
      {/* On the homepage, the hero section is positioned behind the transparent navbar.
          On other pages, padding is added to push content below the navbar. */}
      <main style={{ paddingTop:  0 }}>
        <Outlet />
      </main>
<Footer/>
    </div>
  );
};

// ✅ Correct router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root layout path
    element: <AppLayout />,
    children: [
      {
        index: true, // Default route ("/")
        element: <HomePage />,
      },
      {
        path: "secretary",
        element: <Secretary />,
      },
      {
        path: "incorporate",
        element: <Incorporation />,
      },
      {
        path: "accounting-services",
        element: <AccountingServices />,
      },
      {
        path: "audit-support",
        element: <AuditSupport />,
      },
    ],
  },
]);

// ✅ Mount React App
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
