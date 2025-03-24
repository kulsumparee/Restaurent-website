import { writable } from "svelte/store";
import { browser } from "$app/environment";

function loadCart() {
    if (browser) {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
}

// Initialize the cart store with data from localstorage
export const cart = writable(loadCart());

if (browser) {
    cart.subscribe((value) => {
        localStorage.setItem('cart', JSON.stringify(value));
    });
}

export const theme = writable(browser ? localStorage.getItem("theme") || "light" : "light");

if (browser) {
    theme.subscribe((value) => {
        localStorage.setItem("theme", value);
        document.documentElement.setAttribute("data-theme", value);
    });
}