import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AddItem from "./AddItem";
import './Components.css'

const Item = ({item, onDelete }) => {
    return(
        <>
        <Card className="card-description" >
            <Card.Title className="mt-3">{item.itemName}</Card.Title>
            <Card.Subtitle className="mt-3">R {item.price}</Card.Subtitle>
            <Card.Body>{item.description}</Card.Body>
            <Card.Footer>
                <Button variant="danger" className="mr-4" onClick={onDelete}>Delete</Button>
            </Card.Footer>
        </Card>
        
        </>
    )
}
export default Item;