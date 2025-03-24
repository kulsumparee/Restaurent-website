<script>
    import Button from "./common/Button.svelte";
    import Drawer from "./Drawer.svelte";
    import Wrapper from "./Wrapper.svelte";
    import { theme } from "$lib/themeStore.js";
    import { MoonSolid, SunSolid } from "flowbite-svelte-icons";
    import { cart } from "../store/themeStore";

    function toggleTheme() {
        theme.update((t) => (t === "light" ? "dark" : "light"));
    }
</script>

<Wrapper>
    <nav class=" flex justify-between py-2 px-10 items-center">
        <div>
            <h1 class="font-bold text-3xl font-mono flex gap-1 items-center">
                <span class="bg-[#39DB4A] text-white px-2 py-1 rounded-xl">
                    F
                </span><span class="">OODI</span>
            </h1>
        </div>

        <ul class=" md:flex lg:text-xl gap-12 font-semibold hidden">
            <li class=" hover:text-[#39DB4A]"><a href="/">Home</a></li>
            <li class=" hover:text-[#39DB4A]"><a href="/menu">Menu</a></li>
            <li class=" hover:text-[#39DB4A]"><a href="/services">Services</a></li>
            <li class=" hover:text-[#39DB4A]"><a href="/offers">Offers</a></li>
        </ul>

        <div class=" hidden md:flex gap-10 cursor-pointer">
            <img
                class=" bg-white rounded-full p-2"
                src="/images/nav/search.svg"
                alt="search"
            />
            <a href="/cart" class="bg-white rounded-full py-2 px-3 relative">
                <img class="" src="/images/nav/bag.svg" alt="bag"/>
                {#if $cart.length > 0}
                    <sup
                        class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 text-center">
                        {$cart.length}
                    </sup>
                {/if}
            </a>

            <a href="/form">
                <button
                    class=" bg-[#39DB4A] cursor-pointer flex px-4 rounded-full py-2 gap-3"
                >
                    <img
                        src="/images/nav/call.svg"
                        alt="call"
                        width="25"
                        height="25"
                    />
                    <p class=" text-xl font-semibold text-white">Contact</p>
                </button></a
            >
            {#if $theme === "light"}
                <button class="w-7 cursor-pointer" on:click={toggleTheme}>
                    <MoonSolid />
                </button>
            {:else}
                <button class="w-7 cursor-pointer" on:click={toggleTheme}>
                    <SunSolid />
                </button>
            {/if}

            <div class="md:hidden flex">
                <Drawer />
            </div>
        </div>
    </nav>
</Wrapper>
