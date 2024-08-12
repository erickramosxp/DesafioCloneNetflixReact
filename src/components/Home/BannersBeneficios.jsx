import styled from "styled-components";
import BannerBeneficioRigth from "./BannerBeneficioRigth";
import BannerBeneficioLeft from "./BannerBeneficioLeft";

const Container = styled.div`
        background-color: black;
`

const BannersBeneficios = () => {
    return (
        <Container>
            <BannerBeneficioRigth 
            text="Aproveite na TV" 
            p="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos." 
            urlvideo="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            />
            <BannerBeneficioLeft
            text="Assista onde quiser" 
            p="Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV." 
            urlvideo="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            />
            <BannerBeneficioRigth 
            text="Crie perfis para crianças" 
            p="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso." 
            urlvideo="https://occ-0-368-1380.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png?r=190"
            />
            <BannerBeneficioLeft
            text="Baixe séries para assistir offline" 
            p="Assista em um avião, trem ou submarino..." 
            urlvideo="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
        </Container>
    )
}

export default BannersBeneficios;