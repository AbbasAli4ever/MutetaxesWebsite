import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Secretary } from "./screens/Secretary";
import { Incorporation } from "./screens/Incorporation";
import { AccountingServices } from "./screens/AccountingServices";
import { AuditSupport } from "./screens/AuditSupport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/secretary",
    element: <Secretary />,
  },
  {
    path: "/incorporate",
    element: <Incorporation />,
  },
  {
    path: "/AccountingServices",
    element: <AccountingServices />,
  },
  {
    path: "/AuditSupport",
    element: <AuditSupport />,
  },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
