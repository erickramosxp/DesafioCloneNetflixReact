import styled from "styled-components";
import LogoPopCorn from "./LogoPopCorn";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    height: 150px;
    margin-top: -70px;
`

const Card = styled.div`
    width: 80%;
    display: flex;
    margin: auto;
    height: 100%;
    background: radial-gradient(circle 600px at 50% -90%, RGB(138, 17, 45) 40%,#111A4E, #000413);
    color: white;
    div {
        h2 {
            font-size: 20px;
        }
        h2, p , a {
            margin-top: 10px;
        }
        a {
            color: #448EF4;
        }
        display: flex;
        width: 600px;
        margin: auto;
        div {
            padding-left: 20px;
            flex-direction: column;
        }
    }
`

const BannerAssinatura = () => {


    return (
        <Container>
            <Card>
                <div>
                    <LogoPopCorn />
                    <div>
                        <h2>A Netflix que você adora por apenas R$ 20,90.</h2>
                        <p>Assine o plano Padrão com anúncios.</p>
                        <Link to="/browse"><a href="#">Saiba mais <SlArrowRight /></a></Link>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default BannerAssinatura;