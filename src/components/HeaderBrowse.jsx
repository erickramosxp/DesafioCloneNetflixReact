import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    position: fixed;
    width: 100%;
    color: white;
    padding: 11px;
    z-index: 99;
`

const ResizedLogo = styled(Logo)`
    height: 30px;
    color: black;
    margin-left: 40px;
`

const Acess = styled.div`
    display: flex;
    margin-right: 40px;
    align-items: center;
    gap: 10px;
    .acess {
        background-color: #E10813;
        color: white;
        padding: 7px 30px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
    .entry {
        background-color: black;
        color: white;
        padding: 7px 15px;
        border: solid grey 1px;
        border-radius: 2px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }
    .acess:hover {
        background-color: #fa0a16;
    }
    .entry:hover{
        background-color: rgba(107, 106, 106, 0.5);
    }
    p {
        font-size: 13px;
    }
`

const HeaderBrowse = () => {
    return (
        <Container>
            <div>
                <Link to="/ "><ResizedLogo  /></Link>
            </div>
            <Acess>
                <p>SÉRIES E FILMES ILIMITADOS</p>
                <Link to="/"><button className="acess">Acessar agora</button></Link>
                <Link to="/login"><button className="entry">Entrar</button></Link>
            </Acess>
        </Container>
    )
}

export default HeaderBrowse;