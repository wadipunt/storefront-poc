"use server";
import React, { FC } from "react";
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm';
import styles from './GameDescription.module.scss';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import WinsTable, { WinRecord } from "./WinsTable";
import {LinkTag, LinkTagProps, Tag} from "./ui/tag";




export interface GameInfoProps {
    name:string,
    provider:{
        name:string,
        link:string
    },
    tileImagePath:string,
    description: string
    edge:number,
    tags:Array<LinkTagProps>,
    bigWins: Array<WinRecord>,
    luckyWins: Array<WinRecord>,
}


const GameInfo: FC<GameInfoProps> = async ({ name, provider, description, edge, tags, bigWins, luckyWins, tileImagePath,  }) => {

    return (<div className="bg-secondary-light mt-10 p-10">
        <div className="flex mb-5 ml-5">
            <p className="pr-3 font-semibold">{name}</p> <a className="text-gray-200" href={provider.link}> {provider.name}</a>
        </div>
        <Tabs defaultValue="description"  >
            <TabsList className="m-5">
                <TabsTrigger value="big-wins">Big Wins</TabsTrigger>
                <TabsTrigger value="lucky-wins">Lucky Wins</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
            </TabsList>
            <TabsContent value="big-wins"><WinsTable winRecords={bigWins} /></TabsContent>
            <TabsContent value="lucky-wins"><WinsTable winRecords={luckyWins} /></TabsContent>
            <TabsContent value="challenges"><div className="w-full text-center">No current Challenges</div></TabsContent>
            <TabsContent value="description" >
                <div>
                    <img className="float-left w-[10rem] mx-5 mb-5" src={tileImagePath} alt={name} width="280" draggable="false" />
                    <div className="mb-2">
                        <Tag label={`edge: ${edge}%`}/>
                    </div>
                    <div>
                        {tags.map(tag=><LinkTag key={`${tag.link}-${tag.label}`} link={tag.link} label={tag.label} />)}
                    </div>

                    <div className={`${styles.mdBlock} mt-1`}>
                        <MDXRemote source={description} options={{
                            mdxOptions: {
                                format: "mdx",
                                remarkPlugins: [remarkGfm]
                            }
                        }} />
                    </div>
                </div>
            </TabsContent>
        </Tabs>

    </div>);
}

export default GameInfo;