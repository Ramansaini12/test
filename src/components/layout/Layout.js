import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
const Layout = () => {
    return (
        <React.Fragment>
            <div class=" ">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default Layout;