import { fetchUserDetails } from "@/features/profile/api";
import ChangePasswordForm from "@/features/profile/components/ChangePasswordForm";
import ProfileInfoForm from "@/features/profile/components/ProfileInfoForm";

export default async function Page() {
  let user = null;

  try {
    const response = await fetchUserDetails();
    user = response?.data?.doc;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    // Optional: redirect('/login') if strict auth is needed
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* --- HERO SECTION ---
          This gives the page the blue header and title.
      */}
      <section className="bg-primary-50 relative overflow-hidden pt-12 pb-32 md:pt-20">
        <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-full max-w-6xl -translate-x-1/2 opacity-30">
          <div className="from-primary-200 absolute inset-0 rounded-full bg-gradient-to-r to-purple-200 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Account <span className="text-primary-600">Settings</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-600">
            Manage your public profile and account security.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 container mx-auto -mt-20 px-6">
        {/* We wrap ChangePasswordForm INSIDE ProfileInfoForm.
            ProfileInfoForm will render `{children}` in the right-hand column
            so both forms stack neatly under each other.
        */}
        <ProfileInfoForm user={user}>
          <ChangePasswordForm />
        </ProfileInfoForm>
      </div>
    </main>
  );
}
