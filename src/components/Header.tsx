import Image from "next/image";
import React, { FC } from "react";
import basePath from "@/app/basePath";
const Header: FC = () => {
    return (
        <div className="h-full w-full flex justify-center">
            <div className="mr-5 ml-3 h-full w-full max-w-[1200px] ">
                <div className="pl-8 flex items-center h-full">
                    <Image width={240} height={30} src={`/${basePath}/logo.png`} alt="Chanced" />
                </div>

            </div>

        </div>
    );
}

export default Header;