import styled from "styled-components";
import type {Film} from "../interfaces/Film.ts";

const AllFilmsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const SingleFilmDiv = styled.div`
    width: 220px;
    margin: 12px;
    padding: 16px;
    border: 3px solid gray;
    border-radius: 8px;
    background-color: lightgray;
    text-align: center;
`;

export default function Films(props: { data: Film[] }) {
    return (
        <AllFilmsDiv>
            {
                props.data.map((film: Film) =>
                    <SingleFilmDiv key={film.id}>
                        <h1>{film.title}</h1>
                        <p>{film.director}</p>
                        <p>{film.release_date}</p>
                        <img src={film.image} alt={film.title} />
                    </SingleFilmDiv>
                )
            }
        </AllFilmsDiv>
    );
}
