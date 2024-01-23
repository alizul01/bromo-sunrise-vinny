import FeaturesSection from "@/components/pages/index/features-section";
import WhoWeAreSection from "@/components/pages/index/who-we-are-section";
import GallerySection from "@/components/pages/index/gallery-section";
import React from "react";
import Banner from "@/components/pages/index/banner";
import HeroSection from "@/components/pages/index/hero-section";
import Map from "@/components/pages/index/map";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <WhoWeAreSection />
            <GallerySection />
            <Map />
        </main>
    )
}
