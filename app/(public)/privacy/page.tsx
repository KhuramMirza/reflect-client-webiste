import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                We believe you should always know what data we collect from you
                and how we use it, and that you should have meaningful control
                over both.
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
                <ScrollLink href="#introduction" active>
                  Introduction
                </ScrollLink>
                <ScrollLink href="#information-we-collect">
                  Information We Collect
                </ScrollLink>
                <ScrollLink href="#how-we-use">How We Use Data</ScrollLink>
                <ScrollLink href="#data-sharing">Data Sharing</ScrollLink>
                <ScrollLink href="#security">Security Measures</ScrollLink>
                <ScrollLink href="#user-rights">Your Rights</ScrollLink>
                <ScrollLink href="#contact">Contact Us</ScrollLink>
              </nav>
            </div>
          </aside>

          {/* MAIN LEGAL CONTENT */}
          <div className="max-w-3xl flex-1">
            <div className="space-y-16 leading-relaxed text-gray-600">
              <Section id="introduction" title="1. Introduction">
                <p>
                  At Reflect ("we," "our," or "us"), we are committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our application and use our learning services.
                </p>
                <p>
                  By accessing or using Reflect, you agree to the terms of this
                  Privacy Policy. If you do not agree with the terms of this
                  Privacy Policy, please do not access the application.
                </p>
              </Section>

              <Section
                id="information-we-collect"
                title="2. Information We Collect"
              >
                <p className="mb-4">
                  We collect information that you provide directly to us when
                  you register for an account, create or modify your profile,
                  set preferences, or make a purchase.
                </p>

                <h4 className="mt-6 mb-2 font-bold text-gray-900">
                  Personal Data
                </h4>
                <ul className="mb-4 list-disc space-y-2 pl-5">
                  <li>
                    Personally identifiable information, such as your name,
                    email address, and telephone number.
                  </li>
                  <li>Login credentials, including passwords and username.</li>
                  <li>
                    Payment information (processed securely by our third-party
                    payment processors).
                  </li>
                </ul>

                <h4 className="mt-6 mb-2 font-bold text-gray-900">
                  Usage Data (AI Analysis)
                </h4>
                <p>
                  To provide our core service—personalized learning—our systems
                  analyze your coding patterns, quiz answers, and time spent on
                  tasks. This data is used to generate your personalized
                  knowledge graph.
                </p>
              </Section>

              <Section id="how-we-use" title="3. How We Use Your Information">
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Provide, maintain, and improve our learning algorithms.
                  </li>
                  <li>
                    Process your transactions and manage your subscription.
                  </li>
                  <li>
                    Send you technical notices, updates, security alerts, and
                    support messages.
                  </li>
                  <li>
                    Respond to your comments, questions, and customer service
                    requests.
                  </li>
                  <li>
                    Monitor and analyze trends, usage, and activities in
                    connection with our services.
                  </li>
                </ul>
              </Section>

              <Section id="data-sharing" title="4. Sharing of Information">
                <p>
                  We are not in the business of selling your data. We consider
                  this information to be a vital part of our relationship with
                  you. There are, however, certain circumstances in which we may
                  share your Data with certain third parties, as set forth
                  below:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h5 className="text-sm font-bold text-gray-900">
                      Service Providers
                    </h5>
                    <p className="mt-1 text-sm">
                      We utilize third-party companies to facilitate our
                      Service, such as AWS for hosting and Stripe for payments.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h5 className="text-sm font-bold text-gray-900">
                      Legal Compliance
                    </h5>
                    <p className="mt-1 text-sm">
                      We may disclose your information if required to do so by
                      law or in response to valid requests by public
                      authorities.
                    </p>
                  </div>
                </div>
              </Section>

              <Section id="security" title="5. Security">
                <p>
                  We use administrative, technical, and physical security
                  measures to help protect your personal information. While we
                  have taken reasonable steps to secure the personal information
                  you provide to us, please be aware that despite our efforts,
                  no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any
                  interception or other type of misuse.
                </p>
              </Section>

              <Section id="user-rights" title="6. Your Data Rights">
                <p className="mb-4">
                  Depending on your location (such as the EEA, UK, or
                  California), you may have the following rights:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>The right to access</strong> – You have the right to
                    request copies of your personal data.
                  </li>
                  <li>
                    <strong>The right to rectification</strong> – You have the
                    right to request that we correct any information you believe
                    is inaccurate.
                  </li>
                  <li>
                    <strong>The right to erasure</strong> – You have the right
                    to request that we erase your personal data, under certain
                    conditions.
                  </li>
                </ul>
              </Section>

              <Section id="contact" title="7. Contact Us">
                <p>
                  If you have questions or comments about this Privacy Policy,
                  please contact us at:
                </p>
                <div className="bg-primary-50 border-primary-100 mt-4 rounded-2xl border p-6">
                  <p className="font-bold text-gray-900">Reflect Inc.</p>
                  <p>123 Innovation Drive, Tech City, TC 90210</p>
                  <p className="mt-2">
                    <span className="font-semibold">Email: </span>
                    <a
                      href="mailto:privacy@reflect.com"
                      className="text-primary-600 hover:underline"
                    >
                      privacy@reflect.com
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

// --- SUB-COMPONENTS ---

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
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
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
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
