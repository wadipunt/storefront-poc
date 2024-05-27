import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { FC } from "react";

export interface WinRecord {
    rank: number,
    user: string | undefined,
    date: string,
    bet: number,
    mutiplier: number,
    payout: number
}

interface WinsTableProps {
    winRecords: Array<WinRecord>
}

const WinsTable: FC<WinsTableProps> = ({ winRecords }) => {
    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Multiplier</TableHead>
                <TableHead>Payout</TableHead>

            </TableRow>
        </TableHeader>
        <TableBody>
            {
                winRecords.map(record => (
                    <TableRow key={record.rank}>
                        <TableCell>{record.rank}</TableCell>
                        <TableCell><UserName name={record.user}/></TableCell>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.bet}</TableCell>
                        <TableCell>{record.mutiplier}x</TableCell>
                        <TableCell>{record.payout}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
}

interface UserNameProps{
    name:string|undefined
}

const UserName:FC<UserNameProps> = ({name})=>{
    if (name){
        return <p>{name}</p>
    }
    else {
        return <p>Hidden user</p>
    }
}



export default WinsTable;