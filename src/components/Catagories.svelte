<script>
    import Wrapper from "./Wrapper.svelte";
    const categories = [
        {
            img: "/images/categories/png1.svg",
            title: "Main Dish",
            para: "(86 dishes)",
        },

        {
            img: "/images/categories/png2.svg",
            title: "Break Fast",
            para: "(12 break fast)",
        },

        {
            img: "/images/categories/png3.svg",
            title: "Dessert",
            para: "(48 dessert)",
        },

        {
            img: "/images/categories/png4.svg",
            title: "Browse All",
            para: "(255 Items)",
        },
    ];
</script>
<Wrapper>
    <div class="py-10 md:py-20">
        <p class="text-center text-[#FF6868] text-sm md:text-[16px] font-bold tracking-widest">
            Customer Favorites
        </p>
        <h1 class="text-center text-2xl md:text-4xl font-bold py-4">Popular Categories</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-5 lg:mx-12 my-10">
            {#each categories as data}
                <div class="bg-white shadow shadow-[#0000001A] w-full max-w-[280px] mx-auto h-[280px] py-10 rounded-2xl text-center hover:scale-110 transition-transform duration-300 ease-in-out">

                    <div class="bg-[#C1F1C6] rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mx-auto">
                        <img
                            class="object-cover"
                            src={data.img}
                            alt={data.title}
                        />
                    </div>
                    <h2 class="text-lg sm:text-xl font-bold pt-3">{data.title}</h2>
                    <p class="text-[#555555] font-medium pt-2">{data.para}</p>
                </div>
            {/each}
        </div>
    </div>
</Wrapper>
