import FeaturesSection from "@/components/pages/index/features-section";
import WhoWeAreSection from "@/components/pages/index/who-we-are-section";
import GallerySection from "@/components/pages/index/gallery-section";
import React from "react";
import Banner from "@/components/pages/index/banner";

export default function Home() {
    return (
        <main>
            <Banner />
            <FeaturesSection />
            <WhoWeAreSection />
            <GallerySection />
        </main>
    )
}
