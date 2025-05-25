alert('Hellow, TEJ!');

//tea and coffee are passed as an arguments in the function in updateQuantity.
const quantities = {
    tea : 0,    //key value pairs
    samosa : 0
};

//creating function for updating quantity while clicking "+" button and "-" button
const updateQuantity = (item, change) =>{            // item will take either tea or coffee which is passed during calling and they are also the keys in class quantities.
    quantities[item] = Math.max (0, quantities[item]+change);       // This makes sure that the item do not gets less than 0.
    document.getElementById(`${item}-Qnt`).textContent = quantities[item]; // here we are using DOM concept and also .textContext let us set text inside html without html tag
    updateItemTotal(item);  //calls the updateItemTotal function.
}  


// function that calculate the individual total amount.
const updateItemTotal = (item) =>{   //new way of defining function.
    const price = document.getElementById(`${item}-price`).value || 0;  //make sure the element value is price if not default is zero.
    const total = price * quantities[item]; // calling object of a class by bracket notation.
    document.getElementById(`${item}-Total`).textContent = total; // display total in the page as text content.
}

// function for calculating grand total of all item including vat and tips.
const calculateTotal=()=>{
    const samosaPrice = document.getElementById('samosa-price').value || 0;
    const teaPrice = document.getElementById('tea-price').value || 0;

    const samosaTotal = samosaPrice * quantities.samosa; // calling function with dot notation.
    const teaTotal = teaPrice * quantities.tea;

    const total = samosaTotal + teaTotal;
    const vat = 0.13 * total;
    const tip = 0.1 * total;

    const grandTotal = total + vat + tip;

    document.getElementById('total-price').textContent = total; //displaying total price 
    document.getElementById('vat').textContent = vat;  // displaying tax amount.
    document.getElementById('tip').textContent = tip;  // dispalying tip amount.
    document.getElementById('grand-total').textContent = grandTotal;        // displaying grand total.
}