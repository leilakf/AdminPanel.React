import React from "react";
import { Redirect, Route, useLocation,Navigate } from "react-router-dom";

//... => rest parameters

const PrivateRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();

    return (
        <Route {...rest}>
            {localStorage.getItem('user') ?
                <Component />
                :
                <Navigate to={{ pathname: "/login", state: { from: location } }} />
            }
        </Route>
    );
};

export default PrivateRoute;


{/* <Routes>
    {localStorage.getItem('user') ?
        <Route path='/' element={<MainDashboard />} />
        :
        <Route path='/login' element={<Login />} />
    }
</Routes> */}