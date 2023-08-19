import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface DarkDropdownProps {
  title: string;
  items: string[];
  showDropdown: boolean;
  toggleDropdown: any;
}

const ProfileDropdown: React.FC<DarkDropdownProps> = ({
  title,
  items,
  showDropdown,
  toggleDropdown
}) => {
  return (
    <Dropdown show={showDropdown} className="ml-auto">
      {/* <Button variant="dark" id="dark-dropdown" onClick={toggleDropdown}>
        {title}
      </Button> */}

      <Dropdown.Menu variant="dark">
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Your progress</Dropdown.Item>
        <Dropdown.Item>Achievment</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
