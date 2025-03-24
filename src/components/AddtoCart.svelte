<script>
    export let cart = [];

    function removeItem(itemId) {
        cart = cart.filter((item) => item.id !== itemId);
    }
</script>

<div class="mt-10 px-10">
    <h2 class="text-2xl font-bold mb-5">Cart</h2>
    {#if cart.length === 0}
        <p class="text-gray-500">Your cart is empty.</p>
    {:else}
        <ul>
            {#each cart as item}
                <li class="flex justify-between items-center mb-4 p-4 bg-white shadow rounded-lg">
                    <div>
                        <h3 class="text-lg font-bold">{item.title}</h3>
                        <p class="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-xl font-semibold">
                            <span class="text-[#FF6868]">$</span> {(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                            on:click={() => removeItem(item.id)}
                            class="text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>