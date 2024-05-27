'use client';
import basePath from "@/app/basePath";
import Image from "next/image";
import React, { FC, useState } from "react";

interface SidebarToggleProps {
    isOpen: boolean,
    setIsOpen: (isOpre: boolean) => void;
}
type SidebarHeadProps = SidebarToggleProps;

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={`transition-all duration-100 ease-linear ${isOpen ? 'w-60' : 'w-17'} h-full bg-navy-blue`}>
            <SidebarHead isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="border-t border-blue-grey"></div>
        </div>
    );
}



const SidebarHead: FC<SidebarHeadProps> = ({ isOpen, setIsOpen }) => {

    return (<div className=" px-4 flex justify-between py-4">

        <div className={`flex cursor-pointer flex-row items-center space-x-1 hover:opacity-60 ${!isOpen ? 'hidden' : ''}`}>
            <Image src={`/${basePath}/pocker-card.png`} alt="social casino pocker card" width={32} height={32} />
            <p className=" font-medium text-white whitespace-nowrap">Social Casino</p>
        </div>
        <div>
            <Handle isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </div>);
}



const Handle: FC<SidebarToggleProps> = ({ isOpen, setIsOpen }) => {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hidden md:block h-11 rounded-xl bg-secondary-light px-4 py-3 font-semibold hover:opacity-70 ${!isOpen ? 'rotate-180' : ''}`}>
            <ArrowIcon />
        </button>
    )
}

const ArrowIcon: FC = () => (
    <svg width='11' height='16' viewBox='0 0 11 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1.97996 15.0039C1.42876 15.0039 0.980957 14.5559 0.980957 
        14.0039L0.980954 2.00392C0.980953 1.45192 1.42875 1.00392 1.97995 1.00392C2.53105 1.00392 
        2.97886 1.45192 2.97886 2.00392L2.97886 14.0039C2.97886 14.5559 2.53106 15.0039 1.97996 
        15.0039ZM9.78436 14.9729C9.53396 14.9229 9.28166 14.7959 9.12876 14.5659L5.13296 8.56592C4.90946 8.23092 
        4.90946 7.77692 5.13296 7.44092L9.12875 1.44093C9.43445 0.981926 10.0751 0.85392 10.5336 1.15992C10.9922 
        1.46692 11.1203 2.10692 10.8146 2.56592L7.19325 8.00391L10.8146 13.4409C11.1203 13.9009 10.9922 14.5409 10.5336 
        14.8479C10.3043 15.0009 10.0348 15.0229 9.78436 14.9729Z' fill='#7EA0AD' />
    </svg>
    )