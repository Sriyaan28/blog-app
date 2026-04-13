import { createBrowserRouter,RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout.jsx"
import Home from "./components/Home.jsx"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import UserProfile from "./components/UserProfile.jsx"
import AuthorProfile from "./components/AuthorProfile.jsx"
import AdminProfile from "./components/AdminProfile.jsx"

function App() {
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"",
          element:<Home />
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:"login",
          element:<Login />
        },
        {
          path:"user-profile",
          element:<UserProfile />
        },
        {
          path:"author-profile",
          element:<AuthorProfile />
        },
        {
          path:"admin-profile",
          element:<AdminProfile />
        }

      ]
    }
  ])
  return (
    <RouterProvider router={routerObj}></RouterProvider>
  )
}

export default App