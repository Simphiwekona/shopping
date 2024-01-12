import { useState } from 'react';
import './App.css';
import Checkout from './components/Checkout';
import AddItem from './components/AddItem';
import Item from './components/Items';

const App = () => {
    const [items, setItems] = useState([]);
  
    const addItem = (item) => {
      setItems([...items, item]);
    };
  
    const removeItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
    return (
      <div className='container p-5 my-5 row' style={{margin:"auto"}}>
        <h1 className='mb-5'>Shopping Cart</h1>
        <div className='mb-5'>
        <AddItem onAdd={addItem} />
        </div>
        {items.map((item, index) => (
          <Item key={index} item={item} onDelete={() => removeItem(index)} />
        ))}

        <Checkout items={items} />
      </div>
    );
  };

export default App;