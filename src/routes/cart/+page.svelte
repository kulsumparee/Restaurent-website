<script>
    import { Button } from "flowbite-svelte";
    import { cart } from "../../store/themeStore";

    function removeItem(itemId) {
        cart.update((items) => {
            return items.filter((item) => item.id !== itemId);
        });
    }

    // Calculate total price correctly
    $: totalPrice = $cart.reduce((sum, item) => sum + (Number(item.price || 0) * item.quantity), 0);
</script>

<div class="mt-10 px-10">
    <h2 class="text-3xl font-bold py-10 text-center">
        Your <span class="text-[#39DB4A]">Cart</span>
    </h2>

    <!-- Cart Items Table -->
    <div class="overflow-x-auto">
        <table class="max-w-full w-full border rounded-2xl border-gray-300">
            <thead>
                <tr class="bg-gray-100 text-green-600 ">
                    <th class="p-6 text-left">Image</th>
                    <th class="p-6 text-left">Title</th>
                    <th class="p-6 text-left">Quantity</th>
                    <th class="p-6 text-left">Price</th>
                    <th class="p-6 text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {#if $cart.length === 0}
                    <tr>
                        <td colspan="5" class="py-10 text-center">
                            <p class="text-xl font-semibold text-gray-500">
                                Your cart is empty. Add items to <a class="text-green-500" href="/">continue shopping</a>.
                            </p>
                        </td>
                    </tr>
                {:else}
                    {#each $cart as item}
                        <tr class="border-b border-gray-300 bg-white ">
                            <td class=" w-20 h-24 flex-shrink-0 p-2">
                                <img src={item.img} alt="img"  class=" object-cover rounded-full w-full h-full"/>
                            </td>
                            <td class="p-3">
                                <h3 class="text-lg font-bold text-black">{item.title}</h3>
                            </td>
                            <td class="p-3">
                                <p class="text-gray-500">{item.quantity}</p>
                            </td>
                            <td class="p-3">
                                <span class="text-xl font-semibold text-black">
                                    <span class="text-[#FF6868]">$</span>
                                    {(item.price * item.quantity).toFixed(2)}
                                </span>
                            </td>
                            <td class="p-3">
                                <button
                                    on:click={() => removeItem(item.id)}
                                    class="text-red-500 hover:text-red-700 bg-[#5dea6b] py-2 px-3 rounded-xl cursor-pointer"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>

    <div class="py-20"><hr /></div>

    <!-- Coupon & Cart Totals -->
    <div class="md:flex justify-between w-full space-y-10">
        <div class="flex w-full gap-4 h-14">
            <input type="text" class="bg-white py-2 w-60 text-black px-3 border-2 rounded-md" placeholder="Coupon Code"/>
            <button class="py-2 px-3 bg-[#5dea6b] rounded-md cursor-pointer font-medium">Apply Coupon</button>
        </div>

        <!-- Single Cart Totals Card -->
        <div class="bg-white text-black md:w-[40%] rounded-md shadow shadow-[#0000001A]">
            <h1 class="text-lg font-semibold text-green-600 bg-gray-200 py-3 rounded-t-md text-center">
                Cart Totals
            </h1>

            {#if $cart.length > 0}
                <div class="px-10">
                    <div class="flex gap-10 justify-between py-4 px-4 font-medium">
                        <h1>Subtotal</h1>
                        <p><span>$</span>{totalPrice.toFixed(2)}</p>
                    </div>
                    <hr class="text-green-600" />
                    <div class="flex gap-10 justify-between py-4 px-4 font-medium">
                        <h1>Shipping</h1>
                        <p>$10</p>
                    </div>
                    <hr class="text-green-600" />
                    <div class="flex gap-10 justify-between py-4 px-4 font-medium">
                        <h1>Total</h1>
                        <p><span>$</span>{(totalPrice + 10).toFixed(2)}</p>
                    </div>
                    <hr class="text-green-600" />
                </div>
            {:else}
                <div class="px-10">
                    <div class="flex gap-10 justify-between py-4 px-4 font-medium">
                        <h1>Subtotal</h1>
                        <p>$0.00</p>
                    </div>
                    <hr class="text-green-600" />
                    <div class="flex gap-10 justify-between py-4 px-4 font-medium">
                        <h1>Shipping</h1>
                        <p>$10</p>
                    </div>
                    <hr class="text-green-600" />
                    <div class="flex gap-10 justify-between py-4 px-4 font-medium">
                        <h1>Total</h1>
                        <p>$10.00</p>
                    </div>
                    <hr class="text-green-600" />
                </div>
            {/if}

            <div class="flex justify-center">
                <button class="cursor-pointer my-5 bg-[#5dea6b] py-2 px-7 rounded-md text-white font-medium">Checkout</button>
            </div>
        </div>
    </div>
</div>
