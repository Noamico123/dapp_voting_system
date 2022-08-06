import React from 'react';
import { Container, Button, Form, Table } from "react-bootstrap"
import { useState } from 'react';


const SurveyBody = ( {candidate1, candidate2, account, voteCandidate} ) => {
    
    const camdidateVotesCountList = [candidate1.voteCount, candidate2.voteCount];
    const camdidateNameList = [candidate1.name, candidate2.name];
    
    const camdidateList = [candidate1, candidate2];

    const[Candidate, setCandidate] = useState("");

    const onChange = (event) => {
        setCandidate(event.target.value)
        console.log("event.traget.value:   ",event);

    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (Candidate !== 0) voteCandidate(Number(Candidate));
        else window.alert("there is an error in submition");
    };
    
    return (
        <Container>
            <h1 style={{margin: "5vh"}} striped bordered hober>Survey to {}:</h1>
            <Form onSubmit={(event) => {
                        onSubmit(event);
                    }}>
                <Form.Select style={{margin: "5vh"}} striped bordered hober onChange={(event) => {
                        onChange(event);
                    }}>
                    <option>Select Your Candidate</option>
                        {camdidateNameList.map((element, index) => {
                                return (
                                    <option value={index+1}>{element}</option>
                                )
                            })}
                </Form.Select>
                <Button type="submit" style={{marginLeft: "5vh"}} striped bordered hober>Voting to{" "} {Candidate}</Button>
            </Form>
            <p style={{margin: "5vh"}} striped bordered hober>Voter address: {account}</p>
            <hr
                style={{
                color: 'black',
                margin: "2vh",
                }}
            />
            <h2 style={{margin: "5vh"}}>Survey Current Results:</h2>
            <Table style={{margin: "5vh"}} striped bordered hober>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Candiate Name</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {camdidateList.map((candidate, index) => {
                        return (
                            <tr key={index}>
                                <td>{candidate.id}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.voteCount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
};

export default SurveyBody;