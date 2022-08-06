import React from 'react';
import {Table, Container, Button} from "react-bootstrap"

const ElectionBody = ( {candidate1, candidate2, account} ) => {
    
    const promptList = [candidate1.name, candidate2.name];

    return (
        <Container>
            <Table style={{margin: "5vh"}} striped bordered hober>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Candidates</th>
                        <th>Vote</th>
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
                                    <Button>Click to Vote</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <p style={{margin: "5vh"}} striped bordered hober>Voter address: {account}</p>
        </Container>
    )
};

export default ElectionBody;