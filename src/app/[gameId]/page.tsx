import Image from "next/image";
import GamePageLayout from "@/components/GamePageLayout";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameInfo from "@/components/GameInfo";
import { notFound, } from 'next/navigation'


interface GamePageProps {
    params: { gameId: string }
}

interface GameData {
    name: string,
    provider: {
        name: string,
        link: string
    };
    descriptionMdx: string;
    tileImagePath: string,
    edge: number,
    tags: Array<LinkTagProps>,
    bigWins: Array<WinRecord>,
    luckyWins: Array<WinRecord>

}

export default async function GamePage({ params: { gameId } }: GamePageProps) {
    let gameData: GameData;
    try {
        gameData = await loadGameData(gameId);
    } catch (error) {
        if (error instanceof GameDataNotFoundError) {
            return notFound();
        } else {
            throw error;
        }
    }
    return (
        <GamePageLayout
            header={<Header />}
            sideBar={<Sidebar />}
            hero={<Hero />}
            gameInfo={
                <GameInfo name={gameData.name}
                    provider={gameData.provider}
                    description={gameData.descriptionMdx}
                    tileImagePath={gameData.tileImagePath}
                    edge={gameData.edge}
                    tags={gameData.tags}
                    bigWins={gameData.bigWins}
                    luckyWins={gameData.luckyWins}
                />
            }
            footer={<Footer />}
        />
    )
}

import basePath from "../basePath";
import { LinkTagProps } from "@/components/ui/tag";
import { WinRecord } from "@/components/WinsTable";
import Footer from "@/components/Footer";

const loadGameDataProd = async (gameId: string): Promise<GameData> => {
    let descriptionMdx;
    let gameData: Omit<GameData, "descriptionMdx">;
    try {
        gameData = await fetch(`${process.env.STORE_FRONT_URL}/${basePath}/content/${gameId}/gameData.json`,{cache: "no-store"}).then(r => r.json());
        descriptionMdx = await fetch(`${process.env.STORE_FRONT_URL}/${basePath}/content/${gameId}/description.md`,{cache: "no-store"}).then(r => r.text());
    } catch (error) {
        throw new GameDataNotFoundError(gameId);
    }

    return {
        ...gameData, descriptionMdx,
    };
}
import fs from 'fs/promises';
const loadGameDataLocal = async (gameId: string): Promise<GameData> => {
    let descriptionMdx;
    let gameData: Omit<GameData, "descriptionMdx">;
    try {
        gameData = await fs.readFile(`${process.cwd()}/public/content/${gameId}/gameData.json`, 'utf8').then(text => JSON.parse(text));
        descriptionMdx = await fs.readFile(`${process.cwd()}/public/content/${gameId}/description.md`, 'utf8');
    } catch (error) {
        throw new GameDataNotFoundError(gameId);
    }

    return {
        ...gameData, descriptionMdx,
    };
}

const loadGameData = process.env.NODE_ENV ==='production' ? loadGameDataProd : loadGameDataLocal;

class GameDataNotFoundError extends Error {
    constructor(gameId: string) {
        super(`GameData not found for gameId: ${gameId}`);
        this.name = 'GameDataNotFoundError';
    }
}
