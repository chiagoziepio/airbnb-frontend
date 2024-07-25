import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../ComponentCSS/contact.css";
const Contact = () => {
  return (
    <div className="contacts">
      <div className=" contactBx innerwidth ">

        <div className="contactTxt">
          <div className="flexStart">
            <h3 className="sectionTitle">Contact Us</h3>
            <p>We are just a stone throw away</p>
          </div>
          <div className="contactOptBx">
            <div className="contactOpt">
              <a href="tel:0823456742">
                <div className="ip">
                  <span className="icon">
                    <FaPhoneVolume size={20} />
                  </span>
                  <p>Ready to receive your call</p>
                </div>
                <button>Call now</button>
              </a>
            </div>
            <div className="contactOpt">
              <a href="mailto:cozyhome@gmail.com">
                <div className="ip">
                  <span className="icon">
                    <MdAttachEmail size={20} />
                  </span>
                  <p>Ready to attend to your mail</p>
                </div>
                <button>send mail</button>
              </a>
            </div>
            <div className="contactOpt">
              <a href="#">
                <div className="ip">
                  <span className="icon">
                    <FaSquareXTwitter size={20} />
                  </span>
                  <p>follow us on twitter</p>
                </div>

                <button>Follow</button>
              </a>
            </div>
          </div>
        </div>
        <div className="imgBx">
          <img src="https://i.pinimg.com/236x/58/77/b0/5877b0fedb69a2bf53006ecca2c512bb.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
