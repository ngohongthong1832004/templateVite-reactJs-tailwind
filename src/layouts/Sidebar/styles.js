import { ColorPalette } from "../constants/colors";
import { Layout } from "antd";
import styled from "styled-components";
import { Menu} from "antd";
import useLocalStorage  from "../hooks/useLocalStorage";
import { LocalStorageKey } from "../constants";

const { Sider } = Layout;
// const [currentTheme] = useLocalStorage(LocalStorageKey.mode_theme, "dark");


// export const SidebarContainer2 = styled.Sider(props => {
// })


export const SiderContainer = styled(Sider)`
  // height: 100vh;
  .ant-layout-sider-children {
    background-color: ${(props) => (props.theme === 'dark' ? '#0d0d0d' : '#ffffff')} ;
    // border-right: 1px solid rgb(0 0 0 / 0.25);
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    .avatar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem;
      margin-bottom: 5rem;
      width: 80%;
      padding: 0 15px;
      margin: 2rem auto;
      p {
        font-size: 18px;
        font-weight: 400;
        margin-left: 1rem;
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
      }
      img {
        border-radius: 50%;
        height: 2.5rem;
      }
    }

    .ant-menu-light.ant-menu-root.ant-menu-vertical{
      border-inline-end: none;
    }
    .ant-menu-light.ant-menu-root.ant-menu-inline{
      border-inline-end: none;
    }

    ul.ant-menu.ant-menu-inline-collapsed {
      .ant-menu-item {
        display: flex !important;
        align-items: center;
        justify-content: center;
        .ant-menu-title-content {
          display: none !important;
        }
      }
    }
    ul.ant-menu.ant-menu-root {
      font-weight: 500;
      line-height: 1.5;
      width: 85%;
      background-color:  ${(props) => (props.theme === 'dark' ? '#0d0d0d' : '#ffffff')};
      margin: 0 auto;
      margin-bottom: 30px;

      li.ant-menu-item {
        height: unset !important;
        min-height: 3rem !important;
        margin: 12px 0;
        width: 100%;
        border-radius: 4px;
        margin-bottom: 5px;
        color: ${(props) => (props.theme === 'dark' ? '#ffff' : '#061114')};
        transition: all 0.25s linear;

        .ant-menu-title-content {
          display: block;
          height: unset !important;
          text-overflow: unset !important;
          white-space: nowrap !important;
          line-height: 1.5;
          margin-left: 20px !important;
          font-size: 14px;
          color: ${(props) => (props.theme === 'dark' ? '#ffff' : '#061114')};
        }

        svg {
          path {
            fill: ${(props) => (props.theme === 'light' && '#061114')};
          }
        }


        &:hover {
          box-shadow: 0px 0px 24px 4px #00000033;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          color : #ffff !important;
          background: ${(props) => (props.theme === 'dark' ? '#272a2c;' : '#EF4444')};
          transition: all 0.25s linear;
          .ant-menu-title-content {
            color: ${(props) => (props.theme === 'light' && '#ffff')};  
          }
          svg {
            path {
              fill: ${(props) => (props.theme === 'light' && '#ffff')};
            }
          }
        }

        &.ant-menu-item-selected {
          background: ${(props) => (props.theme === 'dark' ? '#272a2c' : '#EF4444')} ;
          border: 1px solid white;
          // color: ${(props) => (props.theme === 'dark' ? '#ffff' : '#061114')};
          border-radius: 8px;
          p {
            // color: ${(props) => (props.theme === 'dark' ? '#ffff' : '#061114')};
          }
          .ant-menu-title-content {
            color: ${(props) => (props.theme === 'light' && '#ffff')};  
          }
          svg {
            path {
              fill: ${(props) => (props.theme === 'light' && '#ffff')};
            }
          }
          
        }
      }


      li.ant-menu-submenu {
        &.ant-menu-submenu-selected {
          .ant-menu-submenu-title {
            .ant-menu-item-icon path {
              fill: ${ColorPalette.MAINLY_GREEN};
            }
          }
        }

        &.ant-menu-submenu-open {
          .ant-menu-submenu-title {
            .ant-menu-title-content,
            .ant-menu-submenu-arrow {
              color: ${ColorPalette.SMOKE};
            }

            .ant-menu-item-icon path {
              fill: ${ColorPalette.SMOKE};
            }
          }
        }

        .ant-menu-submenu-title {
          padding-left: 0.75rem !important;
          padding-right: 2.5rem;

          &:hover {
            .ant-menu-item-icon path {
              fill: ${ColorPalette.SMOKE};
            }
          }

          .ant-menu-title-content {
            margin-left: 0.5rem;
          }
        }

        ul.ant-menu.ant-menu-sub {
          li.ant-menu-item {
            padding-left: 1.5rem !important;

            &.ant-menu-item-selected {
              .ant-menu-item-icon path {
                fill: ${ColorPalette.MAINLY_GREEN};
              }
            }

            .ant-menu-title-content {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
`;

export const WebsiteLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  img {
    height: 2.5rem;
    margin-top: 10px;
  }
`;

export const MenuCustom = styled(Menu)`
  ul.ant-menu.ant-menu-root {
    display: flex;

    &:before {
      display: none !important;
    }

  }

  li.ant-menu-item {
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 125px;
    padding: 0;
    gap: 5px;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      position: absolute;
      right: 0;
      left: 0;
      inset-inline: 0px !important;
      top: 0;
    }

    &:hover {
      li.ant-menu-item {
        background: #F9423A;
        &:after {
          border-bottom: 3px solid #F9423A;
          margin-top: -2px;
        }
      }
      color : #ffff !important;
      transition: all 0.25s linear;
      .ant-menu-title-content {
        color: #ffff;  
      }
      svg {
        path {
          fill: #F9423A;
        }
      }

      .ant-menu-title-content {
        color: #F9423A !important;
      }
    }

    &.ant-menu-item-selected {
      &:after {
        border-bottom: 3px solid #F9423A;
        margin-top: -2px;
      }

      svg {
        path {
          fill: #F9423A;
        }
      }

      .ant-menu-title-content {
        color: #F9423A !important;
      }
    }

    svg {
      path {
        fill: #9EA2BD;
      }
      opacity: 1;
    }

    .ant-menu-title-content {
      color: #9EA2BD !important;
      font-weight: 700;
    }

  }
`;