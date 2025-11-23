import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="bg-primary-100 text-primary-700 mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
                Legal
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                Please read these terms carefully before using Reflect. By using
                our platform, you agree to be bound by these conditions.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Last Updated
                </p>
                <p className="font-medium text-gray-900">November 24, 2025</p>
              </div>
              <button className="hidden items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 md:flex">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          {/* SIDEBAR NAVIGATION (Sticky) */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24">
              <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-900 uppercase">
                Table of Contents
              </h3>
              <nav className="flex flex-col space-y-3 border-l border-gray-200">
                <ScrollLink href="#agreement" active>
                  1. Agreement to Terms
                </ScrollLink>
                <ScrollLink href="#accounts">2. User Accounts</ScrollLink>
                <ScrollLink href="#subscriptions">
                  3. Payment & Subscriptions
                </ScrollLink>
                <ScrollLink href="#content">4. User Content</ScrollLink>
                <ScrollLink href="#prohibited">
                  5. Prohibited Activities
                </ScrollLink>
                <ScrollLink href="#termination">6. Termination</ScrollLink>
                <ScrollLink href="#liability">
                  7. Limitation of Liability
                </ScrollLink>
                <ScrollLink href="#contact">8. Contact Information</ScrollLink>
              </nav>
            </div>
          </aside>

          {/* MAIN LEGAL CONTENT */}
          <div className="max-w-3xl flex-1">
            <div className="space-y-16 leading-relaxed text-gray-600">
              <Section id="agreement" title="1. Agreement to Terms">
                <p>
                  These Terms of Service constitute a legally binding agreement
                  made between you, whether personally or on behalf of an entity
                  ("you") and Reflect Inc. ("we," "us," or "our"), concerning
                  your access to and use of the Reflect website and application.
                </p>
                <p>
                  We reserve the right, in our sole discretion, to make changes
                  or modifications to these Terms of Service at any time and for
                  any reason. We will alert you about any changes by updating
                  the "Last updated" date of these Terms of Service.
                </p>
              </Section>

              <Section id="accounts" title="2. User Accounts">
                <p className="mb-4">
                  To access certain features of the Platform, you must register
                  for an account. By creating an account, you agree to:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Provide accurate, current, and complete information during
                    the registration process.
                  </li>
                  <li>
                    Maintain the security of your password and accept all risks
                    of unauthorized access to your account.
                  </li>
                  <li>
                    Notify us immediately if you discover or suspect any
                    security breaches related to the Service.
                  </li>
                </ul>
                <div className="mt-4 rounded-lg border border-yellow-100 bg-yellow-50 p-4 text-sm text-yellow-800">
                  <strong>Important:</strong> You are responsible for all
                  activities that occur under your user account.
                </div>
              </Section>

              <Section id="subscriptions" title="3. Payment and Subscriptions">
                <p>
                  Some parts of the Service are billed on a subscription basis
                  ("Subscription(s)"). You will be billed in advance on a
                  recurring and periodic basis (such as monthly or annually).
                </p>
                <h4 className="mt-6 mb-2 font-bold text-gray-900">
                  Cancellation
                </h4>
                <p>
                  You may cancel your Subscription renewal either through your
                  online account management page or by contacting our customer
                  support team. You will not receive a refund for the fees you
                  already paid for your current subscription period.
                </p>
              </Section>

              <Section id="content" title="4. User Content">
                <p>
                  Our Platform allows you to post, link, store, share and
                  otherwise make available certain information, text, code, or
                  other material ("Content"). You are responsible for the
                  Content that you post to the Service, including its legality,
                  reliability, and appropriateness.
                </p>
                <p className="mt-4">
                  By posting Content to the Service (e.g., code solutions), you
                  grant us the right and license to use, modify, publicly
                  perform, publicly display, reproduce, and distribute such
                  Content on and through the Service for the purpose of
                  operating and improving our learning algorithms.
                </p>
              </Section>

              <Section id="prohibited" title="5. Prohibited Activities">
                <p className="mb-4">
                  You may not access or use the Site for any purpose other than
                  that for which we make the Site available. Prohibited
                  activities include:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Systematically retrieving data or other content from the
                    Site to create or compile, directly or indirectly, a
                    collection, compilation, database, or directory without
                    written permission from us.
                  </li>
                  <li>
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </li>
                  <li>
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </li>
                </ul>
              </Section>

              <Section id="termination" title="6. Termination">
                <p>
                  We may terminate or suspend your account immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms. Upon
                  termination, your right to use the Service will immediately
                  cease.
                </p>
              </Section>

              <Section id="liability" title="7. Limitation of Liability">
                <p className="mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Disclaimer
                </p>
                <p>
                  IN NO EVENT SHALL REFLECT, NOR ITS DIRECTORS, EMPLOYEES,
                  PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE
                  DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA,
                  USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR
                  ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
                </p>
              </Section>

              <Section id="contact" title="8. Contact Information">
                <p>
                  To resolve a complaint regarding the Site or to receive
                  further information regarding use of the Site, please contact
                  us at:
                </p>
                <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="font-bold text-gray-900">Reflect Inc.</p>
                  <p className="mt-2 text-sm text-gray-600">
                    123 Innovation Drive
                    <br />
                    Tech City, TC 90210
                    <br />
                    United States
                  </p>
                  <p className="mt-4">
                    <span className="font-semibold text-gray-900">
                      Support:{" "}
                    </span>
                    <a
                      href="mailto:support@reflect.com"
                      className="text-primary-600 hover:underline"
                    >
                      support@reflect.com
                    </a>
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- REUSABLE COMPONENTS (Same as Privacy Policy) ---

function Section({
  id,
  title,
  children,
}: Readonly<{
  id: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">{title}</h2>
      <div className="text-lg">{children}</div>
      <hr className="my-12 border-gray-100" />
    </section>
  );
}

function ScrollLink({
  href,
  children,
  active = false,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  active?: boolean;
}>) {
  return (
    <Link
      href={href}
      className={`hover:border-primary-400 hover:text-primary-600 block border-l-2 py-2 pl-4 text-sm font-medium transition-colors ${
        active
          ? "border-primary-600 text-primary-600"
          : "border-transparent text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
}
