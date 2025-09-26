import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content p-10">
            <div className="container mx-auto">
                <footer className="footer sm:footer-horizontal ">
                    <nav>
                        <h6 className="footer-title">CS — Ticket System</h6>
                        <p className='text-gray-100 '>This project is a React-based  Customer <br /> Support Zone designed to display customer <br /> tickets, track  progress, and mark them as <br />resolved. It follows a Figma design and  <br /> includes  additional features like status <br />management, responsiveness, and toast <br />notifications using React-Toastify.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Our Mission</a>
                        <a className="link link-hover">Contact Saled</a>

                    </nav>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Products & Services</a>
                        <a className="link link-hover">Customer Stories</a>
                        <a className="link link-hover">Download Apps</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Information</h6>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms & Conditions</a>
                        <a className="link link-hover">Join Us</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <a className="link link-hover flex items-center gap-3"> <FaSquareXTwitter /> @CS — Ticket System</a>
                        <a className="link link-hove flex items-center gap-3"> <FaLinkedin />@CS — Ticket System</a>
                        <a className="link link-hover flex items-center gap-3"> <FaFacebook />@CS — Ticket System</a>
                        <a className="link link-hover flex items-center gap-3"> <IoIosMail /> support@cst.com</a>
                    </nav>
                </footer>
                <div className="border-t border-gray-500 mt-3  "></div>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center  flex justify-center">
                    <aside className="grid-flow-col items-center">

                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>

                </footer>
            </div>
        </div>
    );
};

export default Footer;