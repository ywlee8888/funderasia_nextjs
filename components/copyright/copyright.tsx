import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Component() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
      <div className="flex gap-4">
        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
          <FontAwesomeIcon icon={faXTwitter} size="lg" color="black" /> {/* Black and white Twitter icon */}
        </Link>
        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
          <FontAwesomeIcon icon={faFacebookF} size="lg" color="black" /> {/* Black and white Facebook icon */}
        </Link>
        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
          <FontAwesomeIcon icon={faInstagram} size="lg" color="black" /> {/* Black and white Instagram icon */}
        </Link>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Specialist Asia. All rights reserved.</p>
    </footer>
  );
}
