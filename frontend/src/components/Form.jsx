import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
display: flex;
align-items: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
`;

const Button = styled.button`
padding: 10px;
cursor: pointer;
border: none;
background-color: #2c73d2;
border-radius: 5px;
color: white;
height: 42px;
`;

const Label = styled.label``;


const Form = ({onEdit}) => {
    const ref = useRef();

    return(
        <FormContainer ref={ref}>

            <InputArea>
            <Label>Nome</Label>
            <input name="nome"/>
            </InputArea>

            <InputArea>
            <Label>E-mail</Label>
            <input name="email" type="email"/>
            </InputArea>

            <InputArea>
            <Label>Telefone</Label>
            <input name="fone"/>
            </InputArea>

            <InputArea>
            <Label>Data de Nascimento</Label>
            <input name="data_nascimneto" type="date"/>
            </InputArea>
            
            <Button type="submit">SALVAR</Button>

        </FormContainer>
    );
};

export default Form;
