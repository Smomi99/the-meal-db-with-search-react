import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Meal from '../meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }

    return (

        <Container>
            <div className="input-group d-flex justify-content-center mt-4 mb-4">
                <div className="form-outline">
                    <input onChange={handleSearchField} placeholder="Search meals here" type="search" id="form1" className="form-control" />

                </div> <br /><br />

            </div>

            <Row xs={1} md={3} className="g-4  " >
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }


            </Row>

        </Container>
    );
};

export default Restaurant;
