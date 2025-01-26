import React from "react";
import { ConfigProvider, Menu } from "antd";
import { forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_HOME } from "../../routes/paths";
import { routes } from "../../routes/routes";
import { FC, useCallback, useEffect, useRef, useState } from "react";

export const Sidebar = forwardRef(() => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const location = useLocation();

    const renderedSidebarMenu = routes.map(
      ({ path, name, show, children }) => {
        return show
          ? {
              key: path || name,
              label: name,
              onClick: () => path && navigate(path),
            }
          : null;
      }
    );

    return (
      <div
        className="h-full"
      >
        <ConfigProvider>
          <Menu
            mode="vertical"
            defaultOpenKeys={[PATH_HOME]}
            selectedKeys={[location.pathname, location.pathname.slice(1)]}
            items={renderedSidebarMenu}
            className=""
          />
        </ConfigProvider>
      </div>
    )

  }
);
