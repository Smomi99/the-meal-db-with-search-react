
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions}
                        </Card.Text>
                        <p>{idMeal}</p>
                        <Link to={`/meal/${idMeal}`}><Button variant="danger">Secondary</Button>{' '}</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default Meal;