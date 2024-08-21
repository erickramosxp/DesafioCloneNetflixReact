import styled from "styled-components";
import CatalogNetflix from "./CatalogNetflix";
import { Helmet } from 'react-helmet';
import BrowseFooter from './BrowseFooter';

const Container = styled.div`
    padding-top: 60px;
    .first_item {
        width: 90%;
        color: white;
        margin: auto;
        position: relative;
        height: 220px;
    }
    .first_item div {
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: end;
        width: 580px;
        height: 220px;
        bottom: 0;
    }
    .first_item div h1 {
        font-size: 55px;
    }
    .first_item div p {
        margin-top: 5px;
        font-size: 18px;
    }
`

const Gradie = styled.div`
    display: flex;
    margin: auto;
    color: white;
    height: 200px;
    div {
        text-align: center;
        margin: auto;
        max-width: 700px;
        h2 {
            margin-bottom: 20px;
            font-size: 35px;
        }
        p {
            font-size: 20px;
        }
        button {
            margin-top: 20px;
        }
        .acess {
        background-color: #E10813;
        color: white;
        padding: 10px 30px;
        font-size: 20px;
        font-weight: 500;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        }
        .acess:hover {
        background-color: #fa0a16;
        }
    }
`

const Shandow = styled.div`
    position: relative;
    margin-top: -300px;
    z-index: 50;
    height: 350px;
    background: linear-gradient(180deg,rgba(24, 24, 24, 0.9) 30%, RGB(24, 24, 24) 40%);
`

const BrowseMain = () => {

    return (
        <Container>
            <Helmet>
                <title>Originais Netflix | Site oficial da Netflix</title>
                <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Helmet>
            <div className="first_item">
                <div>
                    <h1>Só na Netflix</h1>
                    <p>Na Netflix você acha conteúdo original incrível, que não pode ser encontrado em nenhum outro lugar. Filmes, séries, especiais... Todos feitos especialmente para você!</p>
                </div>
            </div>
            <CatalogNetflix />
            <Shandow />
            <Gradie>
                <div>
                    <h2>Tem muito mais esperando por você.</h2>
                    <p>A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.</p>
                    <button className="acess">Acessar Agora</button>
                </div>
            </Gradie>
        </Container>
    )
}

export default BrowseMain;