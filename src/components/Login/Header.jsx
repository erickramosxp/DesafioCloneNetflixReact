import styled from "styled-components";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Container = styled.div`
    
`
const LogoContent = styled.div`
    width: 80%;
    margin: auto;
`

const ResizedLogo = styled(Logo)`
    width: 150px;
    height: 40px;
    margin: 40px;
`

const Header = () => {
    return (
        <Container>
            <LogoContent>
                <Link to="/"><ResizedLogo /></Link>
            </LogoContent>
        </Container>
    );
}

export default Header;