import axios from "axios";
import React, {useEffect, useRef } from "react";
import styled from "styled-components";
import {toast} from "react-toastify";

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

    useEffect(() => {
        if(onEdit){

            const user = ref.current;

            user.nome.value = onEdit.nome;

            user.email.value = onEdit.email;

            user.fone.value = onEdit.fone;

            user.data_nascimento.value = onEdit.data_nascimento;
        }
    },[onEdit]);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const user = ref.current;

        if(
          !user.nome.value ||
          !user.email.value ||
          !user.fone.value ||
          !user.data_nascimento.value
        ){
            return toast.warn("Preencha todos os campos !")
        }

        if(onEdit){
            await axios
            .put("http://localhost:8800/" + onEdit.id,{
                nome: user.nome.value,
                email: user.email.value,
                fone: user.fone.value,
                data_nascimento: user.data_nascimento.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }
    };

      

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
