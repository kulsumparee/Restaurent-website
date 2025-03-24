import { writable } from "svelte/store";


const getInitialTheme = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "light";
    }
    return "light"; 
};

export const theme = writable(getInitialTheme());

if (typeof window !== "undefined") {
    theme.subscribe((value) => {
        localStorage.setItem("theme", value); 
        document.documentElement.setAttribute("data-theme", value);
    });
}
