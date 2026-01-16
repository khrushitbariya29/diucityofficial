import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsGallery from "@/components/PillarsGallery";
import HistorySection from "@/components/HistorySection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <section id="places">
        <PillarsGallery />
      </section>
      <section id="history">
        <HistorySection />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Index;