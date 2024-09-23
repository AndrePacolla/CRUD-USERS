import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
display: flex;
align-items: flex-end;
width: 100%;
margin-top: 40px;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 10px #ccc;
border-radius: 7px;

@media (max-width: 500px){
        width: 300px;
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
width: 130px;
padding: 0 10px;
border: 1px solid #0d0d0d;
border-radius: 10px;
height: 40px;
`;

const Button = styled.button`
padding: 10px;
cursor: pointer;
border: none;
background-color: #2062a4;
border-radius: 5px;
color: white;
height: 42px;
`;

const Label = styled.label`
    margin-bottom: 10px;

`;


const Form = ({onEdit}) => {
    const ref = useRef();

    return(
        <FormContainer ref={ref}>

            <InputArea>
            <Label>Nome</Label>
            <Input name="nome"/>
            </InputArea>

            <InputArea>
            <Label>E-mail</Label>
            <Input name="email" type="email"/>
            </InputArea>

            <InputArea>
            <Label>Telefone</Label>
            <Input name="fone"/>
            </InputArea>

            <InputArea>
            <Label>Data de Nascimento</Label>
            <Input name="data_nascimneto" type="date"/>
            </InputArea>
            
            <Button type="submit">SALVAR</Button>

        </FormContainer>
    );
};

export default Form;
