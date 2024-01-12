import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Item from "./Items";
import './Components.css'

const Checkout = ({items}) =>{

    const total = items.reduce((acc, item) => acc + item.price, 0);

    return(
        <>
            <Card className="checkout-card">
                <Card.Title className="mt-2">R {total.toFixed(2)}</Card.Title>
                <Card.Subtitle className="mt-2">Total Items: {items.length}</Card.Subtitle>
                    <Button variant="success" className="mt-5" style={{width: "18rem"}}>
                        Checkout
                    </Button>
            </Card> 
        </>
    )
}

export default Checkout;