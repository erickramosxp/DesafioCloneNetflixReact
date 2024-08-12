import styled from 'styled-components';
import Logo from '../Logo';
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 30px;

    width: 100%;
    .header {
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: space-between;
        width: 60%;
    }
    .buttons {
        display: flex;
        gap: 30px;
    }
    button {
        background-color: #E10813;
        color: white;
        padding: 7px 20px;
        font-size: 15px;
        font-weight: 500;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
    button:hover {
        background-color: #fa0a16;
    }
    select {
        background-color: rgba(23, 25, 25, 0.8);
        color: white;
        padding: 5px 0 5px 30px;
        border-radius: 5px;
        width: 140px;
    }
`
const ResizedLogo = styled(Logo)`
    width: 9.25rem;
    height: 2.5rem;
`

const HeaderHome = () => {
    return (
        <Container>
            <div className='header'>
                <ResizedLogo />
                <div className='buttons'>
                    <select name="" id="">
                                    <option value="Português">Português</option>
                                    <option value="English">English</option>
                    </select>
                    <Link to="/login"><button>Entrar</button></Link>
                </div>
            </div>
        </Container>
    )

}

export default HeaderHome;