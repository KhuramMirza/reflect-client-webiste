"use client";
import Link from "next/link";
import { loginAction } from "@/features/auth/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  async function handleLoginAction(formData: FormData) {
    const { success, message } = await loginAction(formData);
    if (success) {
      toast.success("Login successful");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      toast.error(message);
    }
  }
  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full bg-gray-50">
      {/* LEFT PANEL: Mission & Info (Redesigned) */}
      <div className="from-primary-600 to-primary-800 relative hidden w-1/2 flex-col justify-center overflow-hidden bg-gradient-to-br px-12 py-12 text-white lg:flex xl:px-20">
        {/* Decorative Background Shapes */}
        <div className="bg-primary-500 absolute -top-10 -left-10 h-64 w-64 rounded-full opacity-30 blur-3xl"></div>
        <div className="bg-primary-900 absolute right-0 bottom-0 h-80 w-80 rounded-full opacity-30 blur-3xl"></div>

        <div className="relative z-10">
          {/* Mission Section */}
          <div className="mb-10">
            <h2 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight lg:text-5xl">
              Master your craft with <br />
              <span className="text-primary-200">Intelligence.</span>
            </h2>
            <p className="text-primary-100/90 text-lg leading-relaxed">
              Our mission is to eliminate the guesswork from learning. Reflect
              analyzes your coding patterns in real-time to build a curriculum
              that evolves as fast as you do.
            </p>
          </div>

          {/* "Why Use Reflect" - Glassmorphism Card */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-lg backdrop-blur-md">
            <h3 className="mb-4 text-lg font-bold tracking-wider text-white uppercase">
              Why Reflect?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <strong className="block font-semibold text-white">
                    Adaptive Roadmaps
                  </strong>
                  <span className="text-primary-100 text-sm">
                    Curriculum that adjusts automatically based on your quiz
                    performance.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <strong className="block font-semibold text-white">
                    Real-Time Feedback
                  </strong>
                  <span className="text-primary-100 text-sm">
                    Instant analysis of your code logic, not just syntax errors.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <strong className="block font-semibold text-white">
                    Measurable Growth
                  </strong>
                  <span className="text-primary-100 text-sm">
                    Visual analytics to track your journey from novice to
                    master.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Bottom Text */}
          <p className="text-primary-200/60 mt-10 text-sm font-medium">
            Join thousands of developers building their future today.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: Login Form (Same as before) */}
      <div className="flex w-full flex-col justify-center bg-white p-8 px-8 md:px-16 lg:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
            <p className="mt-2 text-gray-600">
              Please enter your details to access your account.
            </p>
          </div>

          <form action={handleLoginAction} className="flex flex-col space-y-6">
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

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-primary-600 hover:text-primary-500 text-sm font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="focus:border-primary-500 focus:ring-primary-200 h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm transition-all outline-none placeholder:text-gray-400 focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 mt-2 w-full rounded-xl py-3.5 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              Sign in to Account
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors hover:underline"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Simple internal icon component to keep things self-contained
function CheckIcon() {
  return (
    <div className="bg-primary-400/30 text-primary-100 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}
