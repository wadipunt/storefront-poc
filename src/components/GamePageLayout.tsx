import React, { FC } from 'react';
import styles from './GamePageLayout.module.css';


export interface GamePageLayoutProps {
    header: React.ReactNode;
    sideBar: React.ReactNode;
    hero: React.ReactNode;
    gameInfo: React.ReactNode;
    footer: React.ReactNode;
}

const GamePageLayout: FC<GamePageLayoutProps> = ({ header, footer, hero, gameInfo }) => {
    return (
        <div className="h-screen flex  bg-dark-blue">
                <div className="flex-1 h-full flex flex-col">
                    <div className=" w-full h-18 backdrop-brightness-50">
                        {header}
                    </div>
                    <div className={`h-full w-full flex justify-center overflow-y-scroll ${styles.scrollbarContainer}`}>
                        
                        <div className="mt-10 mr-5 ml-3 h-full w-full max-w-[1200px] ">
                                {hero}
                                {gameInfo}
                                <div className='w-full my-10 pb-10 flex justify-center'>
                                    {footer}

                                </div>
                        </div>

                    
                    </div>
                </div>
        </div>
    );
}

export default GamePageLayout;
