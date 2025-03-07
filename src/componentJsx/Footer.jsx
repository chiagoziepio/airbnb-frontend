import React from "react";
import "../ComponentCSS/footer.css"
const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="innerwidth footerBx">
        <div className="copywright">
          <p>&copy;copyWright COZY HOMES</p>
          <span> {date.getFullYear()}</span>
        </div>
        <div className="gitLink">
          <a href="https://github.com/chiagoziepio/airbnb-frontend">Code source</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
