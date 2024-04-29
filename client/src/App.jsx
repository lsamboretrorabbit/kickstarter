import "./styles/globals.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import { Home, Profile, Create, CampaignPage } from "./pages"
import { Navbar, Sidebar } from "./components"

const Layout = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#ffffff] min-h-screen flex flex-row">
    <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/create",
        element: <Create />
      },
      {
        path: "/campaign/:title",
        element: <CampaignPage />
      }
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
