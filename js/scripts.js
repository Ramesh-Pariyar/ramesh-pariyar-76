alert('Hellow, TEJ!');

//tea and coffee are passed as an arguments in the function in updateQuantity.
const quantities = {
    tea : 0,    //key value pairs
    samosa : 0
};

//creating function for updating quantity while clicking "+" button and "-" button
const updateQuantity = (item, change) =>{            // item will take either tea or coffee which is passed during calling and they are also the keys in class quantities.
    quantities[item] = Math.max (0, quantities[item]+change);       // This makes sure that the item do not gets less than 0.
    document.getElementById(`${item}-Qnt`).textContent = quantities[item];
}       