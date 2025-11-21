import { signupAction } from "@/features/auth/actions";

export default function Page() {
  return (
    <div className="bg-primary-600 mx-auto my-30 flex w-80 flex-col justify-center rounded-2xl p-4 sm:w-120">
      <div className="space-y-2 text-center text-gray-50">
        <h1 className="text-xl font-bold sm:text-4xl">Signup</h1>
        <p className="text-sm font-semibold sm:text-xl">
          Sign up and join us for exciting experience
        </p>
      </div>
      <form
        action={signupAction}
        className="mt-4 flex flex-col space-y-6 text-gray-50"
      >
        <div className="flex flex-col gap-0.5">
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="h-10 w-full rounded-2xl bg-gray-50 p-4 text-lg text-gray-950"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="h-10 w-full rounded-2xl bg-gray-50 p-4 text-lg text-gray-950"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            id="password"
            type="text"
            placeholder="Set your password"
            name="password"
            required
            className="h-10 w-full rounded-2xl bg-gray-50 p-4 text-lg text-gray-950"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="passConfirm" className="text-lg font-semibold">
            Confirm Password
          </label>
          <input
            id="passConfirm"
            type="text"
            placeholder="Confirm your password"
            name="passwordConfirm"
            required
            className="h-10 w-full rounded-2xl bg-gray-50 p-4 text-lg text-gray-950"
          />
        </div>

        <button
          type="submit"
          className="mt-4 self-end rounded-xl bg-gray-950 px-10 py-2 text-lg font-semibold text-white hover:cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
