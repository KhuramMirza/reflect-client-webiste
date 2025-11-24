import DashboardHero from "@/features/dashboard/components/DashboardHero";
import QuizzesSection from "@/features/dashboard/components/QuizzesSection";
import GeneratedQuizzesSection from "@/features/dashboard/components/GeneratedQuizzesSection";
import RoadmapsSection from "@/features/roadmap/components/RoadmapsSection";
import GeneratedRoadmapsSection from "@/features/roadmap/components/GeneratedRoadmapsSection";

export default async function Page() {
  return (
    <div className="mt-10">
      <DashboardHero />

      <QuizzesSection>
        <GeneratedQuizzesSection />
      </QuizzesSection>

      <RoadmapsSection>
        <GeneratedRoadmapsSection />
      </RoadmapsSection>
    </div>
  );
}
