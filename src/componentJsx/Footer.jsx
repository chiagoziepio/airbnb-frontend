import React from "react";
import "../ComponentCSS/footer.css"
const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="innerwidth flexRow">
        <div className="copywright">
          <p>&copy;copyWright COZY HOMES</p>
          <span> {date.getFullYear()}</span>
        </div>
        <div className="gitLink">
          <a href="#">Code source</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
