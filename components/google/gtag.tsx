'use client'; // This ensures the component is treated as a Client Component

import { useEffect } from "react";
import Script from "next/script"; // Import the Script component from Next.js
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function GtagScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_TRACKING_ID && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, { page_path: pathname });
    }
  }, [pathname]);

  return (
    <>
      {GA_TRACKING_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
      )}
      {GA_TRACKING_ID && (
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      )}
    </>
  );
}
