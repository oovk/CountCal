import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
 
import { Button, Card, Row, Col } from "react-bootstrap";

const Entry = ({ entryData, setChangeIngredient, deleteSingleEntry, setChangeEntry }) => {
    return (
        <Card>
            <Row>
                <Col>Dish:{ entryData !== undefined && entryData.dish}</Col>
                <Col>ingredients:{ entryData !== undefined && entryData.ingredients }</Col>
                <Col>Calories:{ entryData !== undefined && entryData.calories }</Col>
                <Col>Fat:{ entryData !== undefined && entryData.fat}</Col>
                <Col><Button onClick={() => deleteSingleEntry(entryData._id)}>delete entry</Button></Col>
                <Col><Button onClick={()=> changeIngredient()}>change ingredients</Button></Col>                
                <Col><Button onClick={()=> changeEntry()}>change entry</Button></Col>

            </Row>
        </Card>
    )
    
    //Actual functions for calling the apis exist in entries.components file
    function changeIngredient() {
        setChangeIngredient({
            "change": true,
            "id":entryData._id    
        })
    }

    function changeEntry() {
        setChangeEntry({
            "change": true,
            "id":entryData._id 
        })
    }

}