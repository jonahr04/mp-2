import Films from "./components/Films.tsx";
import {useEffect, useState} from "react";
import type {Film} from "./interfaces/Film.ts";

export default function App() {
    const [films, setFilms] = useState<Film[]>([]);
    const [note, setNote] = useState("Loading films...");

    // load the film list once the page is up
    useEffect(() => {
        async function getFilms(): Promise<void> {
            const response = await fetch("https://ghibliapi.vercel.app/films", { cache: "no-store" });
            const filmList: Film[] = await response.json();
            setFilms(filmList);
            setNote("");
        }
        getFilms()
            .then(() => console.log("films loaded"))
            .catch((e: Error) => {
                console.log("could not load films: " + e);
                setNote("Could not load films. " + e.message);
            });
    }, []);

    return (
        <div id="page">
            <h1 id="heading">Studio Ghibli Films</h1>
            {note !== "" && <p>{note}</p>}
            <Films data={films} />
        </div>
    );
}
