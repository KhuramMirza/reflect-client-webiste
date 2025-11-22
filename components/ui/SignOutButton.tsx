import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { logoutAction } from "@/features/auth/actions";

export default function SignOutButton() {
  return (
    <form action={logoutAction} className="flex justify-end">
      <button className="bg-primary-500 flex items-center gap-4 rounded-2xl px-5 py-3 font-semibold transition-colors hover:cursor-pointer">
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-gray-100" />
      </button>
    </form>
  );
}
