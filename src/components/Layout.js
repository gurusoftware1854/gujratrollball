import React from 'react';
import Header from './Header';
import Footer from './Footer';


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
