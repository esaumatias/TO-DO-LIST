import React, { useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';
import { getTasks, remove } from '../../Services/FetchApi';
import { Card, Row, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardsTasks() {
    const { allTasks, setAlLTasks, orderType } = useContext(AppContext);

    useEffect(() => {
        getTasks().then((data) => {
         if (data.length > 0) {
          setAlLTasks(data);
         } else {
          setAlLTasks('');
         }
        });
    }, [setAlLTasks])

    function removeTask(id) {
			remove(id).then((data) => {
				getTasks().then((data) => {
						setAlLTasks(data);
				});
			})
    }

    function compare(a, b) {
      if (a[orderType] < b[orderType]) {
        return -1;
      }
      if (a[orderType] > b[orderType]) {
        return 1;
      }
      return 0;
    }
    
    return (
      <>
        {allTasks.length > 0 ? (
            <Row xs={1} md={5} className="g-2">
            {allTasks.sort(compare).map((value, index) => (
              <Col key={index}>
                <Card bg={value.status} text='light'>
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.tasks}</Card.Text>
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
        ) : <Spinner animation="border" style={{margin: 'auto'}} />}
      </>
    );
  }

export default CardsTasks;