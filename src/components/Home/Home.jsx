import styled from 'styled-components';
import HeaderHome from './HeaderHome';
import backgroud from './image.png';
import InputEmail from './InputEmail';
import BannerAssinatura from './BannerAssinatura';
import BannersBeneficios from './BannersBeneficios';

const Container = styled.div`
    background-color: black;
    height: 100vh;
`

const FirstItem = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${backgroud});
    background-size: cover;
    height: 700px;
    color: white;
`

const FirstText = styled.div`
    display: flex;
    align-items: center;
    height: 450px;
    margin: auto;
    `

const Text = styled.div`
    margin: auto;
    text-align: center;
    h2 {
        font-size: 45px;
    }
    p {
        font-size: 22px;
    }
    p , div {
        margin-top: 15px;
    }
`

const Error = styled.p`
    
`

const Home = () => {
    return (
        <Container>
            <FirstItem>
                <HeaderHome />
                <FirstText>
                    <Text>
                        <h2>Filmes, séries e muito mais, sem limites</h2>
                        <p>Assista onde quiser. Cancele quando quiser.</p>
                        <InputEmail />
                        <Error></Error>
                    </Text>
                </FirstText>
            </FirstItem>
            <BannerAssinatura />
            <BannersBeneficios />
        </Container>
    )
}

export default Home;