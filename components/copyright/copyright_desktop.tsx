import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Component() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-6 w-full shrink-0 px-4 md:px-6">
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          Contact
        </Link>
      </nav>
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
      <p className="text-xs text-white">&copy; {new Date().getFullYear()} Funder Asia. All rights reserved.</p>
    </footer>
  );
}
