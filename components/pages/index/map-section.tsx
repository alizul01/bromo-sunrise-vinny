import React from "react";

const mapSection = () => {
    return (
        <section className={'rounded-lg overflow-hidden mx-auto container'}>
            <div className={"flex flex-col items-center sm:items-start gap-px my-4"}>
                <h2 className={"text-xl xl:text-2xl font-bold text-gray-900 tracking-wide uppercase"}>
                    Check Our Location
                </h2>
            </div>
            <div className="container">
                <iframe className={'shadow-md rounded-2xl w-full h-[32rem]'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1924994806745!2d112.6314256!3d-7.9790452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62823285e69d5%3A0x2e4e876dfff9b8f3!2sVinny%20Bromo%20Sunrise%20Adventure%20Tourist%20Information!5e0!3m2!1sid!2sid!4v1715323211582!5m2!1sid!2sid"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default mapSection