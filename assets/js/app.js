const menuItems = [
    { id: 1, name: "Chicken Burger", desc: "Juicy grilled chicken with lettuce.", price: 199, img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800" },
    { id: 2, name: "Beef Burger", desc: "Classic beef patty with cheese.", price: 199, img: "https://images.unsplash.com/photo-1551782450-17144c3a8f53?q=80&w=800" },
    { id: 3, name: "Spicy Paneer Burger", desc: "Crispy paneer with spicy sauce.", price: 199, img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" }
];

const menuGrid = document.getElementById("menuGrid");
const cartCount = document.getElementById("cartCount");
let cart = [];

function renderMenu(items) {
    if (!menuGrid) return;
    menuGrid.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "bg-white rounded-2xl shadow p-4 flex flex-col";
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}" class="rounded-xl mb-4 h-40 w-full object-cover">
          <h3 class="text-lg font-semibold">${item.name}</h3>
          <p class="text-sm text-zinc-600">${item.desc}</p>
          <div class="mt-auto flex justify-between items-center pt-4">
            <span class="font-bold">$${item.price}</span>
            <button class="bg-red-600 text-white px-3 py-1 rounded-lg addCartBtn" data-id="${item.id}">Add</button>
          </div>
        `;
        menuGrid.appendChild(div);
    });

    document.querySelectorAll(".addCartBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            const existing = cart.find(x => x.id === id);
            if (existing) existing.qty += 1;
            else cart.push({ id, qty: 1 });
            updateCart();
        });
    });
}

function updateCart() {
    const total = cart.reduce((a, b) => a + b.qty, 0);
    cartCount.textContent = total;
}

// Search filter
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", e => {
        const q = e.target.value.toLowerCase();
        const filtered = menuItems.filter(m => m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q));
        renderMenu(filtered);
    });
}

// Mobile nav toggle
document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("hidden");
});

renderMenu(menuItems);


const fullMenu = document.getElementById("fullMenu");
menuItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "bg-white rounded-xl shadow p-4";
    div.innerHTML = `<img src="${item.img}" class="rounded-lg mb-2 h-40 w-full object-cover"><h2 class='font-semibold'>${item.name}</h2><p class='text-sm'>${item.desc}</p><p class='font-bold'>$${item.price}</p>`;
    fullMenu.appendChild(div);
});