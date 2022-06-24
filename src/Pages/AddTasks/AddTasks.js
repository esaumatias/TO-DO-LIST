import React, { useContext, useState } from 'react';
import { createTask } from '../../Services/FetchApi';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";

import AppContext from '../../Context/AppContext';


function AddTasks() {
  const { setAddSubmitted, newTask, setNewTask } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);

  function handleTask({target}) {
    const { name, value } = target;
    setNewTask((prevState) => {
      return { ...prevState, [name]: value, };
    })
  }

  function submitInfos() {
    createTask(newTask).then((data) => {
      if(data.statusCode === 400) {
        setAddSubmitted(false);
      } else {
        setAddSubmitted(true);
      }
    })
    setModalShow(true);
    setNewTask('')
    setAddSubmitted(false);
  }

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "40px", marginBottom: "20px"}}>
          <h1>Adicionar Task</h1>
          <Link to="/">
            <Button variant="dark">
              Voltar
            </Button>
          </Link>
        </div>
      <Form>
        <Col  className="align-items-center">
            <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => handleTask({ target })}>
                <Form.Label><strong>Texto</strong></Form.Label>
                <Form.Control placeholder="texto" name="tasks"/>
            </Row>

            <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onClick={({ target }) => handleTask({ target })}>
                <Form.Label><strong>Data</strong></Form.Label>
                <Form.Control type="date" placeholder="Data" name="date" />
            </Row>

            <Row style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Status</strong></Form.Label>
                <Form.Select aria-label="Default select example" onClick={({ target }) => handleTask({ target })} name='status'>
                    <option value="success">Pronto</option>
                    <option value="danger">Pendente</option>
                    <option value="warning">Em andamento</option>S
                </Form.Select>
            </Row>
        </Col>
        <Button variant="dark" type="reset" onClick={submitInfos} style={{ alignSelf: "end", marginTop: "15px"}}>
          Salvar
        </Button>
      </Form>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default AddTasks;