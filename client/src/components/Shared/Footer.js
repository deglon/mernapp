import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-3 bg-light">
      <div className="container">
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Insurance Workflow Management
        </p>
      </div>
    </footer>
  );
};

export default Footer;