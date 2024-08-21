import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";

const Container = styled.div`
    flex-direction: column;
    /* margin: auto; */
    /*text-align: center; */
    width: 100%;
    p {
        /* width: 60%; */
        margin: auto;
        font-size: 22px;
        color: white;
    }
    div {
        display: flex;
        height: 50px;
        width: 550px;
        gap: 10px;
        margin: auto;
        margin-top: 15px;
        input {
            height: 50px;
            margin: auto;
        }
    button {
        background-color: #E10813;
        color: white;
        padding: 7px 20px;
        white-space: nowrap;
        height: 100%;
        font-size: 20px;
        font-weight: 500;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #fa0a16;
    }
}
`

const InputEmail = ({className}) => {
    return (
        <Container className={`${className}`}>
            <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <div>
                <input type="text" />
                <button>Vamos lá <SlArrowRight /></button>
            </div>
        </Container>
    );
}

export default InputEmail;