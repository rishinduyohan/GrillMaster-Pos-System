// console.log("Link to Web");
const items = document.getElementById('menu-items');
const trendRecip = document.getElementById('trends');
const searchItems = document.getElementById('search-text');
const searchBtn = document.getElementById('search-btn');
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
        img: "assets/images/Classic Cheeseburger.jpg",
        price: "Rs.820"
    },
    {
        id: 4,
        name: "Veggie Delight",
        des: "Crispy veg patty with lettuce, tomato, cucumber & mint mayo",
        img: "assets/images/Chicken Crispy Burger.jpg",
        price: "Rs.650"
    },
    {
        id: 5,
        name: "Spicy Paneer Burger",
        des: "Paneer tikka patty with spicy peri-peri mayo & jalapeños",
        img: "assets/images/Double Beef Stack.jpg",
        price: "Rs.700"
    },
    {
        id: 6,
        name: "BBQ Bacon Burger",
        des: "Grilled beef, crispy bacon, smoked BBQ sauce & caramelised onions",
        img: "assets/images/Fish-Fillet-Burger.jpg",
        price: "Rs.950"
    },
    {
        id: 7,
        name: "Fish Fillet Burger",
        des: "Crispy fried fish fillet with tartar sauce & fresh lettuce",
        img: "assets/images/Mushroom Swiss Burger.jpg",
        price: "Rs.780"
    },
    {
        id: 8,
        name: "Double Decker",
        des: "Two patties, double cheese, lettuce & house special sauce",
        img: "assets/images/Spicy Jalapeño Burger.jpg",
        price: "Rs.1050"
    },
    {
        id: 9,
        name: "Classic Beef Burger",
        des: "Seasoned beef patty with tomato, lettuce, onions & mayo",
        img: "assets/images/Veggie Garden Burger.jpg",
        price: "Rs.720"
    },
    {
        id: 10,
        name: "Peri Peri Chicken",
        des: "Grilled chicken breast marinated in peri-peri sauce",
        img: "assets/images/Chicken Crispy Burger.jpg",
        price: "Rs.800"
    },
    {
        id: 11,
        name: "Mushroom Swiss Burger",
        des: "Grilled beef patty topped with mushrooms & Swiss cheese",
        img: "assets/images/BBQ Smokehouse Burger.jpg",
        price: "Rs.880"
    },
    {
        id: 12,
        name: "Tandoori Burger",
        des: "Indian-style chicken patty with tandoori spices & mint chutney",
        img: "assets/images/Classic Cheeseburger.jpg",
        price: "Rs.770"
    }
];

const drinkItems = [
    {
        id: 1,
        name: "Coca-Cola",
        des: "Classic fizzy cola drink served chilled.",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Coca-Cola_Glass_Bottle_Icon.png",
        price: "Rs.150"
    },
    {
        id: 2,
        name: "Pepsi",
        des: "Refreshing cola with a bold taste.",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Pepsi_logo_2014.svg",
        price: "Rs.140"
    },
    {
        id: 3,
        name: "Sprite",
        des: "Lemon-lime flavored soft drink.",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sprite_Logo.svg",
        price: "Rs.130"
    },
    {
        id: 4,
        name: "Fanta Orange",
        des: "Fruity orange sparkling drink.",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Fanta_logo.svg",
        price: "Rs.120"
    },
    {
        id: 5,
        name: "Mountain Dew",
        des: "Citrus-flavored energy soft drink.",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Mountain_Dew_logo.svg",
        price: "Rs.160"
    },
    {
        id: 6,
        name: "7UP",
        des: "Clear and refreshing lemon-lime drink.",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/7up_logo_2014.svg",
        price: "Rs.140"
    },
    {
        id: 7,
        name: "Iced Coffee",
        des: "Chilled coffee served with ice & milk.",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Coffee_cup_icon.svg",
        price: "Rs.200"
    },
    {
        id: 8,
        name: "Cold Brew",
        des: "Smooth, slow-brewed cold coffee.",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Coffee_cup_icon_2.svg",
        price: "Rs.250"
    },
    {
        id: 9,
        name: "Lemon Iced Tea",
        des: "Refreshing iced tea with lemon twist.",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Glass_of_Iced_Tea.png",
        price: "Rs.180"
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
                <a href="#" class="bg-yellow-500 text-black px-6 py-2 rounded-md font-bold">Add to Cart</a>
                </div>
            </div>
        `;
            items.appendChild(div);
        });
    }
}

itemContainer(menuItems);

//Search Items
searchItems.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        let value = searchItems.value;
        if(value == "drinks"){
            itemContainer(drinkItems);
        }
        searchItems.value = "";
    }
});