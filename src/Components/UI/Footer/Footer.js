import React from "react";
import FooterCSS from "./Footer.module.css";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  const styled = FooterCSS;
  return (
    <div id="footerContainer" className={styled.FooterContainer}>
      <ul className={styled.footer__company}>
        <h3>COMPANY</h3>
        <li>
          <Link to="/about" className={styled.link}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/faq" className={styled.link}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styled.link}>
            CONTACT US
          </Link>
        </li>
      </ul>
      <ul className={styled.footer__legal}>
        <h3>LEGAL</h3>
        <li>
          <Link to="/terms" className={styled.link}>
            TERMS & CONDITIONS
          </Link>
        </li>
        <li>
          <Link to="/privacypolicy" className={styled.link}>
            PRIVACY POLICY
          </Link>
        </li>
        <li>
          <Link to="/disclaimer" className={styled.link}>
            DISCLAIMER
          </Link>
        </li>
      </ul>
      <ul className={styled.footer__social}>
        <h3>SOCIAL MEDIA</h3>{" "}
        <li>
          <a
            href="https://www.facebook.com"
            className={styled.iconLink}
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookSquare className={styled.icon} />
          </a>
          <a
            href="https://www.instagram.com"
            className={styled.iconLink}
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagramSquare className={styled.icon} />
          </a>
          <a
            href="https://www.twitter.com"
            className={styled.iconLink}
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitterSquare className={styled.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/firatkill/"
            className={styled.iconLink}
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin className={styled.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
