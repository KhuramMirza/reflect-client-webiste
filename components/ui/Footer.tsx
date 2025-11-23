import Image from "next/image";
import Link from "next/link";

// Assets
import REFLECT_LOGO from "@/public/logos/reflect_logo.svg";
import facebook_logo from "@/public/social/facebook.png";
import twitter_logo from "@/public/social/twitter.png";
import linkedin_logo from "@/public/social/linkedin.png";
import youtube_logo from "@/public/social/youtube.png";
import instagram_logo from "@/public/social/instagram.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-200 text-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="w-fit transition-opacity hover:opacity-80"
            >
              <Image
                src={REFLECT_LOGO}
                alt="Reflect Logo"
                className="h-20 w-20 object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-700">
              Reflect helps you organize your thoughts and track your progress.
              Join our community today.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/login">Login</FooterLink>
              <FooterLink href="/signup">Signup</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
              Contact & Support
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <p className="font-medium">Customer Support</p>
              <p className="cursor-pointer transition-colors hover:text-black">
                0300-9000000
              </p>
              <FooterLink href="/contact">Help Center</FooterLink>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              <SocialIcon href="/" src={facebook_logo} alt="Facebook" />
              <SocialIcon href="/" src={twitter_logo} alt="Twitter" />
              <SocialIcon href="/" src={instagram_logo} alt="Instagram" />
              <SocialIcon href="/" src={linkedin_logo} alt="LinkedIn" />
              <SocialIcon href="/" src={youtube_logo} alt="YouTube" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm font-medium text-gray-600">
            Reflect &copy; {currentYear}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link
              href="/privacy"
              className="transition-colors hover:text-black"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Component for Text Links
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1 text-sm text-gray-700 transition-colors duration-300 hover:text-black"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
}

// Helper Component for Social Icons
function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: any;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 p-1 shadow-sm transition-all hover:bg-white hover:shadow-md">
        <Image src={src} alt={alt} className="h-full w-full object-contain" />
      </div>
    </Link>
  );
}
