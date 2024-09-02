import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { LocalStorageKey } from "../constants";


const { Content } = Layout;

export default function AppLayout({children}) {
  return (
    <div
      className="min-h-[100vh] relative"  
    >
      <div
          className="fixed right-0 bottom-0 left-0 bg-white z-[45] border-t-2 border-[#ECF0F5]"
        >
          <Sidebar />
      </div>

      <Layout>
        <Layout>
          <Content
            style={{
              overflow: "auto",
              marginBottom: "50px",
            }}
          >
            <Outlet />
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
