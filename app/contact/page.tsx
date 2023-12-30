import React from "react";
import Header from "@/components/partials/header";

const Contact: React.FC = () => {
    return (
        <section>
            <div className={'w-full'}>
                <Header/>
            </div>
            <div className={'px-10 mx-auto max-w-7xl mt-10'}>
                Contact Page
            </div>
        </section>
    )
}

export default Contact