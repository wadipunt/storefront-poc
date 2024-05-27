
import React, { FC } from "react";
import { TiUserAddOutline } from "react-icons/ti";




const Hero: FC = () => {
    return (
        <div className="w-full aspect-hero bg-secondary-light">
            <div className="flex justify-center items-center text-stone-200 w-full h-full">
                <a className="mx-1 py-1.5 px-5 rounded-md bg-emerald-500 text-black bg-register" href="/">
                    <div className="flex justify-center items-center">
                        <TiUserAddOutline className="mr-2" /> Register
                    </div>

                </a>
                <a className=" rounded-md mx-1 py-1.5 px-5 bg-login" href="/">Login</a>

            </div>
        </div>

    );
}

export default Hero;