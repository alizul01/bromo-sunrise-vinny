import HeroSection from "@/components/pages/index/hero-section";
import FeaturesSection from "@/components/pages/index/features-section";
import WhoWeAreSection from "@/components/pages/index/who-we-are-section";
import Gallery from "@/components/pages/index/gallery";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <WhoWeAreSection />
            <Gallery />
        </main>
    )
}
