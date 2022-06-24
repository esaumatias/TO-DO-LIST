import React, { useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';
import { getTasks, remove } from '../../Services/FetchApi';
import { Card, Row, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardsTasks() {
    const { allTasks, setAlLTasks } = useContext(AppContext);

    useEffect(() => {
        getTasks().then((data) => {
          setAlLTasks(data);
        });
    }, [setAlLTasks])

    function removeTask(id) {
			remove(id).then((data) => {
				getTasks().then((data) => {
						setAlLTasks(data);
				});
			})
    }
    
    return (
      <>
        {allTasks.length > 0 ? (
            <Row xs={1} md={5} className="g-2">
            {allTasks.map((value, index) => (
                <Col key={index}>
                <Card bg={value.status} text='dark'>
                    <Card.Body>
                    <Card.Title>{value.tasks}</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{textAlign: "end"}}>
                        {value.date}
                    <Button variant="primary" style={{backgroundColor: "transparent", border: "none"}} onClick={() => removeTask(value.id)}>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" alt="lixo"/>
                    </Button>
                    <Link variant="primary" to={`/editar/${value.id}`}>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png" alt="editar" />
                    </Link>
                    </Card.Footer>
                </Card>
                </Col>
            ))}
            </Row>
        ) : <Spinner animation="border" />}
      </>
    );
  }

export default CardsTasks;