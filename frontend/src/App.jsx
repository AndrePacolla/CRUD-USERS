import Global from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function App() {

  const Container = styled.div`

    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `

 const Title = styled.h2`
    color: white;
    border-bottom: 2px solid #6e6d6d; 
 `;

  const [users, setUsers] =useState([]);
  const [oneEdit, setOnEdit] =useState(null);

  const getUsers = async ()=>{
    try{
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    }catch (error){
      toast.error(error)
    }
  };

  useEffect(() =>{
    getUsers();
  }, [setUsers])


  return (
    <>
    <Container>

    <Title>USUÁRIOS</Title>

    <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
    <Grid users={users} setUsers ={setUsers} setOnEdit={setOnEdit}/>   
    </Container>


    <Global/>
    <ToastContainer autoClose={3000} position="bottom-right"/>
    </>
  )
}

export default App
