import React from "react";
import { ConfigProvider, Menu } from "antd";
import { forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_HOME } from "../../routes/paths";
import { routes } from "../../routes/routes";

// import { getItemLocalStorage } from "../../../utils/storage";
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

    // const getUser = useCallback(async () => {
    //   try {
    //     const userInfo = getItemLocalStorage(LocalStorageKey.user);
    //     setUser(userInfo);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }, []);

    // useEffect(() => {
    //   getUser();
    // }, []);

    return (
      <div
        className="h-full"
      >
        <ConfigProvider
          theme={{
            components : {
              Menu : {
                darkItemSelectedBg : "#F9423A",
                horizontalItemHoverColor : "#F9423A",
                itemSelectedColor	: "#F9423A",
                horizontalItemSelectedColor : "#F9423A",
                
                },
            },
            token: {
              colorPrimaryBorder : "#F9423A",
            }
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultOpenKeys={[PATH_HOME]}
            selectedKeys={[location.pathname, location.pathname.slice(1)]}
            items={renderedSidebarMenu}
            className="!justify-center gap-10"
          />
        </ConfigProvider>
      </div>
    )

  }
);
