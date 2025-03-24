<script>
    import Button from "./common/Button.svelte";
    import Wrapper from "./Wrapper.svelte";
    const ServiceData = [
        {
            img: "/images/services/icon2.svg",
            title: "Catering",
            description:
                "Delight your guests with our flavors and  presentation",
        },
        {
            img: "/images/services/time.svg",
            title: "Fast delivery",
            description:
                "We deliver your order promptly to your door",
        },
        {
            img: "/images/services/icon3.svg",
            title: "Online Ordering",
            description:
                "Explore menu & order with ease using our Online Ordering ",
        },
        {
            img: "/images/services/icon1.svg",
            title: "Gift Cards",
            description:
                "Give the gift of exceptional dining with Foodi Gift Cards",
        },
    ];
</script>

<Wrapper>
    <div class="flex flex-col lg:flex-row px-5 md:px-20 pb-10 gap-10">
        <!-- leftside -->
        <div class="w-full lg:w-1/2">
            <p class="text-[#FF6868] text-sm md:text-[16px] font-bold tracking-widest capitalize">
                Our Story & Services
            </p>
            <h1 class="text-2xl md:text-4xl font-bold py-5 lg:py-10 lg:w-[70%] leading-12">
                Our Culinary Journey And Services
            </h1>
            <p class="lg:w-[70%] py-5 text-lg">
                Rooted in passion, we curate unforgettable dining experiences
                and offer exceptional services, blending culinary artistry with
                warm hospitality.
            </p>
            <div class="pt-5">
                <Button title="Explore" />
            </div>
        </div>
        <!-- rightside -->
        <div class="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {#each ServiceData as items}
                <div class="bg-white shadow shadow-[#00000024] py-5 px-2 rounded-2xl text-center">
                    <img src={items.img} alt="img" class="mx-auto" />
                    <h2 class="text-[#5FE26C] text-md md:text-[25px] font-bold tracking-widest capitalize py-3">
                        {items.title}
                    </h2>
                    <p class="text-[#90BD95] text-xl">
                        {items.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</Wrapper>