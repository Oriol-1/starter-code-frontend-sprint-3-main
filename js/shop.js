


let cartList = [];
// Array de productos en el carrito


let cart = [];

// Variable que almacena el precio total de los productos en el carrito


let total = 0;

const container = document.getElementById("cart_list");


// Exercise 1
// añadir productos a la array
function buy(id) {
    // Busca un objeto en el array `products` cuyo atributo `id` sea igual al valor del parámetro `id` y lo asigna a la variable `productos`
    const productos = products.find((recorre) => recorre.id == id);
    // .find  función que se ejecuta con cada elemento del Array hasta que alguno de los elementos es encontrado
  
    // Añade el objeto encontrado al final del array `cartList`
    cartList.push(productos);
    // .push metodo permite agregar uno o mas elementos al final de una array
  
    // Imprime el valor de `productos` en la consola
    // console.log(productos);

    generateCart();
  
 
    printCart();
  }

// Exercise 2
function cleanCart() {
    // Borra el contenido del array `cartList`
    cartList = [];
    
    // Asigna el valor de `cartList` a la variable `cart`
    cart = cartList;
    
    // Llama a la función `printCart`
    printCart();
    
    // Establece el contenido del elemento con id "total_price" a 0
    document.getElementById("total_price").innerHTML = 0;
    
    // Establece el contenido del elemento con id "count_product" a 0
    document.getElementById("count_product").innerHTML = 0;
    
    // Imprime el valor de `cartList` en la consola
    // console.log(cartList);
  }

// Exercise 3
function calculateTotal() {
    // Calcula el precio total del carrito usando el array "cartList"
    total = cartList.reduce((acc, recorre) => acc + recorre.price, 0);

 
    // console.log(total);

    // Establece el contenido del elemento con id "total_price" al valor de "total"
    document.getElementById("total_price").innerHTML = total;

    // Establece el contenido del elemento con id "count_product" al número de elementos en el array "cartList"
    document.getElementById("count_product").innerHTML = cartList.length;


    applyPromotionsCart();
  
}


// Exercise 4
function generateCart() {
    // Usando el array "cartList" que contiene todos los elementos en el carrito de compras,
    // Genera el array "cart" que no contiene elementos repetidos. En su lugar, cada elemento de este array "cart" muestra la cantidad de productos.
    const productsAux = {};
    
    // recorre el array `cartList` con un bucle for
    for (let i = 0; i < cartList.length; i++) {
      // Si el producto actual está en el objeto "productsAux", incrementa su cantidad
      if (productsAux[cartList[i].id]) {
        productsAux[cartList[i].id].quantity++;
      } 
      // Si el producto actual no está en el objeto "productsAux", lo añade y establece su cantidad a 1
      else {
        productsAux[cartList[i].id] = cartList[i];
        productsAux[cartList[i].id].quantity = 1;
      }
    }
    
    // Asigna los valores del objeto "productsAux" al array "cart"
    cart = Object.values(productsAux);
  

    // console.log(cart);
    
 
    calculateTotal();
    
 
  
  }
  

// Exercise 5
function applyPromotionsCart() {
    // recorre el array "cart" con un bucle for
    for (let i = 0; i < cart.length; i++) {
      // Si el nombre del producto actual es "cooking oil" y su cantidad es mayor o igual a 3, establece su precio a 10
      if (cart[i].name === "cooking oil" && cart[i].quantity >= 3) {
        cart[i].price = 10;
        console.log("Importe unitario " + cart[i].price);
      } 
      // Si el nombre del producto actual es "Instant cupcake mixture" y su cantidad es mayor o igual a 10, establece su precio como el precio original multiplicado por la cantidad multiplicado por el 2/3
      else if (
        cart[i].name === "Instant cupcake mixture" &&
        cart[i].quantity >= 10
      ) {
        cart[i].price = cart[i].price * cart[i].quantity * (2 / 3);
        console.log("Importe total: " + cart[i].price.toFixed(2));
      }
       // el objeto del carrito tenga la propiedad subtotalWithDiscount
      else {
        cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        console.log("Importe total: " + cart[i].subtotalWithDiscount);
      }

    }
    
  }

  function printCart() {
    // Inicializa variables para el precio total y la cantidad total de productos
    let suma = 0;
    let cantidad = 0;
  
    // Limpia el contenido del elemento HTML con el ID "container"
    container.innerHTML = "";
  
    // Recorre el array "cart"
    cart.forEach((productos) => {
      console.log(productos); // Muestra la información de cada producto en la consola
  
      // Crea una fila de tabla HTML para el producto
      const tablaTr = document.createElement("tr");
      tablaTr.className = "productoCarro";
      tablaTr.innerHTML = `
            <td>${productos.name}</td>
            <td>${productos.price}</td>
            <td>${productos.quantity}</td>
            <td>${productos.price * productos.quantity}</td>
  
            <td>
              <button class='btn btn-danger' onclick=removeFromCart(${productos.id})>
              <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </td>
            
          `;
        container.appendChild(tablaTr); // Agrega la fila a la tabla
  
        // Actualiza el precio total y la cantidad total de productos
        suma += productos.price * productos.quantity;
        cantidad += productos.quantity;
    });
  
    // Muestra el precio total y la cantidad total de productos en la página web
    document.getElementById("total_price").innerHTML = suma.toFixed(2);
    document.getElementById("total_productos").innerHTML = cantidad;
  
    // Muestra el número de productos en el carrito en la página web
    document.getElementById("count_product").innerHTML = cart.length;
  
    // Llama a la función "applyPromotionsCart"
    applyPromotionsCart();
  }

  
// ** Nivell II **
function addToCart(id) {
    const productos = products.find((recorre) => recorre.id == id);
    const productsAux = {}; // este es un objeto, dentro hay productos
    for (let i = 0; i < cart.length; i++) {
      //*console.log(cartList[i].name) //obtengo el id del array de objetos carList
      // Si el producto está en el carrito, solo se aumenta la cantidad
      if (productsAux[cart[i].name]) {
        productsAux[cart[i].name].quantity++;
      } else {
        productsAux[cart[i].name] = cart[i];
        productsAux[cart[i].name].quantity = 1;
       
      }
    }
    cart = Object.values(productsAux);
     //  recojo los values del objeto y los almaceno en el array cart[]
    cart.push(productos);
    // console.log(cart);
    calculateTotal();
    printCart();
  }
  
  // Exercise 9
  function removeFromCart(id) {
    cart = cart.filter((produc) => produc.id !== id);
    printCart();
  }
  
  function open_modal() {
    console.log("Open Modal");
  }
  
  
  
  