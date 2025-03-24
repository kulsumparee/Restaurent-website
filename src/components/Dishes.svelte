<script>
    import { Heart, Rating, Toast } from "flowbite-svelte";
    import Wrapper from "./Wrapper.svelte";
    import { cart } from "../store/themeStore";
    import { CheckCircleSolid } from "flowbite-svelte-icons";

    let currentIndex = 0;
    const cardsPerView = 3;

    let menuItems = [
        {
            id: 1,
            img: "/images/carocel/salad1.svg",
            title: "Fattoush salad",
            description:
                "A refreshing Middle Eastern salad made with crispy pita bread, fresh vegetables, and a tangy sumac dressing.",
            price: "24.00",
            rating: 4.9,
        },
        {
            id: 2,
            img: "/images/carocel/salad2.svg",
            title: "Vegetable salad",
            description:
                "A healthy mix of seasonal vegetables, tossed in a light vinaigrette and topped with herbs.",
            price: "26.00",
            rating: 4.6,
        },
        {
            id: 3,
            img: "/images/carocel/salad3.svg",
            title: "Egg vegi salad",
            description:
                "A protein-packed salad featuring boiled eggs, fresh greens, and a creamy dressing.",
            price: "23.00",
            rating: 4.5,
        },
        {
            id: 4,
            img: "/images/carocel/platter.webp",
            title: "Sushi Platter",
            description:
                "A delightful assortment of sushi rolls, including tuna, salmon, and avocado, served with soy sauce and wasabi.",
            price: "24.00",
            rating: 4.9,
        },
        {
            id: 5,
            img: "/images/carocel/pizza.jpg",
            title: "Margherita Pizza",
            description:
                "A classic Italian pizza topped with fresh mozzarella, tomato sauce, and basil leaves.",
            price: "26.00",
            rating: 4.6,
        },
        {
            id: 6,
            img: "/images/carocel/beef.webp",
            title: "Beef Tacos",
            description:
                "Crispy taco shells filled with seasoned ground beef, lettuce, cheese, and a drizzle of salsa.",
            price: "23.00",
            rating: 4.5,
        },
        {
            id: 7,
            img: "/images/carocel/ice.webp",
            title: "Vanilla Ice Cream",
            description:
                "Creamy and smooth vanilla ice cream, perfect for dessert or a sweet treat any time of the day.",
            price: "23.00",
            rating: 4.5,
        },
    ];

    let showMessage = false;
    let messageTimeout;

function addToCart(item) {
    cart.update((items) => {
        const existingItem = items.find((i) => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            items = [...items, { ...item, quantity: 1 }];
        }
        return items;
    });


        menuItems = menuItems.map((i) =>
            i.id === item.id ? { ...i, isAdded: !i.isAdded } : i,
        );

        showMessage = true;
        clearTimeout(messageTimeout);
        messageTimeout = setTimeout(() => (showMessage = false), 2000);
    }

    //carocel js
    function prev() {
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    function next() {
        currentIndex = Math.min(
            currentIndex + 1,
            menuItems.length - cardsPerView,
        );
    }
</script>

<Wrapper>
    <!-- "Product added" message -->
    {#if showMessage}
        <div
            class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
            {menuItems.find((i) => i.isAdded)
                ? "Product added to cart!"
                : "Product removed from cart!"}
        </div>
    {/if}

    <div class="px-4 sm:px-6 lg:px-8">
        <p
            class="text-[#FF6868] text-sm md:text-[16px] font-bold tracking-widest capitalize"
        >
            Special Dishes
        </p>
        <div class="flex justify-between items-end">
            <h1 class="text-2xl md:text-4xl font-bold py-4 w-2xs leading-12">
                Standout Dishes From Our Menu
            </h1>
            <!-- Navigation Buttons -->
            <div class="flex gap-5">
                <button
                    on:click={prev}
                    class="bg-[#EFEFEF] w-12 h-12 rounded-full cursor-pointer hover:bg-green-400"
                >
                    &#10094;
                </button>
                <button
                    on:click={next}
                    class="bg-[#EFEFEF] w-12 h-12 rounded-full cursor-pointer hover:bg-green-400"
                >
                    &#10095;
                </button>
            </div>
        </div>

        <div class="py-10 overflow-hidden">
            <div
                class="flex transition-transform duration-300 ease-in-out gap-10 px-10"
                style="transform: translateX(-{currentIndex *
                    (100 / cardsPerView)}%);"
            >
                {#each menuItems as item}
                    <div
                        class="w-full sm:w-[400px] flex-shrink-0 px-2 text-black"
                    >
                        <div
                            class="w-full h-full bg-white shadow shadow-[#0000001A] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <!-- Add to Cart Button -->
                            <button
                                class="addtocart cursor-pointer bg-green-400 h-11 w-14 items-center flex justify-center rounded-br-2xl text-center"
                                on:click={() => addToCart(item)}
                            >
                                <Rating
                                    total={1}
                                    rating={item.isAdded ? 1 : 0}
                                    id="example-5"
                                    icon={Heart}
                                    iconStrokeColor={item.isAdded
                                        ? "orange"
                                        : "#fff"}
                                />
                            </button>
                            <div>
                                <img
                                    class="mx-auto rounded-full w-60 h-60"
                                    src={item.img}
                                    alt={item.title}
                                    width="200"
                                    height="200"
                                />
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-black">
                                    {item.title}
                                </h3>
                                <p class="text-[#555555] py-2 font-medium">
                                    {item.description}
                                </p>
                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-semibold">
                                        <span class="text-[#FF6868]">$</span>
                                        {item.price}
                                    </span>
                                    <span
                                        class="px-2 py-1 rounded-full font-semibold text-xl"
                                    >
                                        <span class="text-yellow-300 text-2xl"
                                            >★</span
                                        >
                                        {item.rating}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</Wrapper>
