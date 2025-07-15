
interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

import React, { useEffect } from 'react'
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';

const Layout = ({title, children} : LayoutProps) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
  return (
    <>
        <Navbar />

        <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">{children}</main>

        <Footer />
    </>
  )
}

export default Layout