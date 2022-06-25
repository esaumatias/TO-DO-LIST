import React, { useContext } from 'react';
import { Container, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AppContext from '../../Context/AppContext';
import CardsTasks from '../../Components/CardsTasks/CardsTasks';

function Home() {

  const { setOrderType } = useContext(AppContext);


  function handleOrder({ target }) {
    const { name } = target;
    setOrderType(name);
  }

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
        <h1>Minhas Tarefas</h1>
        <Link to="/adicionar">
          <Button variant="dark">Adicionar tarefa</Button>
        </Link>
      </div>

      <DropdownButton
        id="dropdown-basic-button"
        title="Ordenar por:"
        onClick={({ target }) => handleOrder({ target })}
        style={{ marginBottom: '20px' }}
      >
        <Dropdown.Item name="date">Data</Dropdown.Item>
        <Dropdown.Item name="title">Ordem alfabética</Dropdown.Item>
        <Dropdown.Item name="status">Status</Dropdown.Item>
      </DropdownButton>

      <CardsTasks />
    </Container>
  );
}

export default Home;