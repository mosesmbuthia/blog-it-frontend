import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import useUserStore from "./userStore.js";

const privateRoutes = () => {
    const {user} = useUserStore();
    return user? <Outlet/> : <Navigate to="/login" replace/>
};

export default privateRoutes