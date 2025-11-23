import HERO_IMAGE from "@/public/hero-images/hero-home.png";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="from-primary-50 relative overflow-hidden bg-gradient-to-b to-white">
      {/* Content Container */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your AI Guide to{" "}
              <span className="text-primary-600">Smarter Learning</span> and
              Measurable Growth
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Reflect builds your skills with personalized roadmaps, live coding
              challenges, and smart quizzes—all tracked and optimized by AI.
              Learn faster, code better, and see your progress in real time.
            </p>

            <div className="flex justify-center pt-2 md:justify-start">
              <Link
                href="/signup"
                className="bg-primary-500 hover:bg-primary-600 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get Started Now
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative mx-auto w-full max-w-lg md:max-w-none">
            {/* Decorative Background Blob */}
            <div className="bg-primary-200/50 absolute -inset-4 -z-10 rounded-full blur-2xl" />

            <div className="border-primary-100 relative aspect-square w-full overflow-hidden rounded-3xl border bg-white shadow-xl">
              <Image
                src={HERO_IMAGE}
                alt="Dashboard Preview"
                fill={true}
                className="object-cover object-center"
                priority // Loads this image immediately as LCP
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
