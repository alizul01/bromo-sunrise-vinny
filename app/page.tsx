import Image from 'next/image'
import HeroSection from "@/components/pages/index/hero-section";
import FeaturesSection from "@/components/pages/index/features-section";
import WhoWeAreSection from "@/components/pages/index/who-we-are-section";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <WhoWeAreSection />
        </main>
    )
}
