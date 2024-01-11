import React from "react";
import {MdEmail, MdPhone} from "react-icons/md";

const TopBar: React.FC = () => {
    return (
        <section className={'bg-cyan-500'}>
            <div className={'container py-2 text-white text-xs font-light flex items-end justify-end gap-6'}>
                <span>
                    <MdPhone className={'inline-block mr-1'}/> +6281234567890
                </span>
                <span>
                    <MdEmail className={'inline-block mr-1'}/> bromosmarttour@gmail.com
                </span>
            </div>
        </section>
    )
}

export default TopBar