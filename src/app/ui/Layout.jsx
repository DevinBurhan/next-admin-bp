import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="nk-app-root" data-sidebar-collapse="lg">
      <div className="nk-main">
        <Header />
        <div className="nk-wrap">
          <div className="nk-content">
            <div className="container-xl">
              <div className="nk-content-inner">
                <div className="nk-content-body">{children}</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
