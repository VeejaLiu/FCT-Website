// src/app/layout.tsx
import './globals.css';
import './fonts.css';
import NavLink from '@/app/components/NavLink';
import Link from 'next/link';
import Footer from './components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <nav className="h-16 bg-[#151616] flex items-center">
            <ul className="flex h-full items-center space-x-4 w-full">
              <li>
                <Link href="/">
                  <div className="text-white mr-1 text-xl font-bold cursor-pointer flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 mr-2 bg-white rounded-full" />
                    <span className='italic'>FC</span>
                    <span className='italic'>Career</span>
                    <span className='italic'>.top</span>
                  </div>
                </Link>
              </li>
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/change-logs">Changes</NavLink>
              </li>
              <li>
                <NavLink href="/contact-us">Contact</NavLink>
              </li>
              <li className="mr-1">
                <a href={'https://app.fccareer.top'} target={'_blank'}>
                  <div className="go-to-app-button mr-4 h-16 flex items-center">
                    Go to App
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <main className="flex-grow p-4">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
