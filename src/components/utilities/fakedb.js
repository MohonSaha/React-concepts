// Use local storage to manage data: 
import Swal from 'sweetalert2'

const addToDb = (id) => {
    let shoppingCart = {};

    //get the shopping cart from local storage:
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }


    // Set the shopping cart in Local storage:
    const quantity = shoppingCart[id];
    if (quantity) {
        console.log('This will work when the product is already exist');
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        console.log('This will work when the product is not added yet');
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    // Check that is there any object named shopping-cart?
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        console.log({ shoppingCart });
        if (id in shoppingCart) {
            console.log({ id });
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Its not added yet!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Its not added yet!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}


const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}



export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
};




/*

How to set new properties in object:

const id = '1122';
const obj = {};
obj[id] = 9;
console.log(obj);    Result: {1122: 9}

How to properties value from object:

console.log(obj[id]);     Result: 9

*/