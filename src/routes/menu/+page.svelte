<script>
    import { Button } from "flowbite-svelte";
    import { cart } from "../../store/themeStore";

    // Your menu items with IDs (important for cart operations)
    const menuItems = [
        {
            category: "Appetizers",
            items: [
                {
                    id: 1,
                    img: "/images/menu/green-salad.jpg",
                    title: "Garden Fresh Salad",
                    description: "Mixed greens, cherry tomatoes, cucumber",
                    price: 8.99,
                },
                {
                    id: 2,
                    img: "/images/menu/Crispy.jpg",
                    title: "Crispy Bruschetta",
                    description: "Toasted ciabatta, fresh tomatoes",
                    price: 7.5,
                },
            ],
        },
        {
            category: "Main Courses",
            items: [
                {
                    id: 3,
                    img: "/images/menu/chicken.jpg",
                    title: "Herb-Roasted Chicken",
                    description: "Free-range chicken, rosemary",
                    price: 18.99,
                },
                {
                    id: 4,
                    img: "/images/menu/mashroom.jpg",
                    title: "Wild Mushroom Risotto",
                    description: "Arborio rice, wild mushrooms",
                    price: 16.5,
                },
            ],
        },
    ];

    function addToCart(item) {
        cart.update((items) => {
            const existingItem = items.find((i) => i.id === item.id);

            if (existingItem) {
                return items.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
                );
            } else {
                return [...items, { ...item, quantity: 1 }];
            }
        });

        showToast(`${item.title} added to cart`);
    }

    function showToast(message) {
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.className =
            "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50";
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
</script>

<div class="min-h-screen text-green-900">
    <div class="container mx-auto py-8">
        <header class="text-center mb-12">
            <h1 class="text-5xl font-bold text-green-700 mb-4">
                Green Leaf Bistro
            </h1>
            <p class="text-green-600 text-xl">Seasonal, Fresh, Sustainable</p>
        </header>

        <main class="bg-green-50 rounded-md px-10 py-10 my-10">
            {#each menuItems as category}
                <section class="mb-12">
                    <h2 class="text-3xl font-semibold text-green-600 pb-2 my-5">
                        {category.category}
                    </h2>

                    <div class="grid md:grid-cols-2 gap-6">
                        {#each category.items as item}
                            <div
                                class="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 transition-colors"
                            >
                                <div
                                    class="flex justify-between items-start gap-4 "
                                >
                                    <div class="w-24 h-24 flex-shrink-0">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            class="w-full h-full object-cover rounded-full"
                                         
                                        />
                                    </div>
                                    <div class="flex-grow">
                                        <h3
                                            class="text-xl font-bold text-green-800 mb-2"
                                        >
                                            {item.title}
                                        </h3>
                                        <p class="text-green-600 text-sm mb-3">
                                            {item.description}
                                        </p>
                                        <div
                                            class="flex justify-between items-center"
                                        >
                                            <span class="text-black font-bold"
                                                >${item.price.toFixed(2)}</span
                                            >
                                            <Button
                                                on:click={() => addToCart(item)}
                                                color="green"
                                                class="hover:bg-green-700 transition-colors"
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </section>
            {/each}
        </main>
    </div>
</div>
