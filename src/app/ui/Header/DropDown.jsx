'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Icon from '../Icon';
import { usePathname } from 'next/navigation';

export default function DropDown({ subMenuTtitle, subMenuIcon, subMenu }) {
  // Mobile Toggle
  const [mobileToggle, setMobileToggle] = useState(false);
  const pathname = usePathname();
  return (
    <li
      className={`nk-menu-item has-sub ${
        subMenu.some(item => item.href === pathname || mobileToggle)
          ? 'active'
          : ''
      }`}
    >
      <span
        className="nk-menu-link nk-menu-toggle"
        style={{ cursor: 'pointer' }}
        onClick={() => setMobileToggle(!mobileToggle)}
        // href={subMenu[0].href}
      >
        <span className="nk-menu-icon">
          <Icon icon={subMenuIcon} className="icon" />
        </span>
        <span className="nk-menu-text">{subMenuTtitle}</span>
      </span>
      <ul
        className={`nk-menu-sub ${mobileToggle ? 'd-block' : ''}`}
        style={{
          display: `${
            subMenu.some(item => item.href === pathname) ? 'block' : 'none'
          }`,
        }}
      >
        {subMenu.map((sumItem, index) => (
          <li
            className={`nk-menu-item ${
              pathname === sumItem.href ? 'active' : ''
            }`}
            key={index}
          >
            <Link href={sumItem.href} className="nk-menu-link">
              <span className="nk-menu-text">{sumItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
