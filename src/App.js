 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './componenets/Footer';
import Home from './componenets/Home';
import Login from './componenets/Login';
import Register from './componenets/Register';
import Main from './layouts/Main'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[{
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
   
    } 
  ])
  return (
    <div className="App">
  
     <RouterProvider router= {router}></RouterProvider>
     
    </div>
  );
}

export default App;
