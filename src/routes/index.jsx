import React from "react";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ErrorBoundary, LazyLoad, Page, ProtectedRoute } from "../components";
import PublicRoute from "../components/PublicRoute";
import AppLayout from "../layouts";
import { PATH_HOME, PATH_LOGIN } from "../routes/paths";
import { routes } from "./routes";

const LoginPage = lazy(() => import("../pages/login"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LazyLoad />}>
      <ErrorBoundary>
        <Routes>
          <Route path="/">
            <Route path="/" element={<AppLayout />}>
              {routes.map(({ path, element, children, name }) => {
                return children && children.length > 0 ? (
                  children.map((childEle) => (
                    <Route element={<ProtectedRoute />} key={childEle.path}>
                      <Route
                        path={childEle.path}
                        element={
                          <Page title={childEle.name}>{childEle.element}</Page>
                        }
                      />
                    </Route>
                  ))
                ) : (
                  <Route element={<ProtectedRoute />} key={path}>
                    <Route
                      key={path}
                      path={path}
                      element={<Page title={name}>{element}</Page>}
                    />
                  </Route>
                );
              })}
            </Route>
          </Route>
          <Route path="login" element={<PublicRoute />}>
            <Route
              path={PATH_LOGIN}
              element={
                <Page title="Đăng nhập">
                  <LoginPage />
                </Page>
              }
            />
          </Route>
          <Route path="*" element={<h1>PATH ERR</h1>} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
}
