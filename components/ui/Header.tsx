import Image from "next/image";
import Link from "next/link";
import REFLECT_LOGO from "@/public/logos/reflect_logo.svg";

export default function Header() {
  return (
    <header className="bg-primary-200 flex items-center justify-around text-lg font-semibold">
      <Link href="/">
        <Image src={REFLECT_LOGO} alt="Reflect Logo" className="h-20 w-20" />
      </Link>

      <div className="flex items-center justify-center gap-8">
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="flex items-center justify-center gap-8">
        <Link href="/login">Login</Link>
        <Link href="/signup" className="bg-primary-500 rounded-2xl px-4 py-2">
          Join for free
        </Link>
      </div>
    </header>
  );
}
