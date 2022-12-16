 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './componenets/Home';
import Login from './componenets/Login';
import Orders from './componenets/Orders';
import Register from './componenets/Register';
import Main from './layouts/Main'
import PrivateRoute from './privateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[{
        path:'/',
        element:<PrivateRoute><Home></Home></PrivateRoute>
      },
      {
       path:'/orders',
       element:<PrivateRoute><Orders></Orders></PrivateRoute>
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
