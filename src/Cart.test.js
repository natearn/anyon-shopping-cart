import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';

const dummyData = {
    title: "A Title",
    products: [1,2,3,4].map(id => ({
        id: id,
        name: "Product " + id,
        comment: "This is a product comment that is long enough to exceed the size of its container.",
        price: 12.50,
        tax: 0.11,
    })),
    add: () => console.log("ADD"),
    remove: ({name}) => console.log("REMOVE " + name),
    clear: () => console.log("CLEAR"),
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart {...dummyData} />, div);
});
