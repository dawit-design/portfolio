import React from 'react';
import './Footer.css'
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div>
      <section id="footer">
        <div className="container text-center">
          <p>All the best! <i className="fas fa-smile"></i></p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}