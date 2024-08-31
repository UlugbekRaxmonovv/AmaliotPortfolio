import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from "../../assets/img/logo1.png";
import { FaFacebookF } from "react-icons/fa";
import './Footer.scss'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   <>
   <section id="footer">
     <div className="footer container">
        <div className="footer_all">
           <img src={logo} alt="" />
           <p>Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Lectus mattis nunc
aliquam tincidunt est non.</p>
<div className="icon">
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaLinkedin /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaFacebookF /></a>

</div>
        </div>
   <div className="hammasi_footer">
   <div className="footer_all">
    <ul>
        <h1>Pages</h1>
        <li>
            <Link>Home</Link>
        </li>
        <li>
            <Link>About</Link>
        </li>
        <li>
            <Link>Service</Link>
        </li> <li>
            <Link>Portfolio</Link>
        </li>
        <li>
            <Link>Blog</Link>
        </li>

    </ul>
   </div>

   <div className="footer_all">
    <ul>
        <h1>Services</h1>
        <li>
            <Link>Web Design</Link>
        </li>
        <li>
            <Link>App Design</Link>
        </li>
        <li>
            <Link>Dashboard</Link>
        </li> <li>
            <Link>Illustration</Link>
        </li>
        <li>
            <Link>Development</Link>
        </li>

    </ul>
   </div>


   <div className="footer_all">
    <ul>
        <h1>Contact</h1>
        <li>
            <Link>+00 88 999 888 22</Link>
        </li>
        <li>
            <Link>example@gmail.com</Link>
        </li>
        <li>
            <Link>www.portfolio.com</Link>
        </li> <li>
            <Link>44, Housing State, 3200</Link>
        </li>
     

    </ul>
   </div>
   </div>
     </div>
   </section>
   </>
  );
};
export default Footer;
