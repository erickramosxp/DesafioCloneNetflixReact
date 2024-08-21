import styled from "styled-components";
import HeaderBrowse from "./HeaderBrowse";
import BrowseMain from "./BrowseMain";
import BrowseFooter from './BrowseFooter';



const Container = styled.div`
    background-color: #181818;
`

const BrowseNetflix = () => {
    return (
        <Container>
            <HeaderBrowse />
            <BrowseMain />
            <BrowseFooter />
        </Container>
    )
}

export default BrowseNetflix;