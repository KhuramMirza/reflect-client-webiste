import ExploreCard from "@/components/ui/ExploreCard";

const exploreSectionData = [
  {
    key: 1,
    heading: "Personalized Learning",
    description:
      "Study Plans tailored to your needs. Get your own study plan now.",
    link: "/",
    imageSrc: "/card-images/learning.jpg",
  },
  {
    key: 2,
    heading: "Adaptive Quizzes",
    description:
      "Quizzes that adjust to your progress. Retake or Redesign, not a problem at all.",
    link: "/",
    imageSrc: "/card-images/quiz.jpg",
  },
  {
    key: 3,
    heading: "Progress Tracking",
    description:
      "Monitor your learning advancements. Keep track of everything with real time tracking and easy flow.",
    link: "/",
    imageSrc: "/card-images/progress.jpg",
  },
];

export default function HomeExploreSection() {
  return (
    <div>
      <h1 className="text-primary-600 mb-2 text-3xl font-bold">
        Explore your path to coding mastery with Reflect
      </h1>
      <p className="mb-10 text-lg">
        Let&#39;s join us, explore your personalized coding journey with ease.
      </p>
      <div className="mx-auto flex w-300 items-center justify-between">
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
  );
}
