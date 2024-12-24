// src/app/layout.tsx
import './globals.css';
import './fonts.css';
import NavLink from '@/app/components/NavLink';
import Link from 'next/link';
import Footer from './components/Footer';
import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <nav className="h-16 bg-[#151616] flex items-center fixed top-0 w-full z-10">
            <ul className="flex h-full items-center space-x-4 w-full">
              <li>
                <Link href="/">
                  <div className="text-white mr-1 text-xl font-bold cursor-pointer flex items-center">
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="h-8 mr-2 bg-white rounded-full"
                    />
                    <span className="italic">FC</span>
                    <span className="italic">Career</span>
                    <span className="italic">.top</span>
                  </div>
                </Link>
              </li>
              <div className="flex items-center space-x-4 flex-grow">
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/change-logs">Changes</NavLink>
                </li>
                <li>
                  <NavLink href="/posts">Posts</NavLink>
                </li>
                <li>
                  <NavLink href="/contact-us">Contact</NavLink>
                </li>
                <li>
                  <NavLink href="/user-statistics">User Statistics</NavLink>
                </li>
              </div>
              <li className="mr-1 ml-auto">
                <a href={'https://app.fccareer.top'} target={'_blank'}>
                  <div className="go-to-app-button mr-4 h-16 flex items-center bounce-animation">
                    Go to App
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <main className="flex-grow p-4 mt-16">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
