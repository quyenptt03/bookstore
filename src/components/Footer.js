import React from "react";
import { Link } from "react-router-dom";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { FaDribbble } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-item publishers">
          <h5 className="footer-title">Publishers</h5>
          <ul className="footer-menu">
            <Link to="/">
              <li className="footer-menu-item">Bestsellers</li>
            </Link>
            <Link to="/">
              <li className="footer-menu-item">Interviews</li>
            </Link>
            <Link to="/">
              <li className="footer-menu-item">Author Story</li>
            </Link>
            <Link to="/">
              <li className="footer-menu-item">Book Fairs</li>
            </Link>
            <Link to="/">
              <li className="footer-menu-item">Help (FAQ)</li>
            </Link>
          </ul>
        </div>
        <div className="footer-item contact">
          <h5 className="footer-title">Contact</h5>
          <p className="footer-text">
            Stay in touch with everything ChapterOne, follow us on social media
            and learn about new promotions.
          </p>
          <div className="social-icons">
            <a href="https://twitter.com/">
              <GrTwitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com/">
              <GrInstagram className="social-icon" />
            </a>
            <a href="http://facebook.com">
              <GrFacebookOption className="social-icon" />
            </a>
            <a href="https://dribbble.com/">
              <FaDribbble className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-item news-update">
          <h5 className="footer-title">News & Update</h5>
          <p className="footer-text">
            We’d love it if you subscribed to our newsletter! You’ll love it
            too.
          </p>
          <div className="footer-email">
            <input type="text" placeholder="Email..." />
            <button type="submit">
              <IoIosSend className="send-icon" />
            </button>
          </div>
        </div>

        <div className="footer-item social-media">
          <h5 className="footer-title">Social media</h5>
        </div>
      </div>
    </footer>
  );
}
