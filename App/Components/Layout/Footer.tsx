import React from 'react';
import dayjs from 'dayjs';

function Footer() {
  const currentYear = dayjs().year();
  return (
    <>
      <div className="footer">creator@{currentYear}</div>
    </>
  );
}

export default Footer;
