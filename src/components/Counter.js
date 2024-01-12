import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCLick = () => {
        setCount(count + 1);
    }

    return(
        <div className="container">
            <Button onClick={handleCLick} variant="primary">
                Click me
            </Button>

            <h1>{count}</h1>
        </div>
    )
}

export default Counter;