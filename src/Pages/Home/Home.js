import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CardsTasks from '../../Components/CardsTasks/CardsTasks';

function Home() {

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "40px", marginBottom: "20px"}}>
          <h1>Minhas Tasks</h1>
          <Link to="/Adicionar">
            <Button variant="dark">
              Adicionar Task
            </Button>
          </Link>
        </div>
        <CardsTasks />
    </Container>
  )
}

export default Home;