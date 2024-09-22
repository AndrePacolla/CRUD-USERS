import Global from "./styles/global";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "./components/Form";


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


  return (
    <>
    <Container>

    <Title>USUÁRIOS</Title>

    <Form></Form>
   
    </Container>


    <Global/>
    <ToastContainer autoClose={3000} position="bottom-right"/>
    </>
  )
}

export default App
