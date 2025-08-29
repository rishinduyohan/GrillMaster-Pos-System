// console.log("Link to Web");
const items = document.getElementById('menu-items');
const trendRecip = document.getElementById('trends');
const searchItems = document.getElementById('search-text');
const searchBtn = document.getElementById('search-btn');
const itemTable = document.getElementById('item-table');
let cart = [];

const menuItems = [
    {
        id: 0,
        name: "Monster Burger",
        des: "Triple patty burger with bacon, cheese, fried egg & house sauce",
        img: "assets/images/Bacon Lover’s Burger.jpg",
        price: "Rs.750"
    },
    {
        id: 1,
        name: "Beef Supreme",
        des: "Juicy grilled beef patty with cheddar cheese, onion rings & BBQ sauce",
        img: "assets/images/BBQ Smokehouse Burger.jpg",
        price: "Rs.890"
    },
    {
        id: 2,
        name: "Cheese Overload",
        des: "Loaded with mozzarella, cheddar & creamy cheese sauce",
        img: "assets/images/Classic Cheeseburger.jpg",
        price: "Rs.820"
    },
    {
        id: 3,
        name: "Veggie Delight",
        des: "Crispy veg patty with lettuce, tomato, cucumber & mint mayo",
        img: "assets/images/Chicken Crispy Burger.jpg",
        price: "Rs.650"
    },
    {
        id: 4,
        name: "Spicy Paneer Burger",
        des: "Paneer tikka patty with spicy peri-peri mayo & jalapeños",
        img: "assets/images/Double Beef Stack.jpg",
        price: "Rs.700"
    },
    {
        id: 5,
        name: "BBQ Bacon Burger",
        des: "Grilled beef, crispy bacon, smoked BBQ sauce & caramelised onions",
        img: "assets/images/Fish-Fillet-Burger.jpg",
        price: "Rs.950"
    },
    {
        id: 6,
        name: "Fish Fillet Burger",
        des: "Crispy fried fish fillet with tartar sauce & fresh lettuce",
        img: "assets/images/Mushroom Swiss Burger.jpg",
        price: "Rs.780"
    },
    {
        id: 7,
        name: "Double Decker",
        des: "Two patties, double cheese, lettuce & house special sauce",
        img: "assets/images/Spicy Jalapeño Burger.jpg",
        price: "Rs.1050"
    },
    {
        id: 8,
        name: "Classic Beef Burger",
        des: "Seasoned beef patty with tomato, lettuce, onions & mayo",
        img: "assets/images/Veggie Garden Burger.jpg",
        price: "Rs.720"
    },
    {
        id: 9,
        name: "Peri Peri Chicken",
        des: "Grilled chicken breast marinated in peri-peri sauce",
        img: "assets/images/Chicken Crispy Burger.jpg",
        price: "Rs.800"
    },
    {
        id: 10,
        name: "Mushroom Swiss Burger",
        des: "Grilled beef patty topped with mushrooms & Swiss cheese",
        img: "assets/images/BBQ Smokehouse Burger.jpg",
        price: "Rs.880"
    },
    {
        id: 11,
        name: "Tandoori Burger",
        des: "Indian-style chicken patty with tandoori spices & mint chutney",
        img: "assets/images/Classic Cheeseburger.jpg",
        price: "Rs.770"
    },
    {
        id: 12,
        name: "Coca-Cola",
        des: "Classic fizzy cola drink served chilled.",
        img: "assets/images/Classic Cola.jpg",
        price: "Rs.150"
    },
    {
        id: 13,
        name: "Iced Coffee",
        des: "Refreshing cola with a bold taste.",
        img: "assets/images/Chocolate Milkshake.jpg",
        price: "Rs.140"
    },
    {
        id: 14,
        name: "Sprite",
        des: "Lemon-lime flavored soft drink.",
        img: "assets/images/Berry Blast.jpg",
        price: "Rs.130"
    },
    {
        id: 15,
        name: "Fanta Orange",
        des: "Fruity orange sparkling drink.",
        img: "assets/images/Icy Lemonade.jpg",
        price: "Rs.120"
    },
    {
        id: 16,
        name: "Mountain Dew",
        des: "Citrus-flavored energy soft drink.",
        img: "assets/images/Mint Mojito.jpg",
        price: "Rs.160"
    },
    {
        id: 17,
        name: "7UP",
        des: "Clear and refreshing lemon-lime drink.",
        img: "assets/images/Tropical Mango Shake.jpg",
        price: "Rs.140"
    }
];
if (trendRecip) {
    for (let i = 0; i < 3; i++) {
        let item = menuItems[i];
        const div = document.createElement('div');
        div.setAttribute("data-aos", "zoom-in");
        div.innerHTML = `
        <div class=" p-6 rounded-xl" >
            <img src="${item.img}" class="w-full h-60 object-cover rounded-lg mb-4" data-aos="zoom-in">
            <h3 class="font-bold">${item.name}</h3>
            <p class="text-sm text-gray-400">${item.des}</p>
            <p class="text-yellow-400 font-bold">${item.price}</p>
            <div class="mt-4">
            <a href="#" class="mt-3 bg-yellow-500 px-4 py-1 rounded-full text-black font-bold">Order</a>
            </div>
        </div>
        `;
        trendRecip.appendChild(div);
    }
}
let itemContainer = (array) => {
    if (items) {
        array.forEach(item => {
            const div = document.createElement('div');
            div.className = "flex items-center bg-gray-900 rounded-xl p-4 gap-4";
            div.setAttribute("data-aos", "zoom-in");
            div.innerHTML = `
            <img src="${item.img}" class="w-28 h-28 object-cover rounded-lg" alt="burger">
            <div>
                <h3 class="font-bold text-lg">${item.name}</h3>
                <p class="text-sm text-gray-400">${item.des}</p>
                <p class="text-yellow-400 font-bold mt-2">${item.price}</p>
                <div class="mt-6">
                <button type="button" class="bg-yellow-500 text-black px-6 py-2 rounded-md font-bold">Add to cart</button>
                </div>
            </div>
        `;
            div.addEventListener("click", () => addToCart(item.id));
            items.appendChild(div);
        });
    }
}

