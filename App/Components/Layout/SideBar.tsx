import React, { FC, useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { FaTachometerAlt, FaGem, FaList, FaRegLaughWink, FaHeart, FaTasks } from 'react-icons/fa';
import { BiHomeCircle, BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';

interface SidebarProps {
  collapsed: boolean;
  toggled: boolean;
  handleToggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ collapsed, toggled, handleToggleSidebar }) => {
  const [rtl, setRtl] = useState(false);
  const [collapsing, setCollapsing] = useState(false);

  return (
    <ProSidebar
      collapsed={collapsing}
      toggled={toggled}
      rtl={rtl}
      breakPoint="md"
      onToggle={handleToggleSidebar}>
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <span>
            <span
              className=" pointer"
              onClick={() => {
                setCollapsing(!collapsing);
              }}>
              <BiMenu size={25} />
            </span>
            {!collapsing ? (
              <img
                className="sidebar-logo"
                src="https://cdn.textstudio.com/output/sample/normal/3/0/9/5/profile-logo-860-15903.png"
                alt="logo"
              />
            ) : null}
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem icon={<BiHomeCircle size={20} />}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem icon={<LuLayoutDashboard size={20} />}>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaTasks size={20} />}>
            <Link to="/new">Tasks</Link>
          </MenuItem>
          <SubMenu title="Submenu with Suffix" icon={<FaRegLaughWink />}>
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title="Submenu with Prefix" icon={<FaHeart />}>
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title="Multi Level" icon={<FaList />}>
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <SubMenu title="Submenu 3">
              <MenuItem>Submenu 3.1</MenuItem>
              <MenuItem>Submenu 3.2</MenuItem>
              <SubMenu title="Submenu 3.3">
                <MenuItem>Submenu 3.3.1</MenuItem>
                <MenuItem>Submenu 3.3.2</MenuItem>
                <MenuItem>Submenu 3.3.3</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Sidebar;
