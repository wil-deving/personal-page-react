"use client";
import React from "react";

interface FooterProps {
  phoneNumber: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber }) => {
  return (
    <footer>
      <div className="container-footer">
        <div className="foot-left">
          <span className="text-body">©2020 Williams Gutierrez</span>
        </div>
        <div className="foot-right">
          <address className="text-body">
            La Paz, Bolivia
            <br />
            Contacto: {phoneNumber}
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
