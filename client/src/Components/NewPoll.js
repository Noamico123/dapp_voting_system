import React, { useRef } from 'react';
import {Form, Container, Button} from "react-bootstrap"


const NewPoll = props => {

const CandidateName1 = useRef();
const CandidateName2 = useRef();

const promptRef = useRef();

    return (
        <Container>
            <h2 style={{margin: "5vh"}}>Create New Poll:</h2>
            <Form style={{margin: "5vh"}} striped bordered hober>
                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 1 Name</Form.Label>
                    <Form.Control
                    ref={CandidateName1}
                    placeholder='Enter Candidate name'>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 2 Name</Form.Label>
                    <Form.Control
                    ref={CandidateName2}
                    placeholder='Enter Candidate name'>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Prompt</Form.Label>
                    <Form.Control
                    ref={promptRef}
                    placeholder='Add Prompt'>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Button variant='primary' style={{margin: "5vh"}} striped bordered hober>
                Submit
            </Button>
        </Container>    
        );
};

export default NewPoll;