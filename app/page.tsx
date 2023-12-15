import HeroSection from "@/components/pages/index/hero-section";
import FeaturesSection from "@/components/pages/index/features-section";
import WhoWeAreSection from "@/components/pages/index/who-we-are-section";
import Gallery from "@/components/pages/index/gallery";
import Header from "@/components/partials/header";
import React from "react";

export default function Home() {
    return (
        <main>
            <div className={'z-30 absolute w-full'}>
                <Header/>
            </div>
            <HeroSection />
            <FeaturesSection />
            <WhoWeAreSection />
            <Gallery />
        </main>
    )
}
