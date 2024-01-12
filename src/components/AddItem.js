import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const AddItem = ({onAdd}) => {
    const [show, setShow] = useState(false);
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = () => {
        const newItem = {
            itemName,
            description,
            price: parseFloat(price) || 0,
        };

        onAdd(newItem);
        handleClose();
    }

    return (
        <>
        <Button variant="success"  onClick={handleShow}>
            +
        </Button>
        
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>Adding Items</Modal.Header>
            <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
          <InputGroup className="mb-3">
            <InputGroup.Text>R</InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest rand)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit}>
                    Add Item
                </Button>
            </Modal.Footer>
        </Modal>

        </>
    )
}


export default AddItem;