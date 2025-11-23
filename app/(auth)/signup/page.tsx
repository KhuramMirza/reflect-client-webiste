import Link from "next/link";
import { signupAction } from "@/features/auth/actions";

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full bg-gray-50">
      {/* LEFT PANEL: Inspiration & Features */}
      <div className="from-primary-600 to-primary-800 relative hidden w-1/2 flex-col justify-center overflow-hidden bg-gradient-to-br px-12 py-12 text-white lg:flex xl:px-20">
        {/* Background Shapes */}
        <div className="bg-primary-500 absolute top-10 -right-10 h-64 w-64 rounded-full opacity-30 blur-3xl"></div>
        <div className="bg-primary-900 absolute bottom-10 left-10 h-80 w-80 rounded-full opacity-30 blur-3xl"></div>

        <div className="relative z-10">
          <div className="mb-10">
            <h2 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight lg:text-5xl">
              Start building your <br />
              <span className="text-primary-200">dream career.</span>
            </h2>
            <p className="text-primary-100/90 text-lg leading-relaxed">
              Join a community of developers pushing the boundaries of learning.
              Create your free account today and get instant access to:
            </p>
          </div>

          {/* "What you get" - Glassmorphism Card */}
          <div className="grid gap-4">
            <FeatureCard
              title="Personalized Roadmaps"
              desc="AI-curated paths based on your goals."
            />
            <FeatureCard
              title="Global Leaderboards"
              desc="Compete with peers around the world."
            />
            <FeatureCard
              title="Smart Certifications"
              desc="Earn badges that actually prove your skills."
            />
          </div>

          <p className="text-primary-200/60 mt-10 text-sm font-medium">
            No credit card required. Free for individuals.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: Signup Form */}
      <div className="flex w-full flex-col justify-center bg-white p-8 px-8 md:px-16 lg:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Create an account
            </h1>
            <p className="mt-2 text-gray-600">
              Enter your details below to join Reflect.
            </p>
          </div>

          <form action={signupAction} className="flex flex-col space-y-5">
            {/* Name Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="focus:border-primary-500 focus:ring-primary-200 h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm transition-all outline-none placeholder:text-gray-400 focus:ring-2"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
                required
                className="focus:border-primary-500 focus:ring-primary-200 h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm transition-all outline-none placeholder:text-gray-400 focus:ring-2"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                required
                className="focus:border-primary-500 focus:ring-primary-200 h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm transition-all outline-none placeholder:text-gray-400 focus:ring-2"
              />
              <p className="text-xs text-gray-500">
                Must be at least 8 characters
              </p>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="passConfirm"
                className="text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="passConfirm"
                type="password"
                name="passwordConfirm"
                placeholder="Confirm your password"
                required
                className="focus:border-primary-500 focus:ring-primary-200 h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm transition-all outline-none placeholder:text-gray-400 focus:ring-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 mt-2 w-full rounded-xl py-3.5 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              Sign Up
            </button>
          </form>

          {/* Footer / Login Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper component for the feature list on the left
function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-transform hover:scale-[1.02]">
      <div className="bg-primary-400/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="text-primary-100 text-sm">{desc}</p>
      </div>
    </div>
  );
}
