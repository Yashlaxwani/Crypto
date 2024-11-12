import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined } from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  // Define the menu items in an array
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "cryptocurrencies",
      icon: <MoneyCollectOutlined />,
      label: <Link to="/cryptocurrencies">CryptoCurrencies</Link>,
    },
    {
      key: "news",
      icon: <BulbOutlined />,
      label: <Link to="/news">News</Link>,
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo" style={{ color: "white" }}>
          Cryptoverse
        </Typography.Title>
        <Button className="menu-control-container"></Button>
      </div>
      <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
        <MenuOutlined />
      </Button>
      {activeMenu && (
        <Menu theme="dark" items={menuItems} /> 
      )}
    </div>
  );
};

export default Navbar;
