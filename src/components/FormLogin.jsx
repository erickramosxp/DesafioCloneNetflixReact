import styled from 'styled-components';
import './FormLogin.module.css';
import IconError from './IconError';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
    height: 700px;
    padding: 80px;
    background: rgba(3, 4 , 4, 0.7);
    color: white;
    margin: 0 auto;
    footer {
        margin-top: 18px;
        p {
            margin-top: 18px;
            color: #B6B5B4;
        }
        a{
            color: white;
            text-decoration: none;
            font-weight: 500;
        }
        a:hover{
            text-decoration: underline;
        }
        .inform {
            display: block;
            font-size: 13px;
            margin-top: 30px;
            color: #B6B5B4;
            a {
                color: #0071EB;
            }
        }
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    .cod_security {
        background-color: RGBA(51, 51, 51, 0.7);
    }
    .cod_security:hover {
        background-color: rgba(46, 46, 46, 0.6);
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 17px;
    }
    a:hover {
        text-decoration: underline;
    }
`

const Remenber = styled.div`
    display: flex;
    align-items: center;
    input {
        margin: auto 0;
        width: 30px;
        height: 20px;
    }
    label {
        margin-left: 8px;
    }
`

const MsgError = styled.div`
    display: flex;
    margin-top: 5px;
    align-items: center;
    left: 0;
    p {
        display: flex;
        align-items: center;
        left: 0;
        font-size: 13px;
        color:#EB3942;
    }
`


const FormLogin = () => {
    const [errorMail, setErrorMail] = useState('');
    const [errorPasswd, setErrorPasswd] = useState('');
    
    const verifyEmail = (event) => {
        const value = event.target.value;
        if (!value || value.length == 0) {
            setErrorMail('Informe um email ou número de telefone válido.');
        } else {
            setErrorMail('');
        }
    }
    
    const verifyPasswd = (event) => {
        const value = event.target.value;
    
        if (!value || value.length < 4) {
            setErrorPasswd('A senha deve ter entre 4 e 60 caracteres.');
        } else {
            setErrorPasswd('');
        }
    }


    return (
        <Container>
            <h2>Entrar</h2>
            <Form action="">
                <div>
                    <label htmlFor="">
                        <input type="text" onBlur={verifyEmail} placeholder='Email ou número de celular'/>
                    </label>
                    {
                        errorMail &&
                        <MsgError>
                            <IconError />
                            <p>{errorMail}</p>
                        </MsgError>
                    }
                </div>
                <div>
                    <label htmlFor="">
                        <input type="text" onBlur={verifyPasswd} placeholder='Senha'/>
                    </label>
                    {
                        errorPasswd &&
                        <MsgError>
                            <IconError />
                            <p>{errorPasswd}</p>
                        </MsgError>
                    }
                </div>
                <button className='btn'>Entrar</button>
                <p>OU</p>
                <button className='btn cod_security'>Usar um código de acesso</button>
                <a href='#'>Esqueceu a senha?</a>
            </Form>
            <footer>
                <Remenber>
                    <input type="checkbox" itemID='remenber'name='remenber'/>
                    <label htmlFor="remenber">
                        Lembre-se de mim
                    </label>
                </Remenber>
                <p>Novo por aqui? <a href="#">Assine agora.</a></p>
                <span className='inform'>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="">Saiba mais.</a></span>
            </footer>
        </Container>
    );
}

export default FormLogin;