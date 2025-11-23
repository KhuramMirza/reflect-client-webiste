// Replace this with your actual server action import
// import { contactUsAction } from "@/features/contact/actions";

// Placeholder action if you don't have one yet to prevent errors
const contactUsAction = async (formData: FormData) => {
  "use server";
  console.log("Form submitted");
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-50 pt-16 pb-24">
      {/* Background Decorative Blobs (Matches previous designs) */}
      <div className="bg-primary-200/40 absolute top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
      <div className="bg-primary-300/30 absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] translate-y-1/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Page Hero Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="bg-primary-100 text-primary-700 mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wider uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Let&#39;s start a conversation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Have questions about Reflect? Need support or want to explore
            partnership opportunities? We&#39;re here to help.
          </p>
        </div>

        {/* The Main Contact Card Container */}
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl lg:flex-row">
          {/* LEFT PANEL: Contact Information & Visuals */}
          <div className="from-primary-800 to-primary-600 relative flex w-full flex-col justify-between overflow-hidden bg-gradient-to-br p-10 text-white lg:w-2/5 lg:p-16">
            {/* Abstract Shapes overlay */}
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-12 -translate-y-12 rounded-full bg-white/10 blur-2xl"></div>
            <div className="bg-primary-500/30 absolute bottom-0 left-0 h-80 w-80 -translate-x-12 translate-y-20 rounded-full blur-3xl"></div>

            <div className="relative z-10 mb-12 lg:mb-0">
              <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
              <p className="text-primary-100 mb-12 text-lg">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <ul className="space-y-8">
                <ContactItem
                  icon={<PhoneIcon />}
                  title="Phone"
                  detail="+1 (555) 123-4567"
                  link="tel:+15551234567"
                />
                <ContactItem
                  icon={<EmailIcon />}
                  title="Email"
                  detail="support@reflect.com"
                  link="mailto:support@reflect.com"
                />
                <ContactItem
                  icon={<LocationIcon />}
                  title="Office"
                  detail="123 Innovation Drive, Tech City, TC 54321"
                />
              </ul>
            </div>

            {/* Social Links (Optional) */}
            <div className="relative z-10 mt-auto flex gap-4 pt-8">
              <SocialLink icon={<TwitterIcon />} href="#" />
              <SocialLink icon={<LinkedInIcon />} href="#" />
              <SocialLink icon={<GithubIcon />} href="#" />
            </div>
          </div>

          {/* RIGHT PANEL: The Form */}
          <div className="w-full bg-white p-10 lg:w-3/5 lg:p-16">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Send us a message
            </h2>

            <form action={contactUsAction} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="pl-1 text-sm font-semibold text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="pl-1 text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="pl-1 text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  required
                  className="form-input"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="pl-1 text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  required
                  className="form-input resize-none py-3"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 w-full rounded-xl px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

/* --- Sub-Components & Styles --- */

// Reusable Input Style Class
const formInputClass =
  "h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none placeholder:text-gray-400";

// Add this class to your global CSS or tailwind config layers,
// OR replace `className="form-input"` in the inputs above with the long string above.
// For this example, I'll inline it in the component rendered output for simplicity.

function ContactItem({
  icon,
  title,
  detail,
  link,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  detail: string;
  link?: string;
}>) {
  const content = (
    <div className="group flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white backdrop-blur-md transition-colors group-hover:bg-white/20">
        {icon}
      </div>
      <div>
        <h3 className="text-primary-200 mb-1 text-sm font-bold tracking-wider uppercase">
          {title}
        </h3>
        <p className="text-lg leading-tight font-medium">{detail}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="hover:text-primary-700 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-white"
    >
      {icon}
    </a>
  );
}

/* --- ICONS --- */
// Simple inline SVGs to avoid dependencies
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 4.5z"
      clipRule="evenodd"
    />
  </svg>
);
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);
const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.235 8.235 0 012 19.287 11.632 11.632 0 008.29 20.251z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GithubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);
