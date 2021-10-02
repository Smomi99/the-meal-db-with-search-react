
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealId])
    return (

        <Container className="mt-5 ">
            <Card >
                <Card.Img className="mx-auto " style={{ width: '28rem', }} variant="top" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <Card.Text>
                        {meal.strInstructions}
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container >
    );
};

export default MealDetails;