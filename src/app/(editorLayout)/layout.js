'use client';
import { useState } from 'react';
import Header from '../ui/Header';

export default function RootLayout({ children }) {
  const [exportToggle, setExportToggle] = useState(false);
  return (
    <div className="nk-app-root" data-sidebar-collapse="lg">
      <div className="nk-main">
        <Header />
        <div className="nk-wrap">
          <div className="nk-content nk-content-empty">
            <div className="nk-editor">
              <div className="nk-editor-header">
                <div className="nk-editor-title">
                  <h4 className="me-3 mb-0 line-clamp-1">
                    2023-02-03 Untitled
                  </h4>
                  <ul className="d-inline-flex align-item-center">
                    <li>
                      <button className="btn btn-sm btn-icon btn-zoom">
                        <em className="icon ni ni-pen" />
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-sm btn-icon btn-zoom">
                        <em className="icon ni ni-star" />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="nk-editor-tools d-none d-xl-flex">
                  <ul className="d-inline-flex gap gx-3 gx-lg-4 pe-4 pe-lg-5">
                    <li>
                      <span className="sub-text text-nowrap">
                        Words <span className="text-dark">25</span>
                      </span>
                    </li>
                    <li>
                      <span className="sub-text text-nowrap">
                        Characters <span className="text-dark">84</span>
                      </span>
                    </li>
                  </ul>
                  <ul className="d-inline-flex gap gx-3">
                    <li>
                      <div className="dropdown">
                        <button
                          className="btn btn-md btn-light rounded-pill"
                          type="button"
                          onClick={() => setExportToggle(!exportToggle)}
                        >
                          <span>Export</span>
                          <em className="icon ni ni-chevron-down" />
                        </button>
                        {exportToggle && (
                          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end show end-0">
                            <div className="dropdown-content">
                              <ul className="link-list link-list-hover-bg-primary link-list-md">
                                <li>
                                  <a href="#">
                                    <em className="icon ni ni-file-doc" />
                                    <span>Docs</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <em className="icon ni ni-file-text" />
                                    <span>Text</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                    <li>
                      <button
                        className="btn btn-md btn-primary rounded-pill"
                        type="button"
                      >
                        Save
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
