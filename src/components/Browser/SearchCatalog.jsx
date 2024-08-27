import styled from "styled-components";
import { usePopup } from "./PopupContext";
import FilmeCard from './FilmeCard';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import LoadingIcons from 'react-loading-icons'

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Container = styled.div`
     .loading-container {
        margin: auto;
        margin-top: 150px;
        text-align: center;
    }
`

const Catalog = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    color: white;
    word-break: break-all;
    padding-bottom: 100px;
    @media (max-width: 1670px) {
        grid-template-columns:  1fr 1fr 1fr 1fr;
    }
    @media (max-width: 1290px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 1015px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`


const SearchCatalog = () => {

    const noPoster = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

    const [catalog, setCatalog] = useState([]);
    const { searchEnginer , openPopup} = usePopup();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const getCatalog = async (url, setFunction) => {
            setLoad(false);
            try {
                const config = {
                    headers: {
                        accept: 'application/json',
                        Authorization: `${apiKey}`
                    }
                };
                const response = await axios.get(`${url}`, config);
                console.log(response.data.results);
                if (response.data.results.length == 0) {
                    setFunction([
                        {
                            Poster: noPoster,
                            title:"Nada encontrado",
                            release_date:"N/A"
                        } 
                    ]);
                } else {
                    setFunction(response.data.results);
                }
            } catch (error) {
                console.log("Não foi possivel encontrar o filme ", error);
            }  finally {
                setInterval(() => setLoad(true), 1000);
            }
        }
        getCatalog(`https://api.themoviedb.org/3/search/multi?query=${searchEnginer}&include_adult=false&language=pt-BR&page=1`, setCatalog);
    }, [searchEnginer]);

    const handleClick = (id, type) => {
        console.log(id);
        openPopup(id, type);
    }

    return (
        <Container>
            {load ? 
            <Catalog>
                {catalog && catalog.map((card) => (<FilmeCard className="cards" onClick={() => handleClick(card.id, card.media_type)} key={uuidv4()} img_url={`https://image.tmdb.org/t/p/w500` + (card.backdrop_path ? card.backdrop_path : card.poster_path ? card.poster_path : noPoster)} name={card.title ? card.title : card.name}/>))}
            </Catalog> : 
            <div className="loading-container">
                <LoadingIcons.Oval width="100" height="100" />
            </div>
            }
        </Container>
    )
}

export default SearchCatalog;