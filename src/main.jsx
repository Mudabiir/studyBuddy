import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import ProfilePage from './routes/components/profile.jsx'
import { Provider } from 'react-redux'

// components

import Layout from './Layout.jsx'
import Discuss from './Discuss.jsx'
import Collab from './Collab.jsx'
import Resources from './Resources.jsx'
import Home from './Home.jsx'
import Flashcards from './Flashcards.jsx'
<<<<<<< HEAD
import { store } from './app/store.js'
=======
import VideoPage from './VideoPage.jsx'
>>>>>>> e1869ddbc42e8936349b0093226a6c2d7c871fc3



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const {userId}=useAuth
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/collab", element: <Collab /> },
      { path: "/home", element: <Home /> },
      { path: "/discussion", element: <Discuss /> },
      { path: "/resources", element: <Resources /> },
      { path: "/resources/flashcards", element: <Flashcards /> },
    {  path: "/collab/room/:id", element: <VideoPage  /> },
      // {
      //   element: <DashboardLayout />,
      //   path: "dashboard",
      //   children: [
      //     { path: "/dashboard", element: <ProfilePage /> },

      //   ]
      // }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
    </Provider>
  </React.StrictMode>
)
