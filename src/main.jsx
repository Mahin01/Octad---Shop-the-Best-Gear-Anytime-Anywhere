import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom';


const router = createBrowserRouter();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
