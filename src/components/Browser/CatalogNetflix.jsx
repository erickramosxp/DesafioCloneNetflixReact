import styled from "styled-components";
import FilmeCard from './FilmeCard';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Slider from "react-slick";
import { usePopup } from "./PopupContext";


const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Container = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 40px;
    color: white;
    overflow-x: hidden;
    .slick-slider {
        padding-bottom: 10px;
    }
    .slick-track {
        flex-direction: column;
        margin: auto;
    }
    .slick-next:before, .slick-prev:before {
    font-size: 30px;
    line-height: 1;
    opacity: 1;
    color: red;
    }
    .slick-next {
        z-index: 2;
        height: 100%;
        width: 30px;
        background-color: #181818;
        right: 0;
    } 
    .slick-prev {
        z-index: 2;
        height: 100%;
        width: 30px;
        background-color: #181818;
        left: 0;
    }
`

const CarroselContainer = styled.div`
    margin-bottom: 30px;
`

const CatalogNetflix = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                }
              },
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
              }
            }
          ]
      };

    const [catalog, setCatalog] = useState([]);
    const [series, setSeries] = useState([]);
    const [actionAdventure, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [dramaSerie, setDrama] = useState([]);
    const [topSeries, setTopSeries] = useState([]);
    const [romanceMovie, setMovieRomance] = useState([]);
    const [comedyMovies, setMovieComedy] = useState([]);
    const [treadins, setTreadins] = useState([]);

    useEffect(() => {

        const getCatalog = async (url, setFunction) => {
            try {
                const config = {
                    headers: {
                        accept: 'application/json',
                        Authorization: `${apiKey}`
                    }
                };
                const response = await axios.get(`${url}`, config);
                if (response.data.results.length == 0) {
                    setFunction([
                        {
                            Poster:"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
                            title:"Nada encontrado",
                            release_date:"N/A"
                        } 
                    ]);
                } else {
                    setFunction(response.data.results);
                }
            } catch (error) {
                console.log("Não foi possivel encontrar o filme ", error);
            }
        }
        getCatalog("https://api.themoviedb.org/3/trending/all/week?language=pt-BR", setCatalog);
        getCatalog("https://api.themoviedb.org/3/tv/popular?language=pt-BR", setSeries);
        getCatalog("https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=28%2C12", setAction);
        getCatalog("https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_genres=35&page=2", setComedy);
        getCatalog("https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_genres=18&page=2", setDrama);
        getCatalog("https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1", setTopSeries);
        getCatalog("https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=2&with_genres=10749&page=2", setMovieRomance);
        getCatalog("https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=2&with_genres=35", setMovieComedy);
        getCatalog("https://api.themoviedb.org/3/trending/all/day?language=pt-BR", setTreadins);

    }, []);

    const {isPopupOpen, popupContent, closePopup, openPopup} = usePopup();

    const handleClick = (id, type) => {
        console.log(id);
        openPopup(id, type);
    }

    return (
        <Container>
            <CarroselContainer>
                <h3>Descubra suas próximas histórias</h3>
                <Slider {...settings}>
                    {catalog && catalog.map((card) => (<FilmeCard onClick={() => handleClick(card.id, card.media_type)} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Séries premiadas</h3>
                <Slider {...settings}>
                    {series.map((card) => (<FilmeCard onClick={() => handleClick(card.id, "tv")} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Filmes de ação e aventura</h3>
                <Slider  {...settings}>
                    {actionAdventure.map((card) => (<FilmeCard onClick={() => handleClick(card.id, "movie")} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Comédias para a TV</h3>
                <Slider  {...settings}>
                    {comedy.map((card) => (<FilmeCard onClick={() => handleClick(card.id, "tv")} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Séries dramáticas</h3>
                <Slider  {...settings}>
                    {dramaSerie.map((card) => (<FilmeCard  onClick={() => handleClick(card.id, "tv")} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Séries para maratonar</h3>
                <Slider  {...settings}>
                    {topSeries.map((card) => (<FilmeCard onClick={() => handleClick(card.id, "tv")} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Filmes românticos</h3>
                <Slider  {...settings}>
                    {romanceMovie.map((card) => (<FilmeCard onClick={() => handleClick(card.id, "movie")} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Filmes de comédia</h3>
                <Slider  {...settings}>
                    {comedyMovies.map((card) => (<FilmeCard onClick={() => handleClick(card.id, "movie")} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer>
                <h3>Novidades na Netflix</h3>
                <Slider  {...settings}>
                    {treadins.map((card) => (<FilmeCard onClick={() => handleClick(card.id, card.media_type)} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
            <CarroselContainer style={{zIndex:1 , position:'relative'}}>
                <h3>Originals Netflix</h3>
                <Slider  {...settings}>
                    {treadins.map((card) => (<FilmeCard onClick={() => handleClick(card.id, card.media_type)} key={card.id} img_url={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} name={card.title ? card.title : card.name}/>))}
                </Slider>
            </CarroselContainer>
        </Container>
    )
}

export default CatalogNetflix;