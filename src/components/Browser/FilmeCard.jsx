import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    text-align: center;
    margin: auto;
    margin-top: 15px;
    cursor: pointer;
    span {
        display: inline-block;
        font-size: 16px;
        margin-top: 5px;
    }
`

const Img = styled.img`
    width: 300px;
    height: 170px;
`

const FilmeCard = ({img_url, name, onClick}) => {
    return (
        <Container onClick={onClick}>
            <Img src={img_url}/>
            <span>{name}</span>
        </Container>
    )
}

export default FilmeCard;