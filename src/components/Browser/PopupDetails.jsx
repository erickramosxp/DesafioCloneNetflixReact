import styled from "styled-components";
import { usePopup } from "./PopupContext";
import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import { Rating } from "@mui/material";
import {Typography} from "@mui/material";
import {Box} from "@mui/material";
import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    `
const Popup = styled.div`
    background-color: #181818;
    max-width: 700px;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
`

const CloseButton = styled.button`
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #db0b0b;
    border: none;
    /* font-size: 16px; */
    border-radius: 20px;
    padding: 5px;
    cursor: pointer;
`;

const ContentImg = styled.div`
    height: 100%;
    margin: auto;
    img {
        max-height: 400px;
    }
`

const Content = styled.div`
    display: flex;
    gap: 40px;
`
const ContentDescrition = styled.div`
    color: #d1caca;
    h2 {
        padding-top: 10px;
        margin-bottom: 10px;
        font-size: 30px;
    }
    p {
        font-size: 20px;

    }
    p span {
        text-decoration: underline;
    }
`

const PopupDetails = () => {
    const {popupContent, closePopup} = usePopup();
    const [value, setValue] = useState(5);
    const [data, setData] = useState({});

    useEffect(() => {

    const getData = async (url, setFunction) => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: `${apiKey}`
                }
            };
            const response = await axios.get(`${url}`, config);
            console.log(response.data);
            if (response.data.length == 0) {
                setFunction([
                    {
                        poster_path:"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
                        title:"Nada encontrado",
                        release_date:"N/A"
                    } 
                ]);
            } else {
                setFunction(response.data);
            }
        } catch (error) {
            console.log("Não foi possivel encontrar o filme ", error);
            setFunction(
                {
                    poster_path:"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
                    title:"Nada encontrado",
                    release_date:"N/A"
                } 
            );
        }
    }
    getData(`https://api.themoviedb.org/3/movie/${popupContent}?language=pt-BR`, setData);

    }, []);

    const calculeRate = (number) => {
        let voteRate = parseFloat(number) * 10 * 5;
        const result = voteRate / 100;
        return (result);
    }

    return (
        <Container>
            <Popup>
                <CloseButton onClick={closePopup}> 
                    <AiOutlineClose/>
                </CloseButton>
                <Content>
                    <ContentImg>
                        <img src={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`} alt="" />
                    </ContentImg>
                    <ContentDescrition>
                        <h2><strong>{data.title}</strong></h2>
                        <p><strong>Data de lançamento:</strong> <span>{data.release_date}</span></p>
                        <p><strong>Genero:</strong>{data.genres && data.genres.map((element) => (<><span> {element.name} </span><i>/</i></>))}</p>
                        <br />
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend"><strong>Avaliação: </strong></Typography>
                            <Rating name="read-only" value={calculeRate(data.vote_average)} readOnly />
                        </Box>
                        <p><strong>Descrição:</strong> </p>
                        <p>
                            {data.overview ? data.overview : 'N/A'}
                        </p>
                        <br />
                    </ContentDescrition>
                </Content>
            </Popup>
        </Container>
    )
}

export default PopupDetails;