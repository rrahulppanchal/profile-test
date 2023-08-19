import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { LuBellDot, LuBell } from 'react-icons/lu';
import ProfileDropdown from '../Dropdowns/ProfileDropdowns';
import { Badge } from 'react-bootstrap';
const dropdownItems = ['Item 1 dfnjewnfdjwelmmewmfm', 'Item 2', 'Item 3'];
function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="main-header">
        <h1>Header</h1>
        <div className="left-featured-icon">
          <span className="pointer position-relative d-inline-block">
            {false ? <LuBell size={25} /> : <LuBellDot color="red" size={20} />}
          </span>
          <span
            className="pointer  "
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}>
            <CgProfile size={25} />
            <ProfileDropdown
              title="Dropdown"
              items={dropdownItems}
              showDropdown={showDropdown}
              toggleDropdown={toggleDropdown}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
