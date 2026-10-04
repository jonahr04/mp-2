import Films from "./components/Films.tsx";
import {useEffect, useState} from "react";
import type {Film} from "./interfaces/Film.ts";

export default function App() {
    // useState Hook to store Data.
    const [data, setData] = useState<Film[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://ghibliapi.vercel.app/films");
            const results: Film[] = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return (
        <div id="page">
            <Films data={data} />
        </div>
    );
}
