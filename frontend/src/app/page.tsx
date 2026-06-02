import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Product Preview */}
      <DashboardPreview />

      {/* Features */}
      <Features />
    </main>
  );
}