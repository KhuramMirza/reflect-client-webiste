import HomeHero from "@/features/homepage/components/HomeHero";
import HomeExploreSection from "@/features/homepage/components/HomeExploreSection";

export default function Page() {
  return (
    <div className="px-20">
      <HomeHero />
      <HomeExploreSection />
    </div>
  );
}
