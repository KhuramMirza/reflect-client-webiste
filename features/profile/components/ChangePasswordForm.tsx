import { updateUserPasswordAction } from "@/features/profile/actions";
import { SubmitButton } from "@/features/profile/components/SubmitButton";

export default function ChangePasswordForm() {
  return (
    <form
      action={updateUserPasswordAction}
      className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
    >
      <div className="mb-6 flex items-center justify-between border-b pb-4">
        <h3 className="text-lg font-bold text-gray-900">Change Password</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            required
            className="focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:bg-white focus:ring-4"
            placeholder="••••••••"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="password"
              required
              minLength={8}
              className="focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:bg-white focus:ring-4"
              placeholder="Min 8 chars"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordConfirm"
              required
              className="focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:bg-white focus:ring-4"
              placeholder="Re-enter new password"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <SubmitButton label="Update Password" />
      </div>
    </form>
  );
}
