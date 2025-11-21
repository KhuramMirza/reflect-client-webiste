import { loginAction } from "@/features/auth/actions";

export default function Page() {
  return (
    <div className="bg-primary-600 mx-auto my-30 flex w-80 flex-col justify-center rounded-2xl p-4 sm:w-120">
      <div className="space-y-2 text-center text-gray-50">
        <h1 className="text-xl font-bold sm:text-4xl">Login</h1>
        <p className="text-sm font-semibold sm:text-xl">
          Welcome back! Please log in to access your account.
        </p>
      </div>
      <form
        action={loginAction}
        className="mt-4 flex flex-col space-y-6 text-gray-50"
      >
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
            placeholder="Enter your password"
            name="password"
            required
            className="h-10 w-full rounded-2xl bg-gray-50 p-4 text-lg text-gray-950"
          />
        </div>

        <button
          type="submit"
          className="mt-4 self-end rounded-xl bg-gray-950 px-10 py-2 text-lg font-semibold text-white hover:cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
