import { FC } from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import LandingLayout from "../layouts/LandingLayout/LandingLayout";

import { URL_LIST } from "./urls";
import { getLoginedUserInfo } from "../services/reducers/userReducer";
import { useAppSelector } from "../services/hooks";

const AppRouter: FC = () => {
  const userInfo = useAppSelector(getLoginedUserInfo);
  console.log(userInfo);

  return (
    <Router>
      <Routes>
        {URL_LIST.map((urlItem, index) => (
          <Route
            key={index}
            path={urlItem.path}
            element={
              urlItem.session ? (
                userInfo ? (
                  urlItem.layout ? (
                    <MainLayout>
                      <urlItem.component />
                    </MainLayout>
                  ) : (
                    <urlItem.component />
                  )
                ) : (
                  <Navigate to="/signin" />
                )
              ) : userInfo ? (
                <Navigate to="/dashboard" />
              ) : urlItem.layout ? (
                <LandingLayout>
                  <urlItem.component />
                </LandingLayout>
              ) : (
                <urlItem.component />
              )
            }
          />
        ))}
        <Route path="*" element={<p>Page not found. (404)</p>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
