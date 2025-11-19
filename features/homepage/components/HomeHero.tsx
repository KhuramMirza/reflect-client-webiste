import HERO_IMAGE from "@/public/hero-images/hero-home.png";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="grid grid-cols-2 items-center justify-items-center gap-4 px-20 py-10">
      <div className="space-y-6">
        <h1 className="text-primary-600 text-3xl font-bold">
          Your AI Guide to Smarter Learning, Real-Time Coding, and Measurable
          Growth
        </h1>
        <p>
          Reflect builds your skills with personalized roadmaps, live coding
          challenges, and smart quizzes all tracked and optimized by AI. Learn
          faster, code better, and see your progress in real time.
        </p>
        <Link
          href="/signup"
          className="bg-primary-500 rounded-2xl px-4 py-2 text-gray-100"
        >
          Get Started
        </Link>
      </div>
      <div className="relative h-100 w-100">
        <Image src={HERO_IMAGE} alt={"Hero Image"} fill={true} />
      </div>
    </div>
  );
}
