import Image from "next/image";
import Link from "next/link";

// You can replace these with your actual team/office images
// If you don't have them, these placeholders work fine

// Placeholder for a "Mission" image (e.g., people collaborating)
import MISSION_IMAGE from "@/public/about/mission.png";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="bg-primary-50 relative overflow-hidden pt-20 pb-32 md:pt-32">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 h-96 w-full max-w-6xl -translate-x-1/2 opacity-30">
          <div className="from-primary-200 absolute inset-0 rounded-full bg-gradient-to-r to-purple-200 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <span className="bg-primary-100 text-primary-700 mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wider uppercase">
            Our Story
          </span>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
            We are changing how <br />
            the world <span className="text-primary-600">learns to code.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
            Reflect isn&#39;t just another LMS. It&#39;s an AI-powered companion
            designed to understand your unique learning curve and adapt in
            real-time.
          </p>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="relative z-10 -mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-gray-900 p-8 text-white shadow-2xl md:grid-cols-4 md:p-12">
            <StatItem number="10k+" label="Active Learners" />
            <StatItem number="500+" label="Coding Challenges" />
            <StatItem number="98%" label="Completion Rate" />
            <StatItem number="24/7" label="AI Support" />
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="py-24">
        <div className="container mx-auto flex flex-col items-center gap-16 px-6 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
              {/* Replace with an actual image of your team or office */}
              <div className="from-primary-100 absolute inset-0 flex items-center justify-center bg-gradient-to-br to-gray-200 text-gray-400">
                (Mission Image Placeholder)
                <Image
                  src={MISSION_IMAGE}
                  alt="Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Education shouldn&#39;t be <br />
              <span className="text-primary-600">one-size-fits-all.</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Traditional education forces everyone to learn at the same pace.
                If you fall behind, you&#39;re lost. If you&#39;re ahead,
                you&#39;re bored.
              </p>
              <p>
                We built Reflect to solve this. Our algorithms analyze your
                code, identify your weak spots, and generate custom curriculums
                instantly. We believe technology should adapt to humans, not the
                other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES (Replaces "Goals" and "Achievements") */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              What drives us to build the best platform for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ValueCard
              icon={<SparklesIcon />}
              title="Innovation First"
              desc="We don't just follow trends; we set them. Our AI models are custom-built to understand code logic, not just syntax."
            />
            <ValueCard
              icon={<UserGroupIcon />}
              title="Community Driven"
              desc="Learning is better together. We foster a supportive environment where students help students grow."
            />
            <ValueCard
              icon={<ShieldCheckIcon />}
              title="Trust & Transparency"
              desc="Your data helps you learn, not us sell ads. We are committed to privacy and ethical AI use."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: TEAM (Optional - adds trust) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Meet the Builders
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Use actual images here */}
            <TeamMember name="Khuram Mirza" role="Founder & CEO" />
            <TeamMember name="Asadullah Kamboh" role="Head of Engineering" />
            <TeamMember name="Sibgha Babar" role="Lead Designer" />
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="bg-primary-800 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to transform your learning?
          </h2>
          <p className="text-primary-100 mx-auto mb-8 max-w-2xl">
            Join thousands of developers who are learning faster and smarter
            with Reflect.
          </p>
          <Link
            href="/signup"
            className="text-primary-900 inline-block rounded-full bg-white px-8 py-4 text-lg font-bold transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-primary-400 text-3xl font-bold md:text-4xl">
        {number}
      </p>
      <p className="mt-1 text-sm font-medium text-gray-300 md:text-base">
        {label}
      </p>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}>) {
  return (
    <div className="group hover:border-primary-100 rounded-2xl border border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="bg-primary-100 text-primary-600 group-hover:bg-primary-600 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

function TeamMember({ name, role }: Readonly<{ name: string; role: string }>) {
  return (
    <div className="group text-center">
      <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full bg-gray-200">
        {/* <Image src={image} alt={name} width={160} height={160} className="h-full w-full object-cover transition-transform group-hover:scale-110" /> */}
        <div className="h-full w-full bg-gradient-to-b from-gray-300 to-gray-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-primary-600">{role}</p>
    </div>
  );
}

// --- ICONS (Inline SVGs to avoid dependency issues) ---

function SparklesIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function UserGroupIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}
