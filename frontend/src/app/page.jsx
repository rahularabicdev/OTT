import {
  HeroSection,
  PopularSeriesSection,
  FeaturesSection,
  TrendingSection,
  TrendingTvSection,
} from "@/sections/marketing";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <PopularSeriesSection />
      <TrendingTvSection />
      <FeaturesSection />
    </>
  );
};

export default Home;
