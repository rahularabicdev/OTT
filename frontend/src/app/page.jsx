import {
  HeroSection,
  PopularSeriesSection,
  FeaturesSection,
  TrendingSection,
  TrendingTvSection,
  FAQSection,
} from "@/sections/marketing";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <PopularSeriesSection />
      <TrendingTvSection />
      <FeaturesSection />
      <FAQSection />
    </>
  );
};

export default Home;
