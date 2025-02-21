import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './components/Layout/MainLayout'
import Home from './Pages/Home'
import FetchOld from './Pages/FetchOld'
import FetchRQ from './Pages/FetchRQ'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/trad",
        element: <FetchOld />,

      },
      {
        path: "/rq",
        element: < FetchRQ />,

      }
    ]
  }
])


const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App
