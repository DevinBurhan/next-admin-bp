"use client";
import Link from "next/link";
import React, { useState } from "react";
import navData from "./navData.json";
import Icon from "../Icon";
import { usePathname } from "next/navigation";
import DropDown from "./DropDown";
import UpgradeCard from "../CustomCard/UpgradeCard";
import Logo from "../../../../public/images/logo-dark.png";
import LogoIcon from "../../../../public/images/logo-icon.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [toggleAvata, setToggleAvata] = useState(false);
  const { menuData } = navData;
  return (
    <>
      <div
        className={mobileActive ? "sidebar-overlay active" : "sidebar-overlay"}
        onClick={() => setMobileActive(!mobileActive)}
      />
      <div className="nk-header nk-header-fixed">
        <div className="container-fluid">
          <div className="nk-header-wrap">
            <div className="nk-header-logo ms-n1">
              <div className="nk-sidebar-toggle me-1">
                <button
                  className="btn btn-sm btn-zoom btn-icon sidebar-toggle d-sm-none"
                  onClick={() => setMobileActive(!mobileActive)}
                >
                  <em className="icon ni ni-menu"> </em>
                </button>
                <button
                  className="btn btn-md btn-zoom btn-icon sidebar-toggle d-none d-sm-inline-flex"
                  onClick={() => setMobileActive(!mobileActive)}
                >
                  <em className="icon ni ni-menu"> </em>
                </button>
              </div>
              <Link href="/" className="logo-link">
                <div className="logo-wrap">
                  <Image
                    className="logo-img logo-dark"
                    src={Logo}
                    alt="Logo"
                    height={30}
                    width={144}
                  />
                </div>
              </Link>
            </div>
            <div className="nk-header-tools">
              <ul className="nk-quick-nav ms-2">
                <li className="dropdown d-inline-flex">
                  <span
                    className="d-inline-flex"
                    onClick={() => setToggleAvata(!toggleAvata)}
                  >
                    <div className="media media-md media-circle media-middle text-bg-primary">
                      <img src="images/avatar/a.png" />
                    </div>
                  </span>
                  {toggleAvata && (
                    <div
                      className="dropdown-menu dropdown-menu-md rounded-3 show end-0"
                      style={{ top: "100%" }}
                    >
                      <div className="dropdown-content py-3">
                        <UpgradeCard />
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`nk-sidebar nk-sidebar-fixed ${
          mobileActive ? "sidebar-active" : ""
        } ${compact ? "is-compact" : ""}`}
        id="sidebar"
      >
        <div className="nk-compact-toggle">
          <button
            className={`btn btn-xs btn-outline-light btn-icon compact-toggle text-light bg-white rounded-3 ${
              compact ? "active" : ""
            }`}
            onClick={() => setCompact(!compact)}
          >
            <Icon icon="chevron-left" className="icon off" />
            <Icon icon="chevron-right" className="icon on" />
          </button>
        </div>
        <div className="nk-sidebar-element nk-sidebar-head">
          <div className="nk-sidebar-brand">
            <Link href="/" className="logo-link">
              <div className="logo-wrap">
                <Image className="logo-img logo-dark" src={Logo} alt="Logo" />
                <Image
                  className="logo-img logo-icon"
                  src={LogoIcon}
                  alt="Logo Icon"
                  height={27}
                  width={40}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="nk-sidebar-element nk-sidebar-body">
          <div
            className="nk-sidebar-content h-100 simplebar-scrollable-y"
            data-simplebar="init"
          >
            <div className="simplebar-wrapper" style={{ margin: "0px" }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: "0px", bottom: "0px" }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "100%", overflow: "hidden scroll" }}
                  >
                    <div
                      className="simplebar-content"
                      style={{ padding: "0px" }}
                    >
                      <div className="nk-sidebar-menu">
                        <ul className="nk-menu">
                          {menuData.map((item, index) => (
                            <>
                              {item?.subMenu ? (
                                <DropDown
                                  subMenuTtitle={item.title}
                                  subMenuIcon={item.icon}
                                  subMenu={item?.subMenu}
                                  key={index}
                                />
                              ) : (
                                <li
                                  className={`${
                                    item.heading
                                      ? "nk-menu-heading"
                                      : `nk-menu-item ${
                                          pathname === item.href ? "active" : ""
                                        }`
                                  }`}
                                  key={index}
                                >
                                  {item.heading ? (
                                    <h6 className="overline-title">
                                      {item.title}
                                    </h6>
                                  ) : (
                                    <Link
                                      href={item.href}
                                      className="nk-menu-link"
                                    >
                                      <span className="nk-menu-icon">
                                        <Icon
                                          icon={item.icon}
                                          className="icon"
                                        />
                                      </span>
                                      <span className="nk-menu-text">
                                        {item.title}
                                      </span>
                                    </Link>
                                  )}
                                </li>
                              )}
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-sidebar-element nk-sidebar-footer">
          <div className="nk-sidebar-footer-extended pt-3">
            <UpgradeCard />
          </div>
        </div>
      </div>
    </>
  );
}
