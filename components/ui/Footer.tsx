import Image from "next/image";
import Link from "next/link";

import REFLECT_LOGO from "@/public/logos/reflect_logo.svg";
import facebook_logo from "@/public/social/facebook.png";
import twitter_logo from "@/public/social/twitter.png";
import linkedin_logo from "@/public/social/linkedin.png";
import youtube_logo from "@/public/social/youtube.png";
import instagram_logo from "@/public/social/instagram.png";

export default function Footer() {
  return (
    <div className="bg-primary-200 mt-20 flex flex-col gap-2 p-10">
      <Link href="/">
        <Image src={REFLECT_LOGO} alt="Reflect Logo" className="h-20 w-20" />
      </Link>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Contact and Support</h3>
          <p>0300-9000000</p>
          <Link href="/contact">Help</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Join Us</h3>
          <div className="flex gap-2">
            <Link href="/">
              <Image src={facebook_logo} alt="Facebook" className="h-10 w-10" />
            </Link>
            <Link href="/">
              <Image src={twitter_logo} alt="Twitter" className="h-10 w-10" />
            </Link>
            <Link href="/">
              <Image
                src={instagram_logo}
                alt="Instagram"
                className="h-10 w-10"
              />
            </Link>
            <Link href="/">
              <Image src={linkedin_logo} alt="LinkedIn" className="h-10 w-10" />
            </Link>
            <Link href="/">
              <Image src={youtube_logo} alt="youtube" className="h-10 w-10" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-lg font-bold">
        Reflect&copy;2025. All rights reserved.
      </p>
    </div>
  );
}
