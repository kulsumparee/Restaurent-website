<script>
    import Wrapper from "./Wrapper.svelte";
    import {
        FacebookSolid,
        FaceExplodeOutline,
        InstagramSolid,
        TwitterSolid,
        YoutubeSolid,
    } from "flowbite-svelte-icons";
</script>

<Wrapper>
    <div
        class="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-20 "
    >
        <!-- Logo and Description -->
        <div class="text-center sm:text-left">
            <h1
                class="font-bold text-3xl font-mono flex gap-1 items-center justify-center sm:justify-start"
            >
                <span class="bg-[#39DB4A] text-white px-2 py-1 rounded-xl"
                    >F</span
                >
                <span>OODI</span>
            </h1>
            <p class="py-8 text-gray-600 text-lg w-52">
                Savor the artistry where every dish is a culinary masterpiece
            </p>
        </div>

        <!-- Useful Links -->
        <div class="text-center sm:text-left">
            <h1 class="font-medium text-lg pb-2">Useful links</h1>
            <ul>
                <li class="text-lg text-gray-500">About us</li>
                <li class="text-lg text-gray-500">Events</li>
                <li class="text-lg text-gray-500">Blogs</li>
                <li class="text-lg text-gray-500">FAQ</li>
            </ul>
        </div>

        <!-- Main Menu -->
        <div class="text-center sm:text-left">
            <h1 class="font-medium text-lg pb-2">Main Menu</h1>
            <ul>
                <li class="text-lg text-gray-500">Home</li>
                <li class="text-lg text-gray-500">Offers</li>
                <li class="text-lg text-gray-500">Menus</li>
                <li class="text-lg text-gray-500">Reservation</li>
            </ul>
        </div>

        <!-- Contact Us -->
        <div class="text-center sm:text-left">
            <h1 class="font-medium text-lg pb-2">Contact Us</h1>
            <ul>
                <li class="text-lg text-gray-500">example@email.com</li>
                <li class="text-lg text-gray-500">+64 958 248 966</li>
                <li class="text-lg text-gray-500">Social Media</li>
            </ul>
        </div>
    </div>

    <!-- Spacer -->
    <div class="py-10  md:pt-20 flex flex-col  md:flex-row px-20 text-center items-center font-medium ">
        <div class="flex gap-3">
            <div
                class="bg-[#EDFFEF] hover:bg-[#39DB4A] hover:text-white text-black flex justify-center items-center cursor-pointer w-10 h-10 rounded-full"
            >
                <FacebookSolid />
            </div>
            <div
                class="bg-[#EDFFEF] hover:bg-[#39DB4A] hover:text-white text-black flex justify-center items-center cursor-pointer w-10 h-10 rounded-full"
            >
                <InstagramSolid />
            </div>
            <div
                class="bg-[#EDFFEF] hover:bg-[#39DB4A] hover:text-white text-black flex justify-center items-center cursor-pointer w-10 h-10 rounded-full"
            >
                <TwitterSolid />
            </div>
            <div
                class="bg-[#EDFFEF] hover:bg-[#39DB4A] hover:text-white text-black flex justify-center items-center cursor-pointer w-10 h-10 rounded-full"
            >
                <YoutubeSolid />
            </div>
        </div>
        <div class=" flex md:pl-40 pt-10 md:pt-0 tracking-widest ">
            <h1>Copyright 2023 Dscode | All rights reserved</h1>
        </div>
    </div>
</Wrapper>

<style>
    li {
        list-style-type: none;
        margin-bottom: 10px;
    }
</style>
