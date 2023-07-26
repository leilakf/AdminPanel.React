import './App.css';

import { Route, Routes } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import { AdminLayout } from './layouts/admin-layout/AdminLayout';
import { Login } from './components/auth/Login';

function App() {
  return (

    <AdminLayout/>
    
  );
}

export default App;
// <Routes>
      {/* <Route Component={PrivateRoute}>
        <Route path="/" Component={AdminLayout} />
      </Route> */}

      {/* <Route path='/login' Component={Login} /> */}
    {/* </Routes> */}