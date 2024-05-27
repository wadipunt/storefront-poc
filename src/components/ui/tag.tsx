import { FC } from "react"
export interface TagProps {
    label: string
}

export interface  LinkTagProps extends TagProps {
    link:string,
}

export const LinkTag:FC<LinkTagProps> = ({link, label})=>{
    return <a className="bg-muted px-2 py-1 rounded-xl text-xs m-1 inline-block" href={link}> {label}</a>
}

export const Tag:FC<TagProps> = ({label}) => {
    return <span className="bg-muted px-2 py-1 rounded-xl text-xs m-1" >{label}</span>
}

