import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
             <Route path="*" element={<HomePage />} />
        </Routes>
    );
}

export default AppRoutes;