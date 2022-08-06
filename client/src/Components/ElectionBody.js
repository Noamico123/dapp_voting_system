import React from 'react';
import {Table, Container, Button, Form} from "react-bootstrap"
import { useEffect, useState } from 'react';


const ElectionBody = ( {candidate1, candidate2, account, voteCandidate} ) => {
    
    const camdidateList = [candidate1.name, candidate2.name];
    
    const[Candidate, setCandidate] = useState("");

    const onChange = (e) => {
        setCandidate(e.target.value)
        console.log("e.traget.value:   ",e);

    };

    const onSubmit = () => {
        
    };
    
    return (
        <Container>
            <h1 style={{margin: "5vh"}} striped bordered hober>Elections to {}:</h1>
            <Form onSubmit={onSubmit}>
                <Form.Select style={{margin: "5vh"}} striped bordered hober onChange={(e) => {
                        onChange(e);
                    }}>
                    <option>Select Your Candidate</option>
                        {camdidateList.map((element, index) => {
                                return (
                                    <option value={index}>{element}</option>
                                )
                            })}
                            {/* <Button onClick={() => handleClick(index+1)}>Voting to {element}</Button> */}
                </Form.Select>
                <Button  style={{marginLeft: "5vh"}} striped bordered hober>Voting to{" "} {Candidate}</Button>
            </Form>
            {/* <Table style={{margin: "5vh"}} striped bordered hober>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Candidates</th>
                        <th>Vote</th>
                    </tr>
                </thead>
                <tbody>
                {camdidateList.map((element, index) => {
                        return (
                            <div>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element}</td>
                                    <td>
                                        {" "}
                                        <Button onClick={() => handleClick(index+1)}>Voting to {element}</Button>
                                    </td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
            </Table> */}

            <p style={{margin: "5vh"}} striped bordered hober>Voter address: {account}</p>
            
        </Container>
    )
};

export default ElectionBody;