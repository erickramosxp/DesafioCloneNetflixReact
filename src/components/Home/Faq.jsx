import styled from "styled-components";
import { Accordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from "react";

const Container = styled.div`
     background-color: black;
     color: white;
`

const Content = styled.div`
    width: 70%;
    margin: auto;
    padding-top: 40px;
    h2 {
        font-size: 38px;
        margin-bottom: 30px;
    }
    .toggle-ac {
        background-color: #2D2D2D;
        color: white;
        font-size: 25px;
        margin-top: 10px;
        width: 80%;
        .summary {
            height: 4.5rem;
        }
    }
`

const Faq = () => {

    const [active, setActive] = useState(false);

    const handleActive = (painel) => (event, isExpanded) => {
        setActive(isExpanded ? painel : false)
    }

    return (
        <Container>
            <Content>
                <h2>Perguntas frequentes</h2>
                <Accordion expanded={active === 'panel1'} className="toggle-ac" onChange={handleActive("panel1")}>
                    <AccordionSummary id="panel-header" aria-controls="panel-content" className="summary">
                        O que é a Netflix?
                    </AccordionSummary>
                    <AccordionDetails>
                    <span>A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</span>
                    <br />
                    <br />
                    <span>Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</span>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={active === 'panel2'} className="toggle-ac" onChange={handleActive("panel2")}>
                    <AccordionSummary id="panel-header" aria-controls="panel-content" className="summary">
                        Quanto custa a Netflix?
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras.
                        </span>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={active === 'panel3'} className="toggle-ac" onChange={handleActive("panel3")}>
                    <AccordionSummary id="panel-header" aria-controls="panel-content" className="summary">
                        Onde posso assistir?
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                        </span>
                        <br />
                        <br />
                        <span>
                            Você também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar.
                        </span>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={active === 'panel4'} className="toggle-ac" onChange={handleActive("panel4")}>
                    <AccordionSummary id="panel-header" aria-controls="panel-content" className="summary">
                        Como faço para cancelar?
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                        </span>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={active === 'panel5'} className="toggle-ac" onChange={handleActive("panel5")}>
                    <AccordionSummary id="panel-header" aria-controls="panel-content" className="summary">
                         O que eu posso assistir na Netflix?
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                        </span>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={active === 'panel6'} className="toggle-ac" onChange={handleActive("panel6")}>
                    <AccordionSummary id="panel-header" aria-controls="panel-content" className="summary">
                        A Netflix é adequada para crianças?
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
                        </span>
                        <br />
                        <br />
                        <span>
                            O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.
                        </span>
                    </AccordionDetails>
                </Accordion>
            </Content>
        </Container>
    )
}

export default Faq;