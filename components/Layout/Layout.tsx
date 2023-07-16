import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'
import { Footer } from '@components/Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout ({children}: LayoutProps) {
  return (
    <div>
      <Navbar />
      <h1 className='h1-container'>Titulo</h1>
      {children}
      <Footer />

      <style jsx>{`
        .h1-container {
          background: salmon
        }
      `}</style>
    </div>
  )
}

export { Layout }