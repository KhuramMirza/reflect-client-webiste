import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { logoutAction } from "@/features/auth/actions";

export default function SignOutButton() {
  return (
    <form action={logoutAction}>
      <button
        className="group flex items-center gap-2 rounded-xl border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-600 active:scale-95"
        title="Sign Out"
      >
        <span className="hidden sm:inline">Sign Out</span>
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
