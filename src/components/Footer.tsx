import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <footer className="about-footer">
        <div className="icons">
          <FaInstagram />
          <FaLinkedinIn />
          <FaFacebookF />
          <AiOutlineMail />
        </div>
      </footer>
    </>
  );
};
