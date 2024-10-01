import React from "react";
import axios from "axios";
import styled from "styled-components";
import {FaTrash , FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
    width: 100%;
    max-width: 850px;
    padding: 20px;
    margin: 20px auto;
    word-break: break-all;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;

    @media (max-width: 500px){
        width: 300px;
        margin: auto;

    }
`;
export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Tbody = styled.tbody``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alineCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
    
    @media(max-width : 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }

`;



const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleEdit = (item) =>{
        setOnEdit(item);
    };


    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8800/" + id)
        .then(({data}) => { 
            const newArray = users.filter((user) => user.id !== id)

            setUsers(newArray);
            toast.success(data);
        })
        .catch(({data}) => toast.error(data));

        setOnEdit(null);

    }

    return(
        <Table> 
          <Thead>
            <Tr>
               <Th>Nome</Th>
               <Th>Email</Th>
               <Th onlyWeb>Fone</Th>
               <Th></Th>
               <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((item, i) => (
                <Tr key={i}>
                    <Td width = "30%">{item.nome}</Td>
                    <Td width = "30%">{item.email}</Td>
                    <Td width = "20%" onlyWeb>{item.fone}</Td>
                    <Td alineCenter width="5%">
                        <FaEdit onClick ={() => handleEdit(item)}/>
                    </Td>
                    <Td alineCenter width="5%">
                        <FaTrash onClick={() => handleDelete(item.id)}/>
                    </Td>

                </Tr>
            ))}

          </Tbody>
        </Table>
    );

}

export default Grid;