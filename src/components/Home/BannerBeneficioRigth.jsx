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
    gap: 10px;
    height: 400px;
    width: 70%;
    margin: auto;
`

const Text = styled.div`
     text-align:start;
     width: 50%;
`

const BannerBeneficioRigth = ({text, p, urlvideo}) => {
    return (
        <Container>
            <Elementos>
                <Text>
                    <h1>{text}</h1>
                    <p>{p}</p>
                </Text>
                <div>
                {urlvideo.includes("m4v") ? <video data-uia="nmhp-card-animation-asset-video" autoPlay='true' playsInline muted='true' loop='true'><source src={urlvideo} type="video/mp4"/></video> : <img src={urlvideo} width={580}/>}
                </div>
            </Elementos>
        </Container>
    )
}

export default BannerBeneficioRigth;