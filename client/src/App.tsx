import './App.css'
import Login from './auth/login'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from './MainLayout'
import ForgotPassword from './auth/‎ForgotPassword'
import ResetPassword from './auth/‎ResetPassword'
import VerifyEmail from './auth/‎VerifyEmail'
import Signup from './auth/Signup'
import Navbar from './components/Navbar'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    // children: [
    //   {
    //     path: "/login",
    //     element: <Login />
    //   }
    // ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />
  },
])

function App() {

  return (
    <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </main>
  )
}

export default App
