import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Component() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-6 w-full shrink-0 px-4 md:px-6 bg-transparent">
      {/* Navigation Links */}
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="flex gap-4">
        <Link href="#" prefetch={false}>
          <FontAwesomeIcon icon={faXTwitter} size="lg" color="white" />
        </Link>
        <Link href="#" prefetch={false}>
          <FontAwesomeIcon icon={faFacebookF} size="lg" color="white" />
        </Link>
        <Link href="#" prefetch={false}>
          <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-xs text-white">&copy; {new Date().getFullYear()} Funder Asia. All rights reserved.</p>
    </footer>
  );
}
