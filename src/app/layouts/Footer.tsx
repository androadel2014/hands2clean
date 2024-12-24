import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "../../../public/images/logo.jpg";

export default function Footer() {
  return (
    <>
      <div className="px-20 py-20 bg-green-100">
        <div className="md:flex md:justify-between text-center-mobile">
          <ul>
            <h2 className="text-2xl mb-5">Our Services</h2>
            <li>
              <Link href="/">Housekeeping Services</Link>
            </li>
            <li>
              <Link href="/">Recurring Cleanings</Link>
            </li>
            <li>
              <Link href="/">Moving Cleanings</Link>
            </li>
            <li>
              <Link href="/">One-Time Cleanings</Link>
            </li>
          </ul>
          <ul>
            <h2 className="text-2xl mb-5">The Company</h2>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
            <li>
              <Link href="/">Our Blog</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
          </ul>
          <ul>
            <h2 className="text-2xl mb-5">Resources</h2>
            <li>
              <Link href="/">Book Cleaning</Link>
            </li>
            <li>
              <Link href="/">Giftcards</Link>
            </li>
            <li>
              <Link href="/">Referrals and Offers</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">COVID-19 Response</Link>
            </li>
          </ul>
          <ul>
            <h2 className="text-2xl mb-5">Locations</h2>
            <li>
              <Link href="/">Virginia</Link>
            </li>
            <li>
              <Link href="/">Washington, D.C.</Link>
            </li>
            <li>
              <Link href="/">Maryland</Link>
            </li>
          </ul>
          <ul>
            <h2 className="text-2xl mb-5">Social</h2>
            <div className="flex justify-between items-center text-lg gap-2 mt-10">
              <li>
                <Link href="/" className="hover:text-green-400">
                  <FontAwesomeIcon icon={faFacebookF} className="w-3" />
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-green-400">
                  <FontAwesomeIcon icon={faYoutube} className="w-5" />
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-green-400">
                  <FontAwesomeIcon icon={faInstagram} className="w-4" />
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-green-400">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="md:flex md:justify-between mt-20  ">
          <div className="md:flex md:justify-normal gap-5 items-center align-middle text-center-mobile">
            <p className="">
              510 Spring St, Suite 120, Herndon, VA 20170 1-888-MAIDBRIGHT
            </p>
            <p>© 2004-2024 Maid Bright. All right reserved</p>
            <Link href="" className="underline ">
              Privacy Policy
            </Link>
          </div>
          <Image src={logo} alt="logo" className="md:w-44 mt-10-mobile"></Image>
        </div>
      </div>
    </>
  );
}
