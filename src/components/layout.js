import * as React from "react";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children}) => {
    return (
        <main className={container}>
            <head>{pageTitle}</head>
            {children}
        </main>
    )
}

export default Layout;