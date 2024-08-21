import styled from "styled-components";

const MyFooter = styled.footer`
    display: flex;
    height: 350px;
    padding-top: 15px;
    background: #181818;
`

const Container = styled.div`
    display: flex;
    margin: auto;
    width: 80%;
    flex-direction: column;
    p {
        color: #B3B3B3;;
        a{
            text-decoration: none;
            color: #B3B3B3;
        }
        a:hover{
            text-decoration: underline;
        }
    }
    select {
        background-color: #0F0F0F;
        color: white;
        padding: 5px 0 5px 30px;
        border-radius: 5px;
        width: 140px;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* margin: auto; */
    gap: 100px;
    color: #B3B3B3;
    width: 100%;
    li {
        list-style: none;
        line-height: 35px;
    }
    a {
        font-size: 14px;
        color: #B3B3B3;
        text-decoration: underline;
    }
`



const BrowseFooter = () => {
    return (
        <MyFooter>
            <Container>
                    <p><a href="#">Dúvidas? Entre em contato.</a></p>
                <Links>
                    <div>
                        <ul>
                            <li><a href="#">Perguntas frequentes</a></li>
                            <li><a href="#">Relações com investidores</a></li>
                            <li><a href="#">Formas de assistir</a></li>
                            <li><a href="#">Informações corporativas</a></li>
                            <li><a href="#">Só na Netflix</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Central de Ajuda</a></li>
                            <li><a href="#">Carreiras</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Entre em contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Conta</a></li>
                            <li><a href="#">Resgatar cartão pré-pago</a></li>
                            <li><a href="#">Privacidade</a></li>
                            <li><a href="#">Teste de velocidade</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Comprar cartão pré-pago</a></li>
                            <li><a href="#">Preferências de cookies</a></li>
                            <li><a href="#">Avisos legais</a></li>
                        </ul>
                    </div>
                </Links>
                <select name="" id="">
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                </select>
            </Container>
        </MyFooter>
    );
}

export default BrowseFooter;