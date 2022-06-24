import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Row, Col, Spinner } from 'react-bootstrap';

function CardsTasks() {
  const { allTasks } = useContext(AppContext);

    return (
      <>
        {allTasks.length > 0 ? (
          <Row xs={1} md={5} className="g-2">
          {allTasks.map((value, index) => (
            <Col key={index}>
              <Card bg="dark" text='light'>
                <Card.Body>
                  <Card.Title>{value.tasks}</Card.Title>
                </Card.Body>
                <Card.Footer style={{textAlign: "end"}}>
                    {value.date}
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