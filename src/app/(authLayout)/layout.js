import Footer from '../ui/Footer';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <div className="nk-wrap has-shape flex-column overflow-hidden">
          <div className="nk-shape bg-shape-blur-a start-0 top-0"></div>
          <div className="nk-shape bg-shape-blur-b end-0 bottom-0"></div>
          <div className="text-center pt-5">
            <Link href="/" className="logo-link">
              <div className="logo-wrap">
                <img
                  className="logo-img logo-dark"
                  src="/images/logo-dark.png"
                  srcSet="images/logo-dark2x.png 2x"
                  alt=""
                />
                <img
                  className="logo-img logo-icon"
                  src="/images/logo-icon.png"
                  srcSet="images/logo-icon2x.png 2x"
                  alt=""
                />
              </div>
            </Link>
          </div>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
