import ExploreCard from "@/components/ui/ExploreCard";

const exploreSectionData = [
  {
    key: 1,
    heading: "Personalized Learning",
    description:
      "Study Plans tailored to your specific needs. Get your own study plan now and start tracking.",
    link: "/dashboard",
    imageSrc: "/card-images/learning.jpg",
  },
  {
    key: 2,
    heading: "Adaptive Quizzes",
    description:
      "Quizzes that adjust to your progress automatically. Retake or Redesign—not a problem at all.",
    link: "/dashboard",
    imageSrc: "/card-images/quiz.jpg",
  },
  {
    key: 3,
    heading: "Progress Tracking",
    description:
      "Monitor your learning advancements. Keep track of everything with real-time analytics and flow.",
    link: "/dashboard",
    imageSrc: "/card-images/progress.jpg",
  },
];

export default function HomeExploreSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore your path to{" "}
            <span className="text-primary-600">coding mastery</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join us and explore your personalized coding journey with ease. We
            provide the tools you need to succeed.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exploreSectionData.map((section) => (
            <ExploreCard
              key={section.key}
              link={section.link}
              heading={section.heading}
              description={section.description}
              imageSrc={section.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
