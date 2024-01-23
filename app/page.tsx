import FeaturesSection from "@/components/pages/index/features-section";
import WhoWeAreSection from "@/components/pages/index/who-we-are-section";
import GallerySection from "@/components/pages/index/gallery-section";
import React from "react";
import HeroSection from "@/components/pages/index/hero-section";
import MapSection from "@/components/pages/index/map-section";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <WhoWeAreSection />
            <GallerySection />
            <MapSection />
        </main>
    )
}
