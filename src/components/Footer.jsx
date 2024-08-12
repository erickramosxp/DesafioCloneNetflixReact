import styled from 'styled-components';

const MyFooter = styled.footer`
    display: flex;
    height: 250px;
    margin-top: 100px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7),rgb(0, 0, 0) 8%);
`

const Container = styled.div`
    display: flex;
    margin: auto;
    width: 60%;
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
    justify-content: space-between;
    margin: auto;
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


const Footer = () => {
    return (
        <MyFooter>
            <Container>
                    <p>Dúvidas? Ligue <a href="tel:0800 591 2876">0800 591 2876</a></p>
                <Links>
                    <div>
                        <ul>
                            <li><a href="#">Perguntas frequentes</a></li>
                            <li><a href="#">Preferências de cookies</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Central de Ajuda</a></li>
                            <li><a href="#">Informações corporativas</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Termos de Uso</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Privacidade</a></li>
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

export default Footer;