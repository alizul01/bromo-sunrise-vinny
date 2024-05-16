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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.7978902917974!2d112.6309363695545!3d-7.979142271381473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628232a546821%3A0x85be78109dabcd9d!2sJl.%20Majapahit%20No.40%2C%20Kauman%2C%20Kec.%20Klojen%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065119!5e0!3m2!1sid!2sid!4v1715837177282!5m2!1sid!2sid"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default mapSection