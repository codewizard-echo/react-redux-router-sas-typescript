import { FunctionComponent } from "react";
import Signin from "../pages/Auth/Signin/Signin";
import Signup from "../pages/Auth/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";

export interface URL_PROPS {
    path: string;
    component: FunctionComponent;
    session: boolean;
    layout: boolean;
}

export const URL_LIST: URL_PROPS[] = [
    // User
    {
        path: '/dashboard', 
        component: Dashboard, 
        session: true, 
        layout: true, 
    }, {
        path: '/signin', 
        component: Signin, 
        session: false, 
        layout: false, 
    }, {
        path: '/signup', 
        component: Signup, 
        session: false, 
        layout: false, 
    }
]
