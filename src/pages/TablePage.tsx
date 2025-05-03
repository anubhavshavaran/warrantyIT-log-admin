import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axiosInstance from "@/services/axiosInstance.ts";
import {useEffect, useState} from "react";

function TablePage() {
    const [logs, setLogs] = useState([]);
    console.log(logs)

    useEffect(() => {
        async function action() {
            const {data} = await axiosInstance.request({
                method: "GET",
                url: "/logs",
            });

            setLogs(data.data.logs);
        }

        action();
    }, []);

    return (
        <div className="w-full flex-1 p-4 h-20">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">LOG ID</TableHead>
                        <TableHead>USER ID</TableHead>
                        <TableHead className="">LOCATION</TableHead>
                        <TableHead>MESSAGE</TableHead>
                        <TableHead className="">STACK</TableHead>
                        <TableHead className="">CREATED AT</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {logs?.map((log, index) => (
                        <TableRow key={index}>
                            <TableCell>{log?.logId}</TableCell>
                            <TableCell>{log?.userId}</TableCell>
                            <TableCell>{log?.location}</TableCell>
                            <TableCell>{log?.message}</TableCell>
                            <TableCell>{log?.stack}</TableCell>
                            <TableCell>{log?.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TablePage;