itemContainer(menuItems);

addToCart = (id) => {
    let obj = menuItems[id];
    console.log(obj);
    const found = cart.find(cartItem => cartItem.id === id);
    if (found) {
      found.qty += 1;
    } else {
      cart.push({ ...obj, qty: 1 });
    }
    localStorage.setItem("mealId", id);
    addItemsCart();
}

addItemsCart=()=>{
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += parseInt(item.price.replace("Rs.", "").trim()) * item.qty;
        cartList.innerHTML += `
       <li class="flex py-6">
        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src="${item.img}"
            alt="${item.name}"
            class="size-full object-cover" />
        </div>

        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">${item.name}</a>
              </h3>
              <p class="ml-4">${item.price}</p>
            </div>
            <p class="mt-1 text-sm text-gray-500">${item.des}</p>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm">
            <button onclick="decreaseQty(this)"
                class="border rounded-md py-1 px-3  mt-4">-</button>
            <p class="text-gray-500 qty">Qty : ${item.qty}</p>

            <button onclick="increaseQty(this)" 
                class="border rounded-md  py-1 px-3 mt-4">+</button>
                <div class="flex">
              <button type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
          </div>
        </div>
        </li>
      `;
    });
    cartTotal.textContent = "Total: Rs. " + total;
}
increaseQty=(btn)=> {
    let container = btn.closest("div"); 
    let qtyEl = container.querySelector(".qty");
    let qty = parseInt(qtyEl.innerText.replace(/[^0-9]/g, ""));
    qty = qty + 1;
    qtyEl.innerText = "Qty : " + qty;
    console.log(qty);
}

// function renderCart() {
//     const cartList = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");

//     cartList.innerHTML = "";
//     let total = 0;

//     cart.forEach(item => {
//         total += parseInt(item.price.replace("Rs.", "").trim()) * item.qty;

//         cartList.innerHTML += `
//        <td class="py-4">
//             <div class="flex items-center">
//                 <img class="h-16 w-16 mr-4" src="${item.img}" alt="Product image">
//                 <span class="font-semibold">${item.name}</span>
//             </div>
//         </td>
//         <td class="py-4">${item.price}</td>
//         <td class="py-4">
//            <div class="flex items-center">
//                <button onclick="decreaseQty(this)"
//                    class="border rounded-md py-2 px-4 mr-2">-</button>
//                <span class="qty text-center w-8">1</span>
//                <button onclick="increaseQty(this)"
//                    class="border rounded-md py-2 px-4 ml-2">+</button>
//            </div>
//         </td>
//       `;
//     });

//     cartTotal.textContent = "Total: Rs. " + total;
// }

//Search Items
// searchItems.addEventListener("keypress", e => {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         let value = searchItems.value;
//         searchItems.value = "";
//     }
// });

// function updateCart() {
//     let subtotal = 0;

//     // Loop through each row
//     document.querySelectorAll("tbody tr").forEach(row => {
//         const priceText = row.querySelector("td:nth-child(2)").innerText.replace("$", "");
//         const price = parseFloat(priceText);

//         const qtyEl = row.querySelector(".qty");
//         const qty = parseInt(qtyEl.innerText);

//         const total = price * qty;
//         row.querySelector(".row-total").innerText = "$" + total.toFixed(2);

//         subtotal += total;
//     });

//     // Update summary
//     document.querySelector("#subtotal").innerText = "$" + subtotal.toFixed(2);
//     const taxes = subtotal * 0.1;
//     document.querySelector("#taxes").innerText = "$" + taxes.toFixed(2);
//     const shipping = subtotal > 0 ? 50 : 0;
//     document.querySelector("#shipping").innerText = "$" + shipping.toFixed(2);

//     const grandTotal = subtotal + taxes + shipping;
//     document.querySelector("#grand-total").innerText = "$" + grandTotal.toFixed(2);
// }

// // Increase quantity
// function increaseQty(btn) {
//     const qtyEl = btn.parentElement.querySelector(".qty");
//     qtyEl.innerText = parseInt(qtyEl.innerText) + 1;
//     updateCart();
// }

// // Decrease quantity
// function decreaseQty(btn) {
//     const qtyEl = btn.parentElement.querySelector(".qty");
//     let current = parseInt(qtyEl.innerText);
//     if (current > 1) {
//         qtyEl.innerText = current - 1;
//         updateCart();
//     }
// }

// // Init
// document.addEventListener("DOMContentLoaded", () => {
//     updateCart();
// });