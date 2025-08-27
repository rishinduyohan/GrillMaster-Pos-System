console.log("Link to Web");
const items = document.getElementById('menu-items');

const menuItems = [
  {
    id: 1,
    name: "Monster Burger",
    des: "Triple patty burger with bacon, cheese, fried egg & house sauce",
    img: "assets/images/Bacon Lover’s Burger.jpg",
    price: "Rs.750"
  },
  {
    id: 2,
    name: "Beef Supreme",
    des: "Juicy grilled beef patty with cheddar cheese, onion rings & BBQ sauce",
    img: "assets/images/BBQ Smokehouse Burger.jpg",
    price: "Rs.890"
  },
  {
    id: 3,
    name: "Cheese Overload",
    des: "Loaded with mozzarella, cheddar & creamy cheese sauce",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.820"
  },
  {
    id: 4,
    name: "Veggie Delight",
    des: "Crispy veg patty with lettuce, tomato, cucumber & mint mayo",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.650"
  },
  {
    id: 5,
    name: "Spicy Paneer Burger",
    des: "Paneer tikka patty with spicy peri-peri mayo & jalapeños",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.700"
  },
  {
    id: 6,
    name: "BBQ Bacon Burger",
    des: "Grilled beef, crispy bacon, smoked BBQ sauce & caramelised onions",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.950"
  },
  {
    id: 7,
    name: "Fish Fillet Burger",
    des: "Crispy fried fish fillet with tartar sauce & fresh lettuce",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.780"
  },
  {
    id: 8,
    name: "Double Decker",
    des: "Two patties, double cheese, lettuce & house special sauce",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.1050"
  },
  {
    id: 9,
    name: "Classic Beef Burger",
    des: "Seasoned beef patty with tomato, lettuce, onions & mayo",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.720"
  },
  {
    id: 10,
    name: "Peri Peri Chicken",
    des: "Grilled chicken breast marinated in peri-peri sauce",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.800"
  },
  {
    id: 11,
    name: "Mushroom Swiss Burger",
    des: "Grilled beef patty topped with mushrooms & Swiss cheese",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.880"
  },
  {
    id: 12,
    name: "Tandoori Burger",
    des: "Indian-style chicken patty with tandoori spices & mint chutney",
    img: "https://freesvg.org/storage/img/burger-vector-illustration.png",
    price: "Rs.770"
  }
];

if(items){
    menuItems.forEach(item => {
        const div = document.createElement('div');
        div.className = "flex items-center bg-gray-900 rounded-xl p-4 gap-4";
        div.innerHTML=`
            <img src="${item.img}" class="w-28 h-28 object-cover rounded-lg" alt="burger">
            <div>
                <h3 class="font-bold text-lg">${item.name}</h3>
                <p class="text-sm text-gray-400">${item.des}</p>
                <p class="text-yellow-400 font-bold mt-2">${item.price}</p>
                <button class="bg-yellow-500 text-black px-6 py-2 rounded-md font-bold mt-6">Add to Cart</button>
            </div>
        `;
        items.appendChild(div);
    });
}