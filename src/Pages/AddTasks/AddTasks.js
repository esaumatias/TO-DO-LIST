import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Form from '../../Components/Form/Form';

function AddTasks() {

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <h1>Adicionar tarefa</h1>
        <Link to="/">
          <Button variant="dark">Voltar</Button>
        </Link>
      </div>
      <Form />
    </Container>
  );
};

export default AddTasks;