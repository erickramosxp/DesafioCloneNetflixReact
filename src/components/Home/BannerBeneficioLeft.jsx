import styled from "styled-components";


const Container = styled.div`
    display: flex;
    height: 500px;
    color: white;
    border-bottom: 7px solid #232323;
    `

const Elementos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 400px;
    width: 70%;
    margin: auto;
`

const Text = styled.div`
     text-align:start;
     width: 50%;
`

const BannerBeneficioLeft = ({text, p, urlvideo}) => {
    return (
        <Container>
            <Elementos>
                <div>
                    {urlvideo.includes("m4v") ? <video data-uia="nmhp-card-animation-asset-video" autoPlay='true' playsInline muted='true' loop='true'><source src={urlvideo} type="video/mp4"/></video> : <img src={urlvideo}/>}
                </div>
                <Text>
                    <h1>{text}</h1>
                    <p>{p}</p>
                </Text>
            </Elementos>
        </Container>
    )
}

export default BannerBeneficioLeft;