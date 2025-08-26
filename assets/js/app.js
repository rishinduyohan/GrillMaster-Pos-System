AOS.init();
const navbarItem = document.getElementById("navbar");
const footerItem = document.getElementById("footer");

const responseNav = () => {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    btn?.addEventListener('click', () => menu.classList.toggle('hidden'));
}

if (navbarItem) {
    const navbar = document.createElement("div");
    navbar.innerHTML = `
        <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-center justify-between h-16">
                   <a href="index.html" class="font-black tracking-tight text-xl">
                        <span class="text-red-600">Grill</span>Master
                    </a>
                    <nav class="hidden md:flex items-center gap-8">
                        <a href="index.html#home" class="hover:text-orange">Home</a>
                        <a href="index.html#recipes" class="hover:text-orange">Service</a>
                        <a href="index.html#community" class="hover:text-orange">Menu</a>
                        <a href="index.html#about" class="hover:text-orange">Shop</a>
                    </nav>
                    <div class="hidden md:flex items-center gap-3">
                    <div class="flex items-center gap-4">
                    <button id="cartBtn" class="relative">
                        🛒<span id="cartCount" class="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">0</span>
                    </button>
                        <input id="searchInput" type="text" placeholder="Search..." class="hidden sm:block border rounded-lg px-2 py-1 text-sm">
                    </div>
                        <a href="#"
                            class="px-3 py-1.5 rounded-lg border border-accent/20 hover:border-accent transition">Log
                            In</a>
                        <a href="index.html#recipes" class="flex-1 text-center px-3 py-2 rounded-lg bg-accent text-white">Sign Up</a>
                    </div>
                    <button id="menuBtn"
                        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-secondary/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="mobileMenu" class="sticky md:hidden hidden border-t border-black/5 bg-gray text-center">
                <div class="px-4 py-3 space-y-2">
                    <a href="index.html#home" class="block py-2">Home</a>
                    <a href="index.html#recipes" class="block py-2">Service</a>
                    <a href="index.html#community" class="block py-2">Menu</a>
                    <a href="index.html#about" class="block py-2">Shop</a>
                    <a href="cart.html" class="block py-2">Cart 🛒 </a>
                    <div class="pt-2 border-t border-black/5 flex gap-2">
                        <a href="#" class="flex-1 text-center px-3 py-2 rounded-lg border border-accent/20">Log In</a>
                        <a href="index.html#recipes" class="flex-1 text-center px-3 py-2 rounded-lg bg-accent text-white">Sign In</a>
                    </div>
                </div>
            </div>
   `;
    navbarItem.appendChild(navbar);
    responseNav();
}
if(footerItem){
    const footer = document.createElement("div");
    footer.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="font-display text-xl font-bold text-green">Chop-shock</span>
                    </div>
                    <p class="mt-3 text-sm text-secondary/70 max-w-xs">Cooking made fun and easy. Discover, create, and
                        share delightful recipes with a vibrant community.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Menu</h4>
                    <ul class="mt-3 space-y-2 text-sm">
                        <li><a href="index.html#home" class="hover:text-accent">Home</a></li>
                        <li><a href="index.html#recipes" class="hover:text-accent">Recipe</a></li>
                        <li><a href="index.html#community" class="hover:text-accent">Community</a></li>
                        <li><a href="index.html#about" class="hover:text-accent">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Categories</h4>
                    <ul class="mt-3 space-y-2 text-sm">
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Dessert</li>
                        <li>Drink</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Social</h4>
                    <ul class="mt-3 space-y-2 text-sm">
                        <li><a href="#" class="hover:text-accent">Instagram</a></li>
                        <li><a href="#" class="hover:text-accent">Twitter</a></li>
                        <li><a href="#" class="hover:text-accent">YouTube</a></li>
                        <li><a href="#" class="hover:text-accent">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div class="px-4 py-6 border-t border-black/5 text-center text-sm text-secondary/60">© <span
                    id="year"></span> Chop-shock 2025. All rights reserved by Rishindu Yohan.</div>
    `;
    footerItem.appendChild(footer);
}