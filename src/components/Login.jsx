import FormLogin from "./FormLogin";
import styled from 'styled-components';
import background from '../netflixback.jpg';
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div`
    position: relative;
    height: 100vh;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background}) ;
        background-size: cover;
        z-index: -1;
    }
`


const Login = () => {
    return (
        <Container>
            <Header />
            <FormLogin />
            <Footer />
        </Container>
    );
}

export default Login;
