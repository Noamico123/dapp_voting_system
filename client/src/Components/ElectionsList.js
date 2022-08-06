//import { Tab } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {Table, Container, Button} from "react-bootstrap"

const ElectionsList = props => {

    const promptList = ["Who eill be the next president of US?"];
    const navigate = useNavigate();

  function handleClick() {
    navigate("/elections");
  }

    return (
        <Container>
            <h2 style={{margin: "5vh"}}>Polls List:</h2>
            <Table style={{margin: "5vh"}} striped bordered hober>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Poll Name</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                    {promptList.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element}</td>
                                <td>
                                    {" "}
                                    <Button onClick={handleClick}>Go to Poll</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
};

export default ElectionsList;
