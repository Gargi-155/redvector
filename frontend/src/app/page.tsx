import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import StatsSection from "@/components/landing/StatsSection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Features from "@/components/landing/Features";
import RadarPreview from "@/components/landing/RadarPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <StatsSection />

      <DashboardPreview />

      <RadarPreview />

      <Features />
    </main>
  );
}