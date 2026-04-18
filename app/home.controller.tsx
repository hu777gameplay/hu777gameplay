import HeroSection from "./view/heroSection.view";
import FeaturesAndGuides from "./view/featuresAndGuides.view";
import ReviewsAndComparison from "./view/reviewsAndComparison.view";
import FAQAndFooter from "./view/fAQAndFooter.view";
import AppDetailsTable from "./view/appDetails.view";

const HomeController = () => {
  return (
    <main className="bg-bg-primary text-text-primary font-sans min-h-screen selection:bg-primary/30">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        <HeroSection />

        <AppDetailsTable />

        <div className="space-y-12">
          <FeaturesAndGuides />
          <ReviewsAndComparison />
        </div>

        <FAQAndFooter />
      </div>
    </main>
  );
};

export default HomeController;